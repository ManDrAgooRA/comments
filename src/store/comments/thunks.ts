import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCommentsListAPI } from "../../api/comments/comments";
import { RootState } from "../store";
import { ICommentsResponse } from "../../utils/interfaces/comments";


export const getCommentListThunk = createAsyncThunk<ICommentsResponse>(
    'comments/getCommentList:fetch', 
    async (_, {getState}) => {
        const { comments } = getState() as RootState;
        const { limit } = comments;
        const response = await getCommentsListAPI(limit);

        return response.data;
    },
  );