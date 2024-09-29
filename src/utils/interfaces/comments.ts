export interface IAuthorComent {
    fullName: string;
    id: number;
    username: string
}

export interface IComment {
    body: string,
    id: number,
    likes: number,
    postId: number,
    user: IAuthorComent
}

export interface ICommentsResponse {
    comments: IComment[],
    limit: number,
    skip: number,
    total: number,
}

export interface ICommentDeleteResponse {
    id: number,
    title: string,
    isDeleted: boolean,
    deletedOn: string
}