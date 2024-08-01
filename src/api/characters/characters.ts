import axiosInstance from '../instance';
import Endpoints from '../endpoints';
import { ICharacter } from '../../store/characters/charactersReducer';
import { AxiosResponse } from 'axios';

export interface ICharactersResponse {
  count: number,
  next?: string,
  previous?: string,
  results: ICharacter[],
}

export const getCharactersListAPI = async (page: number): Promise<AxiosResponse<ICharactersResponse>> => {
  return axiosInstance.get(`${Endpoints.CHARACTERS.LIST}?page=${page}`);
}