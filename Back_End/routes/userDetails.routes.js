import { Router } from 'express';
import { verifyJWT } from '../middleware/auth.middleware.js';
import { userDetails } from '../controllers/userDetails.controller.js'; // Corrected import statement

const router = Router();

router.route('/details').get(verifyJWT, userDetails);

export default router;
