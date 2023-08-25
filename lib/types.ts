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
