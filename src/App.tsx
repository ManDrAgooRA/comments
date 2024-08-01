import { useEffect } from 'react';
import { useAppDispatch } from './store/utils/hooks/storeHooks';

import './App.css'
import { getCharactersListThunk } from './store/characters/thunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharactersListThunk());
  }, [])

  return (
    <>
      <h1>App component</h1>
    </>
  );
}

export default App;
