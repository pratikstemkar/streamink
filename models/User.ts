import { IUser } from "@/lib/types";
import { Model, Schema, model, models } from "mongoose";

type UserModel = Model<IUser, {}>;

const schema = new Schema<IUser, UserModel>({
  name: { type: String },
  username: { type: String },
  image: { type: String },
  email: { type: String, required: true },
  password: { type: String },
});

const User = models.User || model<IUser, UserModel>("User", schema);

export default User;
