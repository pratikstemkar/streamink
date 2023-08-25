import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";
import { Season } from "./Season";

export class Show {
  @prop({ default: () => nanoid(9), type: () => String })
  _id: string;

  @prop()
  title: string;

  @prop()
  showId: string;

  @prop()
  description: string;

  @prop()
  thumbnail: string;

  @prop()
  date: string;

  @prop()
  subtitles: Array<string>;

  @prop()
  trailer: string;

  @prop()
  rating: string;

  @prop()
  seasons: Array<Season>;

  @prop()
  tags: Array<string>;
}
