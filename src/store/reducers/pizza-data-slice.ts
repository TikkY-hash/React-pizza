import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IInitialState,IPizzaListType} from "../../types/reducers-type";

const initialState : IInitialState = {
    error : null,
    loading : true,
    pizzaList : [],
    count : 0,
    price : 0
}

const pizzaDataSlice = createSlice({
    name : 'pizzaReducer',
    initialState,
    reducers : {
        onUpdateLoad (state) {
            state.loading = true
        },
        onUpdateError(state,action : PayloadAction<string>){
            state.loading = false
            state.error = action.payload
        },
        onUpdateData(state,action: PayloadAction<IPizzaListType []>){
            state.loading = false
            state.error = null
            state.pizzaList = action.payload
        }
    }
})


export const {onUpdateLoad,onUpdateData} = pizzaDataSlice.actions
export default pizzaDataSlice.reducer




