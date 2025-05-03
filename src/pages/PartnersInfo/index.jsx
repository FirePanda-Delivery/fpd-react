import React from "react";
import styles from './PartnersInfo.module.scss'
import AccordionBlock from '../../components/AccordionBlock';
import questions from "../../assets/accordionPartner.json"

import restaurantWork from "../../assets/img/restaurant-work.svg";
import PartnerForm from "../../components/PartnerForm.jsx";


const PartnersInfo = () => {
    return (
        <>
            <section className={styles.restaurant}>
                <div className="container">
                    <div className={styles.restaurantBlock}>
                        <h2>Станьте партнёром <br/>сервиса FirePanda Delivery</h2>
                        <a href="#кнопка" className={`${styles.btnLogin} ${styles.btnCourier}`}>Подключиться</a>
                    </div>
                </div>
            </section>
            <section className={styles.restaurantPlug}>
                <div className="container">
                    <div className={styles.restaurantPlugBlock}>
                        <h2>Как подключить ресторан</h2>
                        <div className={styles.restaurantPlugCards}>
                            <div className={styles.restaurantPlugCard} id="подключить">
                                <div className={styles.restaurantPlugNumber}>1.</div>
                                <div className={styles.restaurantDescr}>
                                    <div className={styles.restaurantDescrTitle}>Заполните форму</div>
                                    <div className={styles.restaurantDescrText}>Мы отправим вам на почту счет для
                                        акцепта оферты.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.restaurantPlugCard}>
                                <div className={styles.restaurantPlugNumber}>2.</div>
                                <div className={styles.restaurantDescr}>
                                    <div className={styles.restaurantDescrTitle}>Оплатите оферту</div>
                                    <div className={styles.restaurantDescrText}>В письме будет инструкция по оплате 100р
                                        с р/с организации, которую вы указали при заполнении формы.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.restaurantPlugCard}>
                                <div className={styles.restaurantPlugNumber}>3.</div>
                                <div className={styles.restaurantDescr}>
                                    <div className={styles.restaurantDescrTitle}>Зайдите в личный кабинет</div>
                                    <div className={styles.restaurantDescrText}>Мы отправим вам на почту логин и пароль
                                        для входа в личный кабинет.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.restaurantPlugCard}>
                                <div className={styles.restaurantPlugNumber}>4.</div>
                                <div className={styles.restaurantDescr}>
                                    <div className={styles.restaurantDescrTitle}>Зайдите в личный кабинет</div>
                                    <div className={styles.restaurantDescrText}>Мы отправим вам на почту логин и пароль
                                        для входа в личный кабинет.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.restaurantPlugCard}>
                                <div className={styles.restaurantPlugNumber}>5.</div>
                                <div className={styles.restaurantDescr}>
                                    <div className={styles.restaurantDescrTitle}>Запускайтесь в сервисе</div>
                                    <div className={styles.restaurantDescrText}>После заполнения всех данных о
                                        ресторане, вы
                                        сможете самостоятельно активировать ресторан, нажав на кнопку в левом верхнем
                                        углу личного кабинета.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.restaurantPlugCard}>
                                <div className={styles.restaurantPlugNumber}>6.</div>
                                <div className={styles.restaurantDescr}>
                                    <div className={styles.restaurantDescrTitle}>Запускайтесь в сервисе</div>
                                    <div className="restaurant-descr-text">После заполнения всех данных о ресторане, вы
                                        сможете самостоятельно активировать ресторан, нажав на кнопку в левом верхнем
                                        углу личного кабинета.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.restaurantAdvantages}>
                <div className="container">
                    <div className={styles.restaurantAdvantagesBlock}>
                        <h2>Наши основные преимущества</h2>
                        <div className={styles.restaurantAdvantagesItems}>
                            <div className={styles.restaurantAdvantagesDescr} id="преимущества">
                                <div>
                                    <i className="fas fa-shopping-cart fa-2x"></i>
                                    <div><span>Готовый канал продаж</span><br/> Размещаем ваше
                                        меню на своем сайте, а вы
                                        платите только за полученные заказы
                                    </div>
                                </div>
                                <div>
                                    <i className="far fa-clock fa-2x"></i>
                                    <div><span>Доставим клиенту заказ вовремя</span> <br/>С
                                        помощью
                                        нашей курьерской службы
                                        FirePandaDelivery
                                    </div>
                                </div>
                                <div>
                                    <i className="fas fa-chart-line fa-2x"></i>
                                    <div><span>Продвижение ресторана</span> <br/>Продвигаем
                                        ваш
                                        ресторан на нашем сайте и
                                        мобильных приложениях с аудиторией более 4 млн человек
                                    </div>
                                </div>

                            </div>
                            <div className={styles.restaurantAdvantagesDescr}>
                                <div>
                                    <i className="fas fa-percent fa-2x"></i>
                                    <div>
                                        <span>Рост продаж</span> <br/>Средний прирост заказов у партнеров
                                        FirePandaDelivery +20%
                                        за первый месяц сотрудничества
                                    </div>
                                </div>
                                <div>
                                    <i className="far fa-plus-square fa-2x"></i>
                                    <div>
                                        <span>Простой процесс интеграции</span>
                                        <br/>Для
                                        работы
                                        с заказами вы можете
                                        использовать наше удобное приложение
                                    </div>
                                </div>
                                <div>
                                    <i className="fas fa-user-clock fa-2x"></i>
                                    <div>
                                        <span>Поддержка 24/7</span> <br/>Наш
                                        колл-центр
                                        сможет
                                        помочь голодному клиенту с
                                        заказом в любое время круглый год
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className={styles.restaurantWork}>
                <div className="container">
                    <div className={styles.restaurantWorkBlock}>
                        <h2>Как работает FPD</h2>
                        <img width="auto" src={restaurantWork} className={styles.restaurantWorkImg} alt="logo"/>
                    </div>
                </div>
            </section>
            <section className={styles.partnerForm}>
                <div className="container">
                    <div className={styles.partnerBlockForm}>
                        <PartnerForm/>
                    </div>
                </div>
            </section>
            <AccordionBlock questions={questions}/>
        </>
    )
}
export default PartnersInfo;