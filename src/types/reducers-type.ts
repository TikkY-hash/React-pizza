import {PointTypes} from "./pizza-list-item-type";
import {ICartItemListType} from "./cart-item-list-type";

export interface IPizzaListType {
    id : number,
    imageUrl : string,
    name : string,
    types : number [],
    sizes : number [],
    price : number,
    category : number,
    rating : number,
    [key : string] : string | number | number[] | boolean | PointTypes[] | (((pizza : ICartItemListType) => void)) | never
}

export interface IInitialState {
    loading : boolean,
    count : number,
    price : number,
    error : null | string,
    pizzaList : IPizzaListType[]
}

export interface IInitialFilterState {
    filterButtonsId : number,
    filterSortLabel : string
}

export interface IInitialCartState {
    totalPrice : number,
    totalCount : number
    items : {
      [id : number]: ICartItemListType[],

    }
}
