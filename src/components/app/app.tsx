import React from 'react';
import {Route} from "react-router-dom";
import {CartPage, HomePage} from "../pages";
import Header from "../header";

const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Route path='/' exact component={HomePage}/>
            <Route path='/cart' component={CartPage}/>
        </div>
    );
};

export default App;
