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
                                <li><a href="/partners">Ресторанам</a></li>
                                <li><a href="/courier">Курьерам</a></li>
                            </ul>
                        </div>
                        <div className="footerAbout">
                            <h6>О компании</h6>
                            <ul>
                                <li><a href="/contacts">Контакты</a></li>
                                <li><a href="/terms-promotions">Условия акций</a></li>
                                <li><a href="mailto:info@firepanda-delivery.ru">Обратная связь</a></li>
                                <li><a href="/user-agreement">Пользовательское соглашение</a></li>
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