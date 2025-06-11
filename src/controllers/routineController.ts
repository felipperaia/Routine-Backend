import { Request, Response } from 'express';
import Routine from '../models/Routine';

export const createRoutine = async (req: Request, res: Response) => {
  const data = req.body;
  const routine = await Routine.create(data);
  res.status(201).json(routine);
};

export const listRoutines = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const routines = await Routine.find({ userId });
  res.json(routines);
};

export const deleteRoutine = async (req: Request, res: Response) => {
  const id = req.params.id;
  await Routine.findByIdAndDelete(id);
  res.status(204).end();
};

export const getRoutine = async (req: Request, res: Response) => {
  const id = req.params.id;
  const routine = await Routine.findById(id);
  res.json(routine);
};