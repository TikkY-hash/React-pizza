import React, {useState} from 'react';
import './_pizza-block.scss'
import classNames from "classnames";
import {IPizzaListItemProps} from "../../types/pizza-list-item-type";
import {ICartItemListType} from "../../types/cart-item-list-type";

interface PointTypes {
    id : number,
    sizePoint ?: number,
    tittle? :  string
}
const sizeList : PointTypes[] = [
    {sizePoint : 26,id : 1},
    {sizePoint : 30,id : 2},
    {sizePoint : 40,id : 3}
]

const typePizzaList : PointTypes[] = [
    {tittle : 'тонкое',id : 0},
    {tittle : 'традиционное',id : 1},
]

const PizzaListItem = ({imageUrl,name,price,sizes,types,onAddCart,countOfThisItem = 0,id} : IPizzaListItemProps) => {
    const [active,onUpdateActive] = useState({ activeSize : sizes[0],activeType : types[0] })

    const cartObj : ICartItemListType = {
        imageUrl,
        name,
        price,
        size : active.activeSize,
        type : typePizzaList.filter(value => value.id === active.activeType)[0].tittle,
        id
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {
                        typePizzaList.map(({id,tittle}) => {
                            return (
                                <li
                                    className={classNames({
                                        active: id === active.activeType,
                                        disabled: !types.includes(id!)
                                    })}
                                    key={id}
                                    onClick={() => onUpdateActive({...active, activeType: id})}
                                >
                                    {tittle}
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        sizeList.map(({id,sizePoint}) => {
                            return (
                                <li
                                    className={classNames({
                                        active : sizePoint === active.activeSize,
                                        disabled : !sizes.includes(sizePoint!)
                                    })}
                                    key = {id}
                                    onClick={() => onUpdateActive({...active,activeSize: sizePoint!})}
                                >
                                    {sizePoint} см.
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div
                    className="button button--outline button--add"
                    onClick={() =>onAddCart(cartObj)}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>{countOfThisItem}</i>
                </div>
            </div>
        </div>
    );
};

export default PizzaListItem;