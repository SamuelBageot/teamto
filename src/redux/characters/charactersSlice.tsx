import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRangeNbs } from "../../utils";
import { Character } from "./types";

type CharactersState = {
  characters: Character[];
  isLoading: boolean;
  search: string;
  details: Character;
  pagesRange?: number[];
  activePage: string;
  nbOfPages: number;
  resultsLimit: string;
};

const initialState: CharactersState = {
  characters: [],
  isLoading: false,
  details: {},
  search: "",
  pagesRange: [],
  activePage: '1',
  nbOfPages: 0,
  resultsLimit: '10'
};

const slice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharactersLoading(state) {
      state.isLoading = true;
    },
    getCharactersSuccess(state, action) {
      const { results: characters, count } = action.payload;
      state.characters = characters;
      state.pagesRange = getRangeNbs(1, Math.ceil(count/10));
      state.nbOfPages = Math.ceil(count/10);
      state.isLoading = false;
    },
    getCharactersError(state) {
      state.isLoading = false;
    },
    setSearch(state, action) {
      // Do nothing here
    },
    setSearchSuccess(state, action) {
      state.search = action.payload;
      state.activePage = '1';
    },
    getCharacterDetailsSuccess(state, action) {
      state.details = action.payload;
      state.isLoading = false;
    },
    getCharacterDetailsLoading(state) {
      state.isLoading = true;
    },
    getCharacterDetailsError(state) {
      state.isLoading = false;
    },
    setActivePage(state, action) {
      state.activePage = action.payload;
    }
  },
});

export const { reducer, actions } = slice;

export default slice.reducer;
