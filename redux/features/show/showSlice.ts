import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import type { IShow } from "@/lib/types";

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
export const selectShow = (state: RootState) => state.show.value;

export default show.reducer;
