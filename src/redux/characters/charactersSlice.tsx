import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Character = {};

type CharactersState = {
  characters: Character[];
  isLoading: boolean;
};

const initialState: CharactersState = {
  characters: [],
  isLoading: false,
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
  },
});

export const { reducer, actions } = slice;

export default slice.reducer;
