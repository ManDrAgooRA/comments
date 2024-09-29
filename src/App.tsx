import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './utils/hooks/storeHooks';
import Loader from './components/Loader/Loader';
import { getCommentListThunk } from './store/comments/thunks';
import { getIsLoading, getSystemMesage } from './store/app/selectors';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { toast, ToastContainer } from 'react-toastify';
import './App.scss'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);
  const systemMessage = useAppSelector(getSystemMesage);

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
