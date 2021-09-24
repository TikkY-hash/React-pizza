import React,{memo,FC} from 'react';
import CartHeader from "../cart-header";
import CartList from "../cart-list";
import CartFooter from "../cart-footer";
import CartFooterPay from "../cart-footer-pay";

const MainFooterPageContent : FC = memo(() => {
    return (
        <>
            <CartHeader/>
            <CartList/>
            <CartFooter/>

        </>
    );
});

export default MainFooterPageContent;