import { Router } from 'express';
import { createJobPost, getJobPost } from '../controllers/job.controller.js';
import { upload } from '../middleware/multer.middleware.js';

const router = Router();

router
  .route('/createJobPost')
  .post(upload.single('companyLogo'), createJobPost);

router.get('/getJobPost', getJobPost);

export default router;
