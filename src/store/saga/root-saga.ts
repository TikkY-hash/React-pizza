import {all, spawn} from 'redux-saga/effects'
import {watcherPizzaListSaga} from "./get-pizza-list-saga";

export function * rootSaga() {
        yield all([
            spawn(watcherPizzaListSaga)
        ])
}