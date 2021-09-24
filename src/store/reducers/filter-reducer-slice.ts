import {IInitialFilterState} from "../../types/reducers-type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState : IInitialFilterState = {
    filterButtonsId : -1,
    filterSortLabel : 'rating'
}

const filterReducerSlice = createSlice({
    name : 'filterReducerSlice',
    initialState,
    reducers : ({
        onUpdateFilter (state,action : PayloadAction<number>) {
            state.filterButtonsId = action.payload
        },
        onUpdateSort (state,action : PayloadAction<string>) {
            state.filterSortLabel = action.payload
        }
    })
})


export const {onUpdateFilter,onUpdateSort} = filterReducerSlice.actions
export default filterReducerSlice.reducer
