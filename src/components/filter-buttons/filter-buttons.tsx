import React, {useCallback} from 'react';
import './filter-buttons.scss'
import FilterListItem from "../filter-list-item";
import classNames from "classnames";
import {shallowEqual} from "react-redux";
import { IFilterType} from "../../types/filter-type";
import {useTypedSelector} from "../hooks/hook-types-selector";
import useAction from "../hooks/hook-bind";


const filterButtonsArray : IFilterType[] = [
    {id : -1,title : 'Все'},
    {id : 0,title : 'Мясные'},
    {id : 1,title : 'Вегетарианская'},
    {id : 2,title : 'Гриль'},
    {id : 3,title : 'Острые'},
    {id : 4,title : 'Закрытые'}
]

const FilterButtons = () => {
    const {filterButtonsId} = useTypedSelector(({filterReducerSlice}) => ({
        filterButtonsId : filterReducerSlice.filterButtonsId
    }), shallowEqual)

    const {onUpdateFilter} = useAction()

    const onUpdateActive = useCallback((id : number) => {
        onUpdateFilter(id)
    },[onUpdateFilter])

    return (
        <>
            <div className="filter-buttons">
                <ul>
                    { filterButtonsArray!.map(props => {
                        const {id} = props

                        return (
                            <FilterListItem
                                {...props}
                                className={classNames({
                                    active : filterButtonsId === id
                                })}
                                onUpdateActive={onUpdateActive}
                                key = {id}
                            />
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default FilterButtons;