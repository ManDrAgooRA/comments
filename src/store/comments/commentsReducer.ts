import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCommentListThunk } from './thunks';
import { IComment } from '../../utils/interfaces/comments';

export interface ICommentsStore {
  commentsList: IComment[];
  limit: number;
}

export const initialStateComments: ICommentsStore = {
  commentsList: [],
  limit: 10,
};

export const commentsSlice = createSlice({
  initialState: initialStateComments,
  name: 'charachters',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentListThunk.fulfilled, (state: ICommentsStore, action: PayloadAction<{comments: IComment[]}>) => {
        state.commentsList = action.payload.comments;
      })
  }
});

export const commentsReducer = commentsSlice.reducer;