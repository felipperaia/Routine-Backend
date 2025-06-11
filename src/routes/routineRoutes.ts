import { Router } from 'express';
import { createRoutine, listRoutines, deleteRoutine, getRoutine } from '../controllers/routineController';

const router = Router();
router.post('/', createRoutine);
router.get('/user/:userId', listRoutines);
router.get('/:id', getRoutine);
router.delete('/:id', deleteRoutine);
export default router;