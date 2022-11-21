import { createSlice } from "@reduxjs/toolkit";
import { Homeworld } from "./types";

type HomeworldsState = {
  homeworlds: Homeworld[];
  isLoading: boolean;
  search: string;
  details: Homeworld;
  pagesRange?: number[];
  activePage: string;
  nbOfPages: number;
  resultsLimit: string;
};

const initialState: HomeworldsState = {
  homeworlds: [],
  isLoading: false,
  details: {},
  search: "",
  pagesRange: [],
  activePage: '1',
  nbOfPages: 0,
  resultsLimit: '10'
};

const slice = createSlice({
  name: "homeworlds",
  initialState,
  reducers: {
    getHomeworldsLoading(state) {
      state.isLoading = true;
    },
    getHomeworldsSuccess(state, action) {
      const { results: homeworlds } = action.payload;
    },
    getHomeworldsError(state) {
      state.isLoading = false;
    },
    getHomeworldDetailsSuccess(state, action) {
      state.details = action.payload;
      state.isLoading = false;
    },
    getHomeworldDetailsLoading(state) {
      state.isLoading = true;
    },
    getHomeworldDetailsError(state) {
      state.isLoading = false;
    }
  },
});

export const { reducer, actions } = slice;

export default slice.reducer;
