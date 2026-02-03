import express from 'express';
import { body } from 'express-validator';
import { authenticate } from '../middleware/auth.js';
import {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

router.post(
  '/tasks',
  authenticate,
  [
    body('title').trim().notEmpty().withMessage('Title is required'),
    body('status').optional().isIn(['pending', 'completed']).withMessage('Invalid status')
  ],
  createTask
);

router.get('/tasks', authenticate, getTasks);

router.get('/tasks/:id', authenticate, getTaskById);

router.put(
  '/tasks/:id',
  authenticate,
  [
    body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
    body('status').optional().isIn(['pending', 'completed']).withMessage('Invalid status')
  ],
  updateTask
);

router.delete('/tasks/:id', authenticate, deleteTask);

export default router;
