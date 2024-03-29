import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { sessionSlice } from "@/entities/session/model";
import { tweetSlice } from "@/entities/tweet/model/slice";
import { globalSlice } from "@/shared/lib/globalSlice";

import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  tweets: tweetSlice.reducer,
  app: globalSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
