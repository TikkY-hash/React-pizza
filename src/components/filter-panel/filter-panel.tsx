import React, {useCallback, useEffect, useRef, useState} from 'react';
import './filter-panel.scss'
import FilterListItem from "../filter-list-item";
import classNames from "classnames";
import { IFilterSortType} from "../../types/filter-type";
import useTypedSelector from "../hooks";
import useAction from "../hooks/hook-bind";
import {shallowEqual} from "react-redux";

const filterPanelList : IFilterSortType[] = [
    {id : 1,title : 'популярности',label : 'rating'},
    {id : 2,title : 'цене',label : 'price'},
    {id : 3,title : 'алфавиту',label : 'name'}
]

const FilterPanel = () => {
    const [visible,setVisible] = useState(false)
    const sortRef = useRef(null)

    const {filterSortLabel} = useTypedSelector(({filterReducerSlice : { filterSortLabel }}) => ({
        filterSortLabel
    }),shallowEqual)

    const {onUpdateSort} = useAction()

    useEffect(() => {
        document.body.addEventListener('click',(e: any ) => {
            if(!e.path.includes(sortRef.current)) {
                setVisible(false)
            }
        })
    },[])

    const onUpdateActions = useCallback((id : number) => {
        setVisible(!visible)

        const label = filterPanelList.filter(value => value.id === id)[0].label

        onUpdateSort(label)
    },[visible,onUpdateSort])



    return (
        <div className="filter-panel" ref={sortRef}>
            <div className="filter-panel__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={visible ?  'rotated' : ''}
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setVisible(!visible)}>
                    {
                        filterPanelList!.filter(value => value.label === filterSortLabel)[0].title
                    }
                </span>
            </div>
            {visible && <div className="filter-panel__popup" >
                <ul>
                    {
                        filterPanelList!.map(value => {
                            return (
                                <FilterListItem
                                    {...value}
                                    className = {classNames({
                                        active : value.label === filterSortLabel
                                    })}
                                    onUpdateActive={onUpdateActions}
                                    key = {value.id}
                                />
                            )
                        })
                    }
                </ul>
            </div>}
        </div>
    );
}

export default FilterPanel;