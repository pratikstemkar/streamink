import { Model, Schema, model, models } from "mongoose";

interface IEpisode {
  title: string;
  episodeId: string;
  description: string;
  thumbnail: string;
  date: string;
  subtitles: Array<string>;
  video: string;
  rating: string;
  tags: Array<string>;
}

interface ISeason {
  seasonId: string;
  description: string;
  thumbnail: string;
  trailer: string;
  date: string;
  subtitles: Array<string>;
  episodes: Array<IEpisode>;
  rating: string;
  tags: Array<string>;
}

interface IShow {
  title: string;
  showId: string;
  description: string;
  thumbnail: string;
  date: string;
  subtitles: Array<string>;
  trailer: string;
  rating: string;
  seasons: Array<ISeason>;
  tags: Array<string>;
}

interface IShowMethods {
  getTitle(): string;
}

type ShowModel = Model<IShow, {}, IShowMethods>;

const schema = new Schema<IShow, ShowModel, IShowMethods>({
  title: { type: String, required: true },
  showId: { type: String, required: true },
  description: { type: String },
  thumbnail: { type: String },
  date: { type: String },
  subtitles: { type: [String] },
  trailer: { type: String },
  rating: { type: String },
  seasons: [
    {
      seasonId: { type: String },
      description: { type: String },
      thumbnail: { type: String },
      trailer: { type: String },
      date: { type: String },
      subtitles: { type: [String] },
      episodes: [
        {
          title: { type: String },
          episodeId: { type: String },
          description: { type: String },
          thumbnail: { type: String },
          date: { type: String },
          subtitles: { type: [String] },
          video: { type: String },
          rating: { type: String },
          tags: { type: [String] },
        },
      ],
      rating: { type: String },
      tags: { type: [String] },
    },
  ],
  tags: { type: [String] },
});

schema.method("getTitle", function () {
  return this.title;
});

const Show = models.Show || model<IShow, ShowModel>("Show", schema);

export default Show;
