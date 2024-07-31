import { createSlice } from '@reduxjs/toolkit';

export interface ICharactersStore {
  value: number;
}

export const initialStateCharacters: ICharactersStore = {
  value: 0,
};

export const charactersSlice = createSlice({
  initialState: initialStateCharacters,
  name: 'charachters',
  reducers: {}
});

export const charactersReducer = charactersSlice.reducer;