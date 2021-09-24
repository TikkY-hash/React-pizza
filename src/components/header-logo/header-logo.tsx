import React from 'react';
import pizza from '../app/img/pizza-logo.svg'
import  './header-logo.scss'
import {Link} from "react-router-dom";

const HeaderLogo = () => {
    return (
        <Link to = "/">
            <div className="header__logo">
                <img width="38" src={pizza} alt="Pizza logo"/>
                <div>
                    <h1>React Pizza</h1>
                    <p>самая вкусная пицца во вселенной</p>
                </div>
            </div>
        </Link>
    );
};

export default HeaderLogo;