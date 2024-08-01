// user.controller.js

import { uploadOnCloudinary } from '../utils/cloudinary.js'; // Import your upload function
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { User } from '../models/user.models.js';

const generateAccessAndRefreshTokens = async userId => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, 'Error generating tokens');
  }
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, username } = req.body;

  if ([name, email, password, username].some(field => !field.trim())) {
    throw new ApiError(409, 'All fields are required');
  }

  const existedUser = await User.findOne({ email });

  if (existedUser) {
    throw new ApiError(409, 'Email already exists');
  }

  // Check if image file is present and handle its upload

  // Handle image upload
  let imageUrl = null;
  if (req.file) {
    const imageLocalPath = req.file.path;
    const image = await uploadOnCloudinary(imageLocalPath);

    if (!image) {
      throw new ApiError(400, 'Failed to upload image');
    }
    imageUrl = image.url;
  } else {
    throw new ApiError(400, 'No image file provided');
  }

  // Hash password if needed (uncomment if using bcrypt)
  // const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    image: imageUrl,
    name,
    email,
    password,
    username: username.toLowerCase(),
  });

  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken '
  );

  if (!createdUser) {
    throw new ApiError(500, 'Error registering user');
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, 'User registered successfully'));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(404, 'Invalid email or password');
  }

  const match = await user.comparePassword(password);

  if (!match) {
    throw new ApiError(401, 'Invalid credentials');
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    '-password -refreshToken'
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
  };

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken, refreshToken },
        'Login successful'
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    { refreshToken: undefined },
    { new: true }
  );

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, {}, 'Logged out successfully'));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, 'Unauthorized');
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken._id);

    if (!user) {
      throw new ApiError(401, 'Invalid refresh token');
    }

    if (incomingRefreshToken !== user.refreshToken) {
      throw new ApiError(401, 'Token expired or used');
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const options = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    };

    return res
      .status(200)
      .cookie('accessToken', accessToken, options)
      .cookie('refreshToken', refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          'Access token refreshed'
        )
      );
  } catch (error) {
    throw new ApiError(401, 'Invalid refresh token');
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };
