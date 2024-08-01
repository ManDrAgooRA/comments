import { AnyAction, createSlice } from '@reduxjs/toolkit';

export interface IAppStore {
  isLoading: boolean;
}

export const initialStateApp: IAppStore = {
  isLoading: false,
};

export const appSlice = createSlice({
  initialState: initialStateApp,
  name: 'app',
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addMatcher(
      (action: AnyAction) =>
        action?.type?.includes('/pending') &&
        action?.type?.includes(':fetch'),
      (state) => {
        state.isLoading = true;
      },
    )
    .addMatcher(
      (action: AnyAction) => action?.type?.includes('/fulfilled') && action?.type?.includes(':fetch'),
      (state) => {
        state.isLoading = false;
      },
    )
  }
})

export const appReducer = appSlice.reducer;