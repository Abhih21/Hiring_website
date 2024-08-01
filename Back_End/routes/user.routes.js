import { Router } from 'express';
import {
  loginUser,
  registerUser,
  logoutUser,
  refreshAccessToken,
} from '../controllers/user.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

router.route('/register').post(upload.single('image'), registerUser);
router.route('/login').post(loginUser);
router.route('/logout').post(verifyJWT, logoutUser);
router.route('/refresh_token').post(refreshAccessToken);

export default router;
