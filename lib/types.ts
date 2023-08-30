export interface IEpisode {
  episodeId: string;
  description: string;
  thumbnail: string;
  video: string;
  duration: number;
}

export interface ISeason {
  seasonId: string;
  thumbnail: string;
  trailer: string;
  episodes: Array<IEpisode>;
}

export interface IShow {
  title: string;
  showId: string;
  description: string;
  thumbnail: string;
  banner: string;
  date: string;
  subtitles: Array<string>;
  trailer: string;
  rating: string;
  seasons: Array<ISeason>;
  tags: Array<string>;
}

export interface IShowsData {
  message: string;
  shows: Array<IShow>;
}

export interface showListParams {
  title: string;
  link: string;
  list: Array<IShow>;
}

export interface IUser {
  name: string;
  username: string;
  image: string;
  email: string;
  password: string;
}

export interface IWatchlist {
  userId: string;
  shows: Array<IShow>;
}
