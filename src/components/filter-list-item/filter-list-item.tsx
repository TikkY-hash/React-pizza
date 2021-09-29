import React from 'react';
import {IFilterPropsType} from "../../types/filter-type";

const FilterListItem = ({title,className} : IFilterPropsType) => {
    return (
        <li
            className={className}
        >
            {title}
        </li>
    );
};

export default FilterListItem;