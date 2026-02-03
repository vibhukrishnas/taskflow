import express from 'express';
import { body } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import { getProfile, updateProfile } from '../controllers/userController.js';

const router = express.Router();

router.get('/me', authenticate, getProfile);

router.put(
  '/me',
  authenticate,
  [body('name').trim().notEmpty().withMessage('Name is required')],
  updateProfile
);

export default router;
