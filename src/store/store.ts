import {configureStore,  getDefaultMiddleware} from "@reduxjs/toolkit";
import reducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer,
    devTools : true,
    middleware : [...getDefaultMiddleware({thunk : false}),sagaMiddleware]
})

sagaMiddleware.run(rootSaga)