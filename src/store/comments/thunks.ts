import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { deleteCommentAPI, getCommentsListAPI } from "../../api/comments/comments";
import { RootState } from "../store";
import { ICommentsResponse } from "../../utils/interfaces/comments";
import { setSystemMessage } from "../app/appReducer";

export const getCommentListThunk = createAsyncThunk<ICommentsResponse>(
    'comments/getCommentList:fetch', 
    async (_, {getState}) => {
        const { comments } = getState() as RootState;
        const { limit } = comments;
        const response = await getCommentsListAPI(limit);

        return response.data;
    },
);

export const deleteCommentThunk = createAsyncThunk<void, number, { dispatch: Dispatch }>(
    'comments/deleteComment', 
    async (commentId, {dispatch}) => {
        const result = await deleteCommentAPI(commentId);

        if (result.isDeleted) {
            dispatch(setSystemMessage('Delete simulation complete'))
        }
    },
);