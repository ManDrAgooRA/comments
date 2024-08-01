import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { charactersReducer } from './characters/charactersReducer';
import { appReducer } from './app/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  characters: charactersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
