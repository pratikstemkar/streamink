import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";

// Define a type for the slice state
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

interface ShowsState {
  value: Array<IShow>;
}

// Initial State
const initialState: ShowsState = {
  value: [],
};

export const show = createSlice({
  name: "shows",
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
  },
});

export const { reset } = show.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectShow = (state: RootState) => state.show.value;

export default show.reducer;
