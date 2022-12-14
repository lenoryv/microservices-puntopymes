import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    rol: {
      type: String,
      required: true,
    },
    username: String,
    password: String,
  },
  { versionKey: false },
);

UserSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
