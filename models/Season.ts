import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";
import { Episode } from "./Episode";

export class Season {
  @prop({ default: () => nanoid(9), type: () => String })
  _id: string;

  @prop()
  seasonId: string;

  @prop()
  description: string;

  @prop()
  thumbnail: string;

  @prop()
  trailer: string;

  @prop()
  date: string;

  @prop()
  subtitles: Array<string>;

  @prop()
  episodes: Array<Episode>;

  @prop()
  rating: string;

  @prop()
  tags: Array<string>;
}
