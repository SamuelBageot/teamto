import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "./types";

type CharactersState = {
  characters: Character[];
  isLoading: boolean;
  search: string;
  details: {};
};

const initialState: CharactersState = {
  characters: [],
  isLoading: false,
  details: {},
  search: "",
};

const slice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharactersLoading(state) {
      state.isLoading = true;
    },
    getCharactersSuccess(state, action) {
      const characters = action.payload;
      state.characters = characters;
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
  },
});

export const { reducer, actions } = slice;

export default slice.reducer;
