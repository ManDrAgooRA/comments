import { createSlice } from '@reduxjs/toolkit';
import { getCharactersListThunk } from './thunks';
import { getPage } from '../utils/getPage';

export interface ICharacter {
  birth_year: string,
  created: string,
  edited: string,
  eye_color: string,
  fims: number[],
  gender: string,
  hair_color:string,
  height: string,
  homeworld: number,
  id: number,
  mass: string,
  name: string,
  skin_color: string,
  species: number[],
  starships: number[],
  url: string,
  vehicles: number[],
}

export interface ICharactersStore {
  charactersList: ICharacter[];
  count: number,
  nextPage: number,
  previousPage: number,
  currentPage: number,
}

export const initialStateCharacters: ICharactersStore = {
  charactersList: [],
  count: 0,
  nextPage: 1,
  previousPage: 1,
  currentPage: 1,
};

export const charactersSlice = createSlice({
  initialState: initialStateCharacters,
  name: 'charachters',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharactersListThunk.fulfilled, (state, action) => {
        state.charactersList = {...action.payload.results};
        if(action.payload.next) {
          state.nextPage = getPage(action.payload.next);
          state.currentPage = getPage(action.payload.next) > 1 ? getPage(action.payload.next) - 1 : 1;
        } else {
          state.currentPage = getPage(action.payload.previous!) + 1;
        }
        if(action.payload.previous) {
          state.previousPage = getPage(action.payload.previous);
        }
      })
  }
});

export const charactersReducer = charactersSlice.reducer;