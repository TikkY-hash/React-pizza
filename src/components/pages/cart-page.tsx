import React from 'react';
import useTypedSelector from "../hooks";
import EmptyCart from "../empty-cart";
import MainFooterPageContent from "../main-page-content/main-footer-page-content";
import {shallowEqual} from "react-redux";

const CartPage = () => {
    const {items} = useTypedSelector(({cartSlice}) => ({
        items : cartSlice.items
    }),shallowEqual)

    const emptyArray: any[] = []

    return (
        <div className="wrapper">
            <div className="content">
                <div className="container container--cart">
                    <div className="cart">
                        {emptyArray.concat(...Object.values((items))).length ? <MainFooterPageContent/> : <EmptyCart/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;