import { RootState } from "../store";

export const getIsLoading = (state: RootState) => state.app.isLoading;