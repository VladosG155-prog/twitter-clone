import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { sessionSlice } from "@/entities/session";

import rootSaga from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
