import {IPizzaListType} from "./reducers-type";
import {ICartItemListType} from "./cart-item-list-type";

export interface IPizzaListItemProps extends IPizzaListType{
    onAddCart : (newCartData : ICartItemListType) => void,
    countOfThisItem : number
}

export interface PointTypes {
    id : number,
    sizePoint ?: number,
    tittle? :  string
}
