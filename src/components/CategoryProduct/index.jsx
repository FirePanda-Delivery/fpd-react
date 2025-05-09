import React from "react";
import styles from "./CategoryProduct.module.scss";
import Product from "../Product";

function CategoryProduct({id, name, products}) {
    return (
        <div className={styles.productCardsBlock} id={id}>
            <h2>{name}</h2>
            <div className={styles.productCards}>
                { products.map(product => <Product key={product.id} {...product} />)}
            </div>
        </div>
    )
}

export default CategoryProduct;