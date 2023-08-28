import { IShow } from "@/lib/types";
import { Model, Schema, model, models } from "mongoose";

interface IShowMethods {
  getTitle(): string;
}

type ShowModel = Model<IShow, {}, IShowMethods>;

const schema = new Schema<IShow, ShowModel, IShowMethods>({
  title: { type: String, required: true },
  showId: { type: String, required: true },
  description: { type: String },
  thumbnail: { type: String },
  banner: { type: String },
  date: { type: String },
  subtitles: { type: [String] },
  trailer: { type: String },
  rating: { type: String },
  seasons: [
    {
      seasonId: { type: String },
      thumbnail: { type: String },
      trailer: { type: String },
      episodes: [
        {
          episodeId: { type: String },
          description: { type: String },
          thumbnail: { type: String },
          video: { type: String },
          duration: { type: Number },
        },
      ],
    },
  ],
  tags: { type: [String] },
});

schema.method("getTitle", function () {
  return this.title;
});

const Show = models.Show || model<IShow, ShowModel>("Show", schema);

export default Show;
