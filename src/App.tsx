import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/utils/hooks/storeHooks';
import { getCharactersListThunk } from './store/characters/thunks';
import Loader from './store/components/ui/Loader/Loader';
import './App.css'
import { getIsLoading } from './store/app/selectors';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(getCharactersListThunk());
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
