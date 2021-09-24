import React, {useCallback, useState} from 'react';
import './filter-buttons.scss'
import FilterListItem from "../filter-list-item";
import classNames from "classnames";
import {shallowEqual} from "react-redux";
import { IFilterType} from "../../types/filter-type";
import {useTypedSelector} from "../hooks/hook-types-selector";
import useAction from "../hooks/hook-bind";
import Menu from "../menu";


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
    const [activeMenu,onUpdateActiveMenu] = useState(false)

    const {onUpdateFilter} = useAction()

    const onUpdateActive = useCallback((id : number) => {
        onUpdateFilter(id)
    },[onUpdateFilter])

    return (
        <>
            <div className="filter-buttons">
                <ul className={classNames({
                    active__burger_list : activeMenu
                })}>
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
                <div className={classNames( {
                    burger__wrapper : true,
                    active : activeMenu
                })} onClick={() => onUpdateActiveMenu(!activeMenu)}>
                    <div className="burger">
                        <span/>
                    </div>
                    <div className="filter__label">
                        <span/>
                        <h4>фильтры</h4>
                    </div>
                </div>
            </div>
            <Menu
                filterButtonsArray={filterButtonsArray}
                active={activeMenu}
            />
        </>
    );
};

export default FilterButtons;