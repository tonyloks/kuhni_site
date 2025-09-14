import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-bar">
            <div className="container">
                <div className="footer-bar__row">
                    <Link href="/" className="footer-bar__brand">
                        <span>Ле-манш</span>
                        <div className="footer-bar__dot"></div>
                    </Link>
                    <nav className="footer-bar__nav">
                        <Link href="/catalog" className="footer-bar__link">Каталог</Link>
                        <Link href="/portfolio" className="footer-bar__link">Наши работы</Link>
                        <Link href="/reviews" className="footer-bar__link">Отзывы</Link>
                        <Link href="/contacts" className="footer-bar__link">Контакты</Link>
                    </nav>
                    <a href="tel:+79999999999" className="footer-bar__phone">+7 (XXX) XXX-XX-XX</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;