import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './utils/hooks/storeHooks';
import Loader from './components/Loader/Loader';
import { getCommentListThunk } from './store/comments/thunks';
import { getIsLoading } from './store/app/selectors';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import './App.css'

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(getCommentListThunk());
  }, [])

  if(isLoading) {
    return <Loader/>
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
