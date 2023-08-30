import { IWatchlist } from "@/lib/types";
import { Model, Schema, model, models } from "mongoose";

type WatchlistModel = Model<IWatchlist, {}>;

const schema = new Schema<IWatchlist, WatchlistModel>({
  userId: { type: String, required: true, unique: true },
  shows: { type: [String] },
});

const Watchlist =
  models.Watchlist || model<IWatchlist, WatchlistModel>("Watchlist", schema);

export default Watchlist;
