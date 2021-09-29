import React from 'react';
import './main-content-block.scss'
import Filter from "../filter";
import PizzaList from "../pizza-list";

const MainContentBlock = () => {
    return (
        <div className="content">
            <div className="container">
                <Filter/>
                <h2 className="content__title">Все пиццы</h2>
                <PizzaList/>
            </div>
        </div>
    );
};

export default MainContentBlock;