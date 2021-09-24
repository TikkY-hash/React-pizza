import {combineReducers} from "@reduxjs/toolkit";
import pizzaDataSlice from './pizza-data-slice'
import filterReducerSlice from './filter-reducer-slice'
import cartSlice from './cart-slice'
import {actions as cartActions} from "./cart-slice";
import {onUpdateLoad,onUpdateData} from "./pizza-data-slice";
import {onUpdateSort,onUpdateFilter} from "./filter-reducer-slice";

const reducer = combineReducers({
    pizzaDataSlice,
    filterReducerSlice,
    cartSlice
})


export const allActions = {
    onUpdateSort,
    onUpdateFilter,
    ...cartActions,
    onUpdateLoad,
    onUpdateData
}

export type RootState = ReturnType<typeof reducer>
export default reducer