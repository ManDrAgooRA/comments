import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './utils/hooks/storeHooks';
import Loader from './components/Loader/Loader';
import { getCommentListThunk } from './store/comments/thunks';
import { getIsLoading, getSystemMesage } from './store/app/selectors';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import axiosInstance from './api/instance';
import { toast, ToastContainer } from 'react-toastify';
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);
  const systemMessage = useAppSelector(getSystemMesage);

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (config) => config,
      async (error) => {
        const response = error.response;
        if(response.status >= 500){
          toast.error(`Server does not work now. Please try later, code - ${response.status}`);
        } else if (response.status >= 400 && response.status < 500){
          if(response.status === 401){
            toast.error(`You are unauthorized, code - ${response.status} `);
          } else if (response.status === 403) {
            toast.error(`You do not have premissions, code - ${response.status}`);
          } else if (response.status === 404) {
            toast.error(`The server cannot find the requested resource, code - ${response.status}`);
          } else {
            toast.error(`Opps swomethin went wrong with status ${response.status} and message: ${response.message}`);
          }
        } else {
          toast.error(`Opps swomethin went wrong with status ${response.status} and message: ${response.message}`);
        }
      },
    );
  }, [])

  useEffect(() => {
    dispatch(getCommentListThunk());
  }, [])

  useEffect(() => {
    toast.success(systemMessage);
  }, [systemMessage])

  if(isLoading) {
    return <Loader/>
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
