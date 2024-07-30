import { User } from '../models/user.models.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const userDetails = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  console.log('userId:', userId);
  const user = await User.findById(userId).select('email name');
  console.log('user:', user);

  if (user) {
    res.json(new ApiResponse(200, user, 'user fetch successfully'));

    console.log('mainuser:', user);
  } else {
    res.status(404).json(new ApiResponse(404, 'User not found'));
  }
});

export { userDetails };
