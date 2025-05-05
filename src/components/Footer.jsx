import {Link} from "react-router-dom";
import logoSvg from '../assets/img/logo.svg';

function Footer() {
    return (
        <footer>
            <div className="footerTop">
                <div className="container">
                    <div className="footerTopBlock">
                        <div className="logo">
                            <img width="130" src={logoSvg} alt="logo"/>
                        </div>
                        <div className="footerInformation">
                            <h6>Информация</h6>
                            <ul>
                                <li><Link to="/partners">Ресторанам</Link></li>
                                <li><Link to="/courier">Курьерам</Link></li>
                            </ul>
                        </div>
                        <div className="footerAbout">
                            <h6>О компании</h6>
                            <ul>
                                <li><Link to="/contacts">Контакты</Link></li>
                                <li><Link to="/terms-promotions">Условия акций</Link></li>
                                <li><Link to="mailto:info@firepanda-delivery.ru"></Link>Обратная связь</li>
                                <li><Link to="/user-agreement"></Link>Пользовательское соглашение</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="container">
                    <div className="footerBottomBlock">
                        <div className="copyright">© 2021 ООО «Фаерпанда Деливери»
                        </div>
                        <div className="socialLinks">
                            <i className="fab fa-vk"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;