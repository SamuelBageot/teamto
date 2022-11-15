import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Character = {};

type CharactersState = {
  characters: Character[];
  isLoading: boolean;
};

const initialState: CharactersState = {
  characters: [],
  isLoading: false
};

const slice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
});

export const { reducer, actions } = slice;

export default slice.reducer;
