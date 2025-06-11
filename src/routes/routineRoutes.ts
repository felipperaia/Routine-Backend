import { Router } from 'express';
import { createRoutine, listRoutines, deleteRoutine, getRoutine } from '../controllers/routineController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();
router.post('/', authenticate, createRoutine);
router.get('/user/:userId', listRoutines);
router.get('/:id', authenticate, getRoutine);
router.delete('/:id', authenticate, deleteRoutine);
export default router;