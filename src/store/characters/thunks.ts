import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharactersListAPI, ICharactersResponse } from "../../api/characters/characters";
import { RootState } from "../store";

export const getCharactersListThunk = createAsyncThunk<ICharactersResponse>(
  'characters/getCaractersList:fetch', 
  async (_, {getState}) => {
    const { characters } = getState() as RootState;
    const { currentPage } = characters;
  
    const response = await getCharactersListAPI(currentPage);

    return response.data;
  },
);