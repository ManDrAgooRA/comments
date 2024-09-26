import { RootState } from "../store";

export const getCommentsList = (state: RootState) => state.comments.commentsList
export const getCommentsLimit = (state: RootState) => state.comments.limit