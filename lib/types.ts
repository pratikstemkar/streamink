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
  episodes: Array<IEpisode>;
}

export interface IShow {
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

export interface IShowsData {
  message: string;
  shows: Array<IShow>;
}
