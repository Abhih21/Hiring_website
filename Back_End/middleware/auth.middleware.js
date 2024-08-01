import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.models.js';

export const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    // Extract token from cookies
    const tokenFromCookie = req.cookies?.accessToken;
    const tokenFromHeader = req
      .header('Authorization')
      ?.replace('Bearer ', '')
      .trim();

    // // Log the tokens for debugging
    // console.log('Token from cookie:', tokenFromCookie);
    // console.log('Token from header:', tokenFromHeader);

    // Determine the token to use
    const token = tokenFromCookie || tokenFromHeader;

    // Ensure token is not empty and is a string
    if (!token || typeof token !== 'string' || token.length === 0) {
      throw new ApiError(401, 'Unauthorized request');
    }

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Log the decoded token for debugging
    // console.log('Decoded JWT token:', decodedToken);

    // Find the user associated with the token
    const user = await User.findById(decodedToken?._id).select(
      '-password -refreshToken'
    );

    if (!user) {
      throw new ApiError(401, 'Invalid Access Token');
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    throw new ApiError(401, error?.message || 'Invalid access token');
  }
});
