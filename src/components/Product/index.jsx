import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem, minusItem, selectCartItemById} from "../../redux/slices/cartSlice";

import styles from "./Product.module.scss"

function Product({id, name, description, price, img, weight}) {
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemById(id));

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            name,
            price,
            img,
            weight
        };
        dispatch(addItem(item));
    }

    const onClickMinus = () => {
        dispatch(minusItem(id));
    }

    return (
        <div className={styles.productCard} key={id}>
            <div className={styles.productTop}>
                <div className={styles.productImg}>
                    <img src="http://31.129.111.249/api/image/restaurant/Lopsha.png" alt="img"/>
                </div>
                <h4>{name}</h4>
                <div className={styles.productDescr}>{description}</div>
            </div>
            <div className={styles.productBottom}>
                <div className={styles.productTake}>
                    <div className={styles.addProduct}>
                        <div className={styles.minus}>–</div>
                        <div className={styles.addProductCount}>{addedCount > 0 && {addedCount}}</div>
                        <div className={styles.plus} onClick={onClickAdd}>+</div>
                    </div>

                    <div className={styles.productPrice}>
                        <div className={styles.productWeight}>{weight} <span>г</span></div>
                        <div className={styles.productCost}>{price} <span>₽</span>
                        </div>
                    </div>
                </div>
                <div className={styles.productBtn}>в корзину</div>
            </div>
        </div>
    )
}

export default Product;