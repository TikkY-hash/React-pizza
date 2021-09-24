import React,{FC} from 'react';
import {IFilterType} from "../../types/filter-type";
import './menu.scss'
import classNames from "classnames";

const Menu : FC<{filterButtonsArray : IFilterType[],active : boolean}> = ({filterButtonsArray,active}) => {
    return (
        <div className={classNames({
            menu : true,
            active__menu : active
        })}>
            
        </div>
    );
};

export default Menu;