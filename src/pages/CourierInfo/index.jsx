import React from "react";
import styles from './CourierInfo.module.scss'
import AccordionBlock from '../../components/AccordionBlock';
import questions from "../../assets/accordionCourier.json";

const CourierInfo = () => {
    return (
        <>
            <section className={styles.courier}>
                <div className="container">
                    <div className={styles.courierBlock}>
                        <h2>СТАНЬ КУРЬЕРОМ<br/>
                            ПО ДОСТАВКЕ ЕДЫ</h2>
                        <a href="#" className={`${styles.btnLogin} ${styles.btnCourier}`}>Стать курьером</a>
                    </div>
                </div>
            </section>
            <section className={styles.courierAdvantages} id="преимущества">
                <div className="container">
                    <div className={styles.courierAdvantagesBlock}>
                        <h2>ПРЕИМУЩЕСТВА</h2>
                        <div className={styles.courierAdvantagesItems}>
                            <div className={styles.courierAdvantagesItem}>
                                <i className="fas fa-percent fa-3x"></i>
                                <div>Получайте бонусы</div>
                            </div>
                            <div className={styles.courierAdvantagesItem}>
                                <i className="fas fa-bicycle fa-3x"></i>
                                <div>Доставляйте на любом транспорте</div>
                            </div>
                            <div className={styles.courierAdvantagesItem}>
                                <i className="fas fa-pizza-slice fa-3x"></i>
                                <div>Скидки на еду
                                </div>
                            </div>
                            <div className={styles.courierAdvantagesItem}>
                                <i className="far fa-calendar-alt fa-3x"></i>
                                <div>Выбирайте время</div>
                            </div>
                            <div className={styles.courierAdvantagesItem}>
                                <i className="far fa-money-bill-alt fa-3x"></i>
                                <div>Ежедневный доход</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.courierBecome} id="стать">
                <div className="container">
                    <div className={styles.courierBecomeBlock}>
                        <h2>КАК СТАТЬ КУРЬЕРОМ</h2>
                        <div className={styles.courierBecomeItems}>
                            <div className={styles.courierBecomeItem}>
                                <div className={styles.courierNumber}>1</div>
                                <div>Заполнить форму и отправить</div>
                            </div>
                            <div className={styles.courierBecomeItem}>
                                <div className={styles.courierNumber}>2</div>
                                <div>Заполнить форму и отправить</div>
                            </div>
                            <div className={styles.courierBecomeItem}>
                                <div className={styles.courierNumber}>3</div>
                                <div>Заполнить форму и отправить</div>
                            </div>
                            <div className={styles.courierBecomeItem}>
                                <div className={styles.courierNumber}>4</div>
                                <div>Заполнить форму и отправить</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.courierForm}>
                <div className="container">
                    <div className={styles.courierBlockForm}>
                        <form id="contact" action="" method="post">
                            <h3>Заполните форму и с вами скоро свяжутся</h3>
                            <fieldset>
                                <input placeholder="Ваше имя" type="text" tabIndex="1" required autoFocus/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Ваш email" id="email" type="email" tabIndex="2" required/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Ваш номер телефона" type="tel" id="phone" tabIndex="3" required/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Ваш город" type="text" tabIndex="4" required/>
                            </fieldset>
                            <div className={styles.inputCheckbox}>
                                <input type="checkbox" name="policy" id="policy" className="policy"/>
                                <label htmlFor="policy" className="policyLabel">
                                    Я принимаю условия
                                    <a href="#" target="_blank">Пользовательского соглашения</a>
                                </label>
                            </div>
                            <fieldset>
                                <button name="submit" type="submit" id="contactSubmit">отправить</button>
                            </fieldset>
                        </form>

                    </div>
                </div>
            </section>
                <AccordionBlock questions={questions} />
        </>
    )
}
export default CourierInfo;