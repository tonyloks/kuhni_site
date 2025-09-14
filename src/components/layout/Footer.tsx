'use client';

import Link from "next/link";

const Footer = () => {
    const footerStyles = {
        background: 'rgba(255, 255, 255, .70)',
        backdropFilter: 'blur(6px)',
        borderTop: '1px solid var(--lm-border)',
        color: 'var(--lm-text)'
    };

    const gridStyles = {
         display: 'grid',
         gridTemplateColumns: '1fr 1fr 1fr',
         gap: '32px',
         padding: '40px 0',
     };

    const logoStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--lm-heading)'
    };

    const dotStyles = {
        width: '10px',
        height: '10px',
        borderRadius: '999px',
        background: 'var(--lm-accent-dot)'
    };

    const brandNameStyles = {
        fontFamily: '"DM Serif Display", ui-serif, Georgia, serif',
        color: 'var(--lm-heading)',
        fontSize: '20px',
        lineHeight: '1.1'
    };

    const brandSubStyles = {
        marginTop: '2px',
        fontSize: '11px',
        letterSpacing: '.06em',
        textTransform: 'uppercase' as const,
        color: 'color-mix(in srgb, var(--lm-text) 80%, transparent)'
    };

    const descStyles = {
        marginTop: '12px',
        fontSize: '14px',
        color: 'color-mix(in srgb, var(--lm-text) 90%, transparent)'
    };

    const titleStyles = {
        margin: '0 0 12px 0',
        fontWeight: '600',
        color: 'var(--lm-heading)',
        fontSize: '16px',
        fontFamily: 'var(--font-source-sans-3), sans-serif'
    };

    const listStyles = {
        listStyle: 'none',
        margin: '0',
        padding: '0'
    };

    const listItemStyles = {
        margin: '8px 0'
    };

    const linkStyles = {
        color: 'var(--lm-text)',
        textDecoration: 'none',
        transition: 'color .2s ease, background-color .2s ease'
    };

    const legalStyles = {
         borderTop: '1px solid var(--lm-border)',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
         gap: '16px',
         padding: '20px 0',
         fontSize: '14px',
         color: 'color-mix(in srgb, var(--lm-text) 85%, transparent)',
     };

    const legalLinksStyles = {
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap' as const
    };

    const legalLinkStyles = {
        color: 'var(--lm-text)',
        textDecoration: 'underline',
        textUnderlineOffset: '2px'
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @media (max-width: 960px) {
                        .grid {
                            grid-template-columns: 1fr 1fr !important;
                        }
                    }
                    @media (max-width: 640px) {
                        .grid {
                            grid-template-columns: 1fr !important;
                            gap: 20px !important;
                            padding: 28px 0 !important;
                        }
                        .legal {
                            flex-direction: column !important;
                            align-items: flex-start !important;
                        }
                    }
                    .link:hover {
                        color: var(--lm-heading);
                        text-decoration: underline;
                        text-underline-offset: 2px;
                    }
                    .legal-link:hover {
                        color: var(--lm-heading);
                    }
                `
            }} />
            <footer style={footerStyles}>
                <div className="layout-container">
                    <div className="grid" style={gridStyles}>
                        {/* Колонка 1: Бренд */}
                        <div>
                            <div style={logoStyles}>
                                <span style={dotStyles} aria-hidden="true"></span>
                                <div>
                                    <div style={brandNameStyles}>Ле-манш</div>
                                    <div style={brandSubStyles}>Кухни на заказ · Производство</div>
                                </div>
                            </div>
                            <p style={descStyles}>
                                Кухни на заказ в Ростове-на-Дону. Производство, дизайн, монтаж.
                            </p>
                        </div>

                        {/* Колонка 2: Навигация */}
                        <nav aria-label="Footer">
                            <h4 style={titleStyles}>Навигация</h4>
                            <ul style={listStyles}>
                                <li style={listItemStyles}><Link href="/catalog" className="link" style={linkStyles}>Каталог</Link></li>
                                <li style={listItemStyles}><Link href="/portfolio" className="link" style={linkStyles}>Наши работы</Link></li>
                                <li style={listItemStyles}><Link href="/reviews" className="link" style={linkStyles}>Отзывы</Link></li>
                                <li style={listItemStyles}><Link href="/contacts" className="link" style={linkStyles}>Контакты</Link></li>
                            </ul>
                        </nav>

                        {/* Колонка 3: Контакты */}
                        <div>
                            <h4 style={titleStyles}>Контакты</h4>
                            <ul style={listStyles}>
                                <li style={listItemStyles}>Телефон: <a href="tel:+7XXXXXXXXXX" className="link" style={linkStyles}>+7 (XXX) XXX-XX-XX</a></li>
                                <li style={listItemStyles}>Email: <a href="mailto:email@example.com" className="link" style={linkStyles}>email@example.com</a></li>
                                <li style={listItemStyles}>Адрес: г. Ростов-на-Дону, [улица, номер дома]</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Нижняя полоса (legal) */}
                <div className="layout-container">
                    <div className="legal" style={legalStyles}>
                    <span>© 1999—2025 «Ле-манш»</span>
                    <div style={legalLinksStyles}>
                        <Link href="#" className="legal-link" style={legalLinkStyles}>Политика конфиденциальности</Link>
                        <Link href="#" className="legal-link" style={legalLinkStyles}>Пользовательское соглашение</Link>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;