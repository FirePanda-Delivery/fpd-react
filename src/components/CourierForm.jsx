import {React, useId} from "react";
import "../scss/components/feedback-form.scss"
function CourierForm() {
    const contactCourier = useId();

    return (
        <form id={contactCourier}>
            <h3>Заполните форму и с вами скоро свяжутся</h3>
            <input placeholder="Название компании" type="text" required/>
            <input placeholder="Ваше имя, фамилия" type="text" required/>
            <input placeholder="Ваш email" type="email" required/>
            <input placeholder="Ваш номер телефона" type="tel" required/>
            <input placeholder="Ваш город" type="text" required/>
            <div className="inputCheckbox">
                <input type="checkbox" name="policy" className="policy"/>
                <label htmlFor="policy" className="policyLabel">
                    Я принимаю условия
                    <a href="#" target="_blank"> Пользовательского соглашения</a>
                </label>
            </div>
            <button name="submit" type="submit">отправить</button>
        </form>
    )
}

export default CourierForm;