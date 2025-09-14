"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-underline">
      <div className="container">
        <div className="header-underline__row">
          <Link href="/" className="header-underline__brand">
            <span className="text-2xl font-bold">Ле-манш</span>
            <div className="header-underline__dot"></div>
          </Link>
          <nav className="header-underline__nav">
            <Link href="/catalog" className="header-underline__link">Каталог</Link>
            <Link href="/portfolio" className="header-underline__link">Наши работы</Link>
            <Link href="/reviews" className="header-underline__link">Отзывы</Link>
            <Link href="/contacts" className="header-underline__link">Контакты</Link>
          </nav>
          <div className="header-underline__cta">
            <a href="tel:+79999999999" className="header-underline__phone">+7 (XXX) XXX-XX-XX</a>
            <button className="header-underline__btn-secondary">Заказать звонок</button>
          </div>
          <button className="header-underline__burger" onClick={toggleMobileMenu}>
            <div className="header-underline__burger-line"></div>
            <div className="header-underline__burger-line"></div>
            <div className="header-underline__burger-line"></div>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="header-underline__mobile">
          <div className="container">
            <div className="header-underline__mobile-links">
              <Link href="/catalog" className="header-underline__mobile-link">Каталог</Link>
              <Link href="/portfolio" className="header-underline__mobile-link">Наши работы</Link>
              <Link href="/reviews" className="header-underline__mobile-link">Отзывы</Link>
              <Link href="/contacts" className="header-underline__mobile-link">Контакты</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;