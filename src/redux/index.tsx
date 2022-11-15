import * as charactersRedux from './characters/charactersSlice'

export const actions = {
  characters: charactersRedux.actions,
}

export const reducers = {
  characters: charactersRedux.reducer,
}
