import axiosInstance from '../instance';
import { Endpoints } from '../endpoints';
import { AxiosResponse } from 'axios';
import { ICommentsResponse } from '../../utils/interfaces/comments';


export const getCommentsListAPI = async (limit: number): Promise<AxiosResponse<ICommentsResponse>> => {
  return axiosInstance.get(`${Endpoints.COMMENTS.LIST}?limit=${limit}`);
}