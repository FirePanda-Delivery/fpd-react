import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import styles from './FullRestaurant.module.scss'

import starImage from "../../assets/img/star.svg";
import CategoryProduct from "../../components/CategoryProduct";
import {HashLink} from "react-router-hash-link";

const FullRestaurant = () => {
    const [restaurant, setRestaurant] = useState();
    const [categories, setCategories] = useState();
    const [showInfo, setShowInfo] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchRestaurant() {
            try {
                const {data} = await axios.get('http://fpd.midavon.ru/api/restaurant/' + id)
                setRestaurant(data)
            } catch (error) {
                alert('Ошибка при получении ресторана')
                navigate('/')
            }

            try {
                const {data} = await axios.get(`http://fpd.midavon.ru/api/restaurant/${id}/categories`)
                setCategories(data)
            } catch (error) {
                alert('Ошибка при получении категорий ресторана')
                navigate('/')
            }
        }

        fetchRestaurant()

    }, []);

    if (!restaurant || !categories) {
        return 'загрузка...'
    }

    // const targetDiv = document.querySelector(".restaurantContent");
    // const btn = document.querySelector(".restaurantOfferAbout");
    // btn.addEventListener('click', ()=>{
    //     if (targetDiv.style.display !== "none") {
    //         targetDiv.style.display = "none";
    //     } else {
    //         targetDiv.style.display = "block";
    //     }
    // })


    function displayToggle(el, displayMod = 'block') {
        el.style.display = window.getComputedStyle(el).display === 'none' ? displayMod : 'none'
    }

    return (
        <>
            <section className={styles.restaurantOffer}>
                <div className="container">
                    <div className={styles.restaurantOfferBlock}>
                        <div className={styles.restaurantOfferMain} id="restaurantImage">
                            <div className={styles.restaurantOfferMainOverlay}>

                                <div className={styles.restaurantOfferInformation}>
                                    <div className={styles.restaurantOfferTitle} id="title">{restaurant.title}</div>
                                    <div className={styles.restaurantOfferDescr}>
                                        <div className={styles.restaurantOfferRating}>
                                            <div className={styles.restaurantHeaderTitleItem}>Рейтинг</div>
                                            <div className={styles.restaurantOfferRatingItems}>
                                                <img src={starImage} alt="star"/>
                                                <div className={styles.restaurantOfferNumber} id="rating">4.5</div>
                                            </div>
                                        </div>
                                        <div className={styles.restaurantOfferOrderFrom}>
                                            <div className={styles.restaurantHeaderTitleItem}>Доставка от</div>
                                            <div>
                                                <span id="minPrice">{restaurant.minPrice}</span>
                                                руб
                                            </div>
                                        </div>
                                        <div className={styles.restaurantOfferTimeWrap}>
                                            <div className={styles.restaurantHeaderTitleItem}>Время работы</div>
                                            <div className={styles.restaurantOfferTime} id="time">
                                                {restaurant.workingHoursStart} - {restaurant.workingHoursEnd}
                                            </div>
                                        </div>

                                        <div className={styles.restaurantOfferAbout}
                                             onClick={() => setShowInfo(!showInfo)}>
                                            <div>Информация</div>
                                            <div className={styles.content_toggle}>
                                                <i className="fas fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.restaurantContent} style={{display: showInfo ? "block" : "none"}}>
                        <p> {restaurant.description}</p>
                    </div>
                </div>
            </section>
            <section className={styles.restaurantFood}>
                <div className="container">
                    <div className={styles.categories}>
                        {categories.map(category =>
                            <HashLink smooth to={`#${category.id}`} key={'link_' + category.id}>
                                {category.name}
                            </HashLink>
                        )}
                    </div>
                </div>
            </section>
            <section className={styles.restaurantProductCardsSection}>
                <div className="container" id="productCards">
                    {categories.map(category => <CategoryProduct key={category.id} {...category} />)}
                </div>
            </section>
        </>
    )
}

export default FullRestaurant;