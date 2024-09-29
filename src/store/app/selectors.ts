import { RootState } from "../store";

export const getIsLoading = (state: RootState) => state.app.isLoading;
export const getSystemMesage = (state: RootState) => state.app.systemMessage;