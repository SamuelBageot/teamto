import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRangeNbs } from "../../utils";
import { Homeworld } from "./types";
// import { Character } from "./types";

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
      const { results: characters, count } = action.payload;
    },
    getHomeworldsError(state) {
      state.isLoading = false;
    },
    setSearch(state, action) {
      // Do nothing here
    },
    setSearchSuccess(state, action) {
      state.search = action.payload;
      state.activePage = '1';
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
    },
    setActivePage(state, action) {
      state.activePage = action.payload;
    }
  },
});

export const { reducer, actions } = slice;

export default slice.reducer;
