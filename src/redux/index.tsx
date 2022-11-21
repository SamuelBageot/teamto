import * as charactersRedux from './characters/charactersSlice'
import * as homeworldsRedux from './homeworlds/homeworldsSlice'

export const actions = {
  characters: charactersRedux.actions,
  homeworlds: homeworldsRedux.actions,
}

export const reducers = {
  characters: charactersRedux.reducer,
  homeworlds: homeworldsRedux.reducer,
}
