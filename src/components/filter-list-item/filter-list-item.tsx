import React from 'react';
import {IFilterPropsType} from "../../types/filter-type";

const FilterListItem = ({title,onUpdateActive,className,id} : IFilterPropsType) => {
    return (
        <li
            className={className}
            onClick={() => onUpdateActive(id)}
        >
            {title}
        </li>
    );
};

export default FilterListItem;