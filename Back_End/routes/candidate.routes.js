import { Router } from 'express';
import { upload } from '../middleware/multer.middleware.js';
import {
  applyDetails,
  getAllCandidates,
} from '../controllers/candidate.controller.js';

const router = Router();

router.route('/apply').post(
  upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'coverLetter', maxCount: 1 },
  ]),
  applyDetails
);
router.route('/applicants').get(getAllCandidates);

export default router;
