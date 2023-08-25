import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Episode {
  @prop({ default: () => nanoid(9), type: () => String })
  _id: string;

  @prop()
  title: string;

  @prop()
  episodeId: string;

  @prop()
  description: string;

  @prop()
  thumbnail: string;

  @prop()
  date: string;

  @prop()
  subtitles: Array<string>;

  @prop()
  video: string;

  @prop()
  rating: string;

  @prop()
  tags: Array<string>;
}
