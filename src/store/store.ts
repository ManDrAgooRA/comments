import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { commentsReducer } from './comments/commentsReducer';
import { appReducer } from './app/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  comments: commentsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
