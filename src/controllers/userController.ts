import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';

export const getProfile = async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json(user);
};

export const updateProfile = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { username, password, image } = req.body;
  const update: any = { username, image };
  if (password) update.password = await bcrypt.hash(password, 10);
  const user = await User.findByIdAndUpdate(id, update, { new: true });
  res.json(user);
};