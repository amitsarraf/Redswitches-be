import mongoose, { Schema, Document } from 'mongoose';

interface ICounter extends Document {
  id: string;
  seq: number;
}

const counterSchema: Schema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

const Counter = mongoose.model<ICounter>('Counter', counterSchema);

export default Counter;
