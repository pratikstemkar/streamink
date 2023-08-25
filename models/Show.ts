import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Show {
  @prop({ default: () => nanoid(9), type: () => String })
  public _id: string;

  @prop()
  public title: string;

  @prop()
  public description: string;

  @prop()
  public date: string;

  @prop()
  public trailer: string;
}
