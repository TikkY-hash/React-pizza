import React, {FC} from 'react';
import HeaderTrash from "../header-trash";
import HeaderLogo from "../header-logo/";
import './header-style.scss'

const Header : FC = () => {
    return (
        <div className="header">
            <div className="container__logo">
                <HeaderLogo/>
                <HeaderTrash/>
            </div>
        </div>
    );
};

export default Header;