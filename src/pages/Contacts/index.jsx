import React from "react";

import styles from './Contacts.module.scss'
import {Link} from "react-router-dom";

const Contacts = () => {
    return (
        <>
            <section className={styles.contacts}>
                <div className="container">
                    <div className={styles.contactsBlock}>
                        <h2>КОНТАКТЫ</h2>
                        <div className={styles.contactsBlockInformation}>
                            <div className={styles.supportService}>
                                <div className={styles.contactsTitle}>Служба поддержки</div>
                                Если у вас есть вопрос по вашему заказу, напишите нам в Телеграм или Вконтакте.<br/>
                                Также нам можно написать на <span>firepanda@delivery.ru</span> или позвонить по телефону
                                8 (999) 888-77-66
                            </div>
                            <div className={styles.forRestaurants}>
                                <div className={styles.contactsTitle}>Для ресторанов</div>
                                Если вы желаете с нами сотрудничать, мы будем рады с вами обсудить все условия
                                сотрудничества.<br/>
                                <span>Заполните форму</span> и в скором времени мы свяжемся с вами.<br/>
                                Для текущих вопросов по сотрудничеству звоните нам по номеру 8 (999) 888-77-66
                            </div>
                            <div className={styles.forCouriers}>
                                <div className={styles.contactsTitle}>Для курьеров</div>
                                Если вы хотите работать курьером по доставке еды, <span>
                                 <Link to="http://firepanda/Site/courier">заполните форму</Link>
                                </span>.
                                <br/>
                                Или звоните по будням с 10:00 до 19:00 по московскому времени по телефону 8 (999)
                                888-77-66
                            </div>
                        </div>
                        <div>
                            <iframe src="https://yandex.ru/map-widget/v1/-/CCUUB0eC2C"
                                    width="100%"
                                    height="400"
                                    // frameBorder="1"
                                    allowFullScreen="true"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contacts;