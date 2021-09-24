import React from 'react';
import FilterPanel from "../filter-panel";
import FilterButtons from "../filter-buttons";

const Filter = () => {
    return (
        <div className="content__top">
            <FilterButtons/>
            <FilterPanel/>
        </div>
    );
};

export default Filter;