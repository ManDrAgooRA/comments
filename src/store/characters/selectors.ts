import { RootState } from "../store";

export const getCurrentPage = (state: RootState) => state.characters.currentPage;