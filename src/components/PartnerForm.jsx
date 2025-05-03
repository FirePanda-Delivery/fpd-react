import {React, useId} from "react";
import "../scss/components/feedback-form.scss"
function PartnerForm() {
    const contactPartner = useId();

    return (
        <form id={contactPartner}>
            <h3>Заполните форму и с вами скоро свяжутся</h3>
            <input placeholder="Название компании" type="text" required/>
            <input placeholder="Ваше имя, фамилия" type="text" required/>
            <input placeholder="Ваш email" type="email" required/>
            <input placeholder="Ваш номер телефона" type="tel" required/>
            <input placeholder="Ваш город" type="text" required/>
            <div className="inputCheckbox">
                <input type="checkbox" name="policy" className="policy"/>
                <label htmlFor="policy" className="policyLabel">
                    Я даю ООО «Фаер Панда Деливери» свое согласие на обработку моих персональных данных
                    в
                    соответствии с Федеральным Законом от 27.07.2006 года № 152-ФЗ «О персональных
                    данных» на
                    условиях и для целей, определенных в этой заявке и в Политике конфиденциальности,
                    ознакомление с текстом которой я подтверждаю, в течение срока, необходимого для
                    достижения
                    указанных целей и 5 лет после их достижения.
                </label>
            </div>
            <button name="submit" type="submit">отправить</button>
        </form>
    )
}

export default PartnerForm;