import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteCommentThunk } from '../comments/thunks';
import { ICommentDeleteResponse } from '../../utils/interfaces/comments';

export interface IAppStore {
  isLoading: boolean;
  systemMessage: string;
}

export const initialStateApp: IAppStore = {
  isLoading: false,
  systemMessage: ''
};

export const appSlice = createSlice({
  initialState: initialStateApp,
  name: 'app',
  reducers: {
    setSystemMessage: (state: IAppStore, action: PayloadAction<string>) => {
      state.systemMessage = action.payload;
    },
    deleteSystemMessage: (state: IAppStore) => {
      state.systemMessage = '';
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(deleteCommentThunk.fulfilled, (state: IAppStore, action: PayloadAction<ICommentDeleteResponse>) => { 
      if (action.payload.isDeleted) {
        state.systemMessage = 'Delete simulation completed'
      }
    })
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

export const { setSystemMessage, deleteSystemMessage } = appSlice.actions;

export const appReducer = appSlice.reducer;