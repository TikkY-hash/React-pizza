import {IInitialCartState, IPizzaListType} from "../../types/reducers-type";
import {createSlice,  PayloadAction} from "@reduxjs/toolkit";
import {ICartItemListType} from "../../types/cart-item-list-type";

const initialState : IInitialCartState = {
    totalPrice : 0,
    totalCount : 0,
    items : {}
}

const counting = (state : IInitialCartState) => {
    const emptyArray: any[] = []
    const {items} = state

    const allPizzas : IPizzaListType[] = emptyArray.concat(...Object.values((items)))
    const totalPrice : number = allPizzas.reduce(
        (previousValue,currentValue) => previousValue + currentValue.price
        ,0)

    return {
        totalPrice,
        length : allPizzas.length
    }
}

const cartSlice = createSlice({
    name : 'filterReducerSlice',
    initialState,
    reducers : ({
        onUpdateCart (state,action : PayloadAction<ICartItemListType>) {
            const { items } = state

            !items[action.payload.id] ?
                items[action.payload.id] = [action.payload] :
                items[action.payload.id].push(action.payload)

            state.totalCount = counting(state).length
            state.totalPrice = counting(state).totalPrice
        },
        onDecreaseCart(state,action : PayloadAction<ICartItemListType>) {
            state.items[action.payload.id].pop()

            state.totalCount = counting(state).length
            state.totalPrice = counting(state).totalPrice
        },
        onDeleteCart(state,action : PayloadAction<{id : number}>) {
            state.items[action.payload.id] = []

            state.totalCount = counting(state).length
            state.totalPrice = counting(state).totalPrice
        },
        onDeleteAllCart(state) {
            state.items = {}
            state.totalCount = 0
            state.totalPrice = 0
        }
    })
})


export const actions = cartSlice.actions
export default cartSlice.reducer