import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addItem, selectCartItemById} from "../../redux/slices/cartSlice";


function RestaurantBlock({id, name, minPrice, rating, img}) {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));
    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            name,
            minPrice,
            rating,
            img
        };
        dispatch(addItem(item));
    }

    return (
        <div className="restaurant-block">
            <img className="restaurant-block__image" src={`http://fpd.midavon.ru/api` + img} alt="restaurant"/>
            <div className="restaurant-block__descr">
                <h4 className="restaurant-block__title">{name}</h4>
                <div className="restaurant-block__selector">
                    <ul>
                        <li>
                            <svg width="22" height="20" viewBox="0 0 22 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
                                    fill="#D70000"/>
                            </svg>
                            {rating}</li>
                        <li>{minPrice} ₽</li>
                        <li>50-60 мин</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RestaurantBlock