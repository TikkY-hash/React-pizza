import React, {FC} from 'react';
import HeaderTrash from "../header-trash";
import HeaderLogo from "../header-logo/";
import './header-style.scss'

const Header : FC = () => {
    return (
        <div className="header">
            <div className="container">
                <HeaderLogo/>
                <HeaderTrash/>
            </div>
        </div>
    );
};

export default Header;