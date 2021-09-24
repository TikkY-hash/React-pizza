import React from 'react';
import './pizza-list.scss'
import {useCallback} from "react";
import PizzaListItem from "../pizza-list-item/pizza-list-item";
import useTypedSelector from "../hooks";
import Loading from "../loading";
import useAction from "../hooks/hook-bind";
import {ICartItemListType} from "../../types/cart-item-list-type";

const PizzaList = () => {
    const {
        pizzaDataSlice : { pizzaList,loading }, cartSlice : { items } } = useTypedSelector(state => state)

    const {onUpdateCart} = useAction()

    const onAddToCart = useCallback((pizza : ICartItemListType) => {
        onUpdateCart(pizza)
    },[onUpdateCart])

    return (
        <div className="content__items">
           <ul className="pizza__list">
               {!loading ?
                   pizzaList.map((value) => {
                       const {id} = value

                       return (
                           <li key = {id} className =  "pizza__list_item">
                               <PizzaListItem
                                   {...value}
                                   onAddCart={(newCartData) => onAddToCart(newCartData)}
                                   countOfThisItem = {items[id] && items[id].length}
                               />
                           </li>
                       )
                   }) : Array.from(Array(10), (_, index) =>
                       <li key={index} style={{paddingRight : '2%'}}>
                           <Loading/>
                       </li>
                   )
               }
           </ul>
        </div>
    );
};

export default PizzaList;