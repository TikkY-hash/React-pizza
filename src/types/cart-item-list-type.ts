export interface ICartItemListType {
    name : string
    size : number,
    type : string | undefined,
    count? : number,
    price ?: number
    imageUrl : string,
    id : number
}

type onAddAction = (id : number) => void

export interface ICartListItemProps extends ICartItemListType {
    onIncreaseCart: onAddAction
    onDecreaseCart : onAddAction,
    onDeleteCart : onAddAction
}