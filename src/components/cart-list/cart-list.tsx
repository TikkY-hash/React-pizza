import React, {FC} from 'react';
import CartListItem from "../cart-list-item";
import useTypedSelector from "../hooks";
import useAction from "../hooks/hook-bind";
import {ICartItemListType} from "../../types/cart-item-list-type";

const CartList : FC = () => {
    const {items} = useTypedSelector(({cartSlice : {items}}) => ({
        items
    }))
    const {onUpdateCart,onDecreaseCart,onDeleteCart} = useAction()

    const pizzaCartList : ICartItemListType[] = Object.keys(items).map((key : any) => {
        return items[key][0]
    })

    const onIncreaseCalc = (id : number) : void => {
        onUpdateCart(items[id][0])
    }

    const onDecreaseCals = (id : number) => {
        onDecreaseCart(items[id][0])
    }

    const onDeletePoint = (id :number) => {
        onDeleteCart({id})
    }

    return (
        <div className="content__items">
            <ul>
                {pizzaCartList.map(value => {
                    if(value) {
                        const {id} = value

                        return (
                            <li className="cart__item" key={id}>
                                <CartListItem
                                    {...value}
                                    count={items[id].length}
                                    price={items[id].reduce((prev,next) => prev + next.price!,0)}
                                    onIncreaseCart={onIncreaseCalc}
                                    onDecreaseCart={onDecreaseCals}
                                    onDeleteCart={onDeletePoint}
                                />
                            </li>
                        )
                    }
                    return null;
                })}
            </ul>
        </div>
    );
};

export default CartList;