import { createAsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { deleteCommentAPI, getCommentsListAPI } from "../../api/comments/comments";
import { RootState } from "../store";
import { ICommentDeleteResponse, ICommentsResponse } from "../../utils/interfaces/comments";

export const getCommentListThunk = createAsyncThunk<ICommentsResponse>(
    'comments/getCommentList:fetch', 
    async (_, {getState}) => {
        const { comments } = getState() as RootState;
        const { limit } = comments;
        const response = await getCommentsListAPI(limit);

        return response.data;
    },
);

export const deleteCommentThunk = createAsyncThunk<ICommentDeleteResponse, number, { dispatch: Dispatch }>(
    'comments/deleteComment', 
    async (commentId) => {
        const result = await deleteCommentAPI(commentId);
 
        return result.data
    },
);