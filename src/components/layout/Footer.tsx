import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-std">
            <div className="container">
                <div className="footer-std__grid">
                    {/* Колонка 1: Бренд */}
                    <div className="footer-std__brand">
                        <div className="footer-std__logo">
                            <span className="footer-std__dot" aria-hidden="true"></span>
                            <div className="footer-std__brand-text">
                                <div className="footer-std__brand-name">Ле-манш</div>
                                <div className="footer-std__brand-sub">Кухни на заказ · Производство</div>
                            </div>
                        </div>
                        <p className="footer-std__desc">
                            Кухни на заказ в Ростове-на-Дону. Производство, дизайн, монтаж.
                        </p>
                    </div>

                    {/* Колонка 2: Навигация */}
                    <nav className="footer-std__nav" aria-label="Footer">
                        <h4 className="footer-std__title">Навигация</h4>
                        <ul className="footer-std__list">
                            <li><Link href="/catalog">Каталог</Link></li>
                            <li><Link href="/portfolio">Наши работы</Link></li>
                            <li><Link href="/reviews">Отзывы</Link></li>
                            <li><Link href="/contacts">Контакты</Link></li>
                        </ul>
                    </nav>

                    {/* Колонка 3: Контакты */}
                    <div className="footer-std__contacts">
                        <h4 className="footer-std__title">Контакты</h4>
                        <ul className="footer-std__list">
                            <li>Телефон: <a href="tel:+7XXXXXXXXXX">+7 (XXX) XXX-XX-XX</a></li>
                            <li>Email: <a href="mailto:email@example.com">email@example.com</a></li>
                            <li>Адрес: Ростов-на-Дону, [улица, дом]</li>
                        </ul>
                    </div>
                </div>

                {/* Нижняя полоса (legal) */}
                <div className="footer-std__legal">
                    <span>© 1999—2025 «Ле-манш»</span>
                    <div className="footer-std__legal-links">
                        <Link href="#">Политика конфиденциальности</Link>
                        <Link href="#">Пользовательское соглашение</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;