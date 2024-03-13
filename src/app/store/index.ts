import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { appSlice } from "@/entities/app/model/slice";
import { sessionSlice } from "@/entities/session";
import { tweetSlice } from "@/entities/tweet/model/slice";

import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
    tweets: tweetSlice.reducer,
    app: appSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
