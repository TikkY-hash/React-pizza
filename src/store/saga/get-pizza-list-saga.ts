import {all, spawn,call,put,take,select} from "redux-saga/effects";
import {IPizzaListType} from "../../types/reducers-type";
import {onUpdateLoad,onUpdateData} from "../reducers/pizza-data-slice";
import getRequest from "./request-axios";
import {onUpdateSort,onUpdateFilter} from "../reducers/filter-reducer-slice";

export function* onChangeSortData() {
    while (true) {
        yield take([onUpdateSort.type,onUpdateFilter.type])
        yield put(onUpdateLoad())
        const {filterButtonsId,filterSortLabel}  = yield select(state => state.filterReducerSlice)

        const result : IPizzaListType[] = yield call(getRequest,'/pizzas',filterSortLabel,filterButtonsId)
        yield put(onUpdateData(result))
    }
}

export function* onUpdateResult() {
    const result : IPizzaListType[] = yield call(getRequest,'/pizzas')

    yield put(onUpdateData(result))
}

export function* workerPizzaListSaga() {
   const result : IPizzaListType[] = yield call(getRequest,'/pizzas')

   yield put(onUpdateData(result))
}

export function* watcherPizzaListSaga() {
    yield  all([
        spawn(workerPizzaListSaga),
        spawn(onChangeSortData)
    ])
}