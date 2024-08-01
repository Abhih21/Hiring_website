import { Router } from 'express';
import { createJobPost } from '../controllers/job.controller.js';
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

router
  .route('/createJobPost')
  .post(upload.single('companyLogo'), createJobPost);

export default router;
