import React from 'react';
import useTypedSelector from "../hooks";
import {shallowEqual} from "react-redux";
import CartFooterPay from "../cart-footer-pay";

const CartFooter = () => {
    const {totalCount,totalPrice} = useTypedSelector(({cartSlice}) => ({
      totalCount : cartSlice.totalCount,
      totalPrice : cartSlice.totalPrice
    }),shallowEqual)

    return (
        <div className="cart__bottom">
            <div className="cart__bottom-details">
                <span> Всего пицц: <b>{totalCount} шт.</b> </span>
                <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
            </div>
            <CartFooterPay/>
        </div>
    );
};

export default CartFooter;