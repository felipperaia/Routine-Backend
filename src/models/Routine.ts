import { Schema, model, Document, Types } from 'mongoose';

export interface IRoutine extends Document {
  userId: Types.ObjectId;
  title: string;
  description: string;
  location: {
    cep: string;
    state: string;
    city: string;
    street: string;
  };
  time: string;
  image: string;
}

const RoutineSchema = new Schema<IRoutine>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  location: {
    cep: { type: String },
    state: { type: String },
    city: { type: String },
    street: { type: String }
  },
  time: { type: String },
  image: { type: String }
});

export default model<IRoutine>('Routine', RoutineSchema);