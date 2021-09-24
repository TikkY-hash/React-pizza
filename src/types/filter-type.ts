export interface IFilterType {
    title : string,
    id : number
}

export interface IFilterSortType extends IFilterType{
    label : string
}

type onUpdateActive = (id : number) => void

export interface IFilterPropsType extends IFilterType {
    onUpdateActive : onUpdateActive,
    className : string
}

export interface IFilterMainComponentPropsType{
    filterSortList? : IFilterSortType[],
    filterButtonsList? :  IFilterType[],
    currentFilterElement : number | string,
    onUpdateActive : onUpdateActive
}