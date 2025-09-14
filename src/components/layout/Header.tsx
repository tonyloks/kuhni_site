"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerStyles = {
    background: 'rgba(255, 255, 255, .85)',
    backdropFilter: 'blur(6px)'
  };

  const rowStyles = {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid var(--lm-border)'
  };

  const brandStyles = {
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

  const navStyles = {
    display: 'flex',
    alignItems: 'stretch',
    gap: '4px'
  };

  const linkStyles = {
    position: 'relative' as const,
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    fontSize: '15px',
    color: 'var(--lm-text)',
    transition: 'background-color .2s ease, color .2s ease'
  };

  const ctaStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const phoneStyles = {
    color: 'var(--lm-heading)',
    fontWeight: '600',
    textDecoration: 'none'
  };

  const btnSecondaryStyles = {
    background: 'var(--lm-secondary-bg)',
    color: 'var(--lm-secondary-text)',
    border: '1px solid var(--lm-secondary-brd)',
    borderRadius: '12px',
    padding: '10px 16px',
    fontWeight: '600',
    transition: 'background-color .2s ease, transform .02s ease, box-shadow .2s ease'
  };

  const burgerStyles = {
    display: 'none',
    padding: '8px',
    border: '1px solid var(--lm-border)',
    borderRadius: '10px',
    background: '#fff'
  };

  const burgerLineStyles = {
    width: '20px',
    height: '2px',
    background: 'var(--lm-heading)',
    margin: '4px 0'
  };

  const mobileStyles = {
    display: isMobileMenuOpen ? 'block' : 'none',
    borderBottom: '1px solid var(--lm-border)',
    background: '#fff'
  };

  const mobileLinksStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    padding: '12px 16px'
  };

  const mobileLinkStyles = {
    padding: '10px 12px',
    borderRadius: '10px',
    textDecoration: 'none',
    color: 'var(--lm-text)'
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 960px) {
            .nav, .cta {
              display: none !important;
            }
            .burger {
              display: inline-flex !important;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          }
          .link:hover {
            background: var(--lm-hover-overlay);
            color: var(--lm-heading);
          }
          .btn-secondary:hover {
            background: var(--lm-hover-overlay);
          }
          .btn-secondary:active {
            transform: translateY(1px);
          }
          .btn-secondary:focus-visible {
            outline: none;
            box-shadow: 0 0 0 4px var(--lm-focus-ring);
          }
          .mobile-link:hover {
            background: var(--lm-hover-overlay);
            color: var(--lm-heading);
          }
        `
      }} />
      <header style={headerStyles}>
        <div className="container">
          <div style={rowStyles}>
            <Link href="/" style={brandStyles}>
              <span className="text-2xl font-bold">Ле-манш</span>
              <div style={dotStyles}></div>
            </Link>
            <nav className="nav" style={navStyles}>
              <Link href="/catalog" className="link" style={linkStyles}>Каталог</Link>
              <Link href="/portfolio" className="link" style={linkStyles}>Наши работы</Link>
              <Link href="/reviews" className="link" style={linkStyles}>Отзывы</Link>
              <Link href="/contacts" className="link" style={linkStyles}>Контакты</Link>
            </nav>
            <div className="cta" style={ctaStyles}>
              <a href="tel:+79999999999" style={phoneStyles}>+7 (XXX) XXX-XX-XX</a>
              <button className="btn-secondary" style={btnSecondaryStyles}>Заказать звонок</button>
            </div>
            <button className="burger" style={burgerStyles} onClick={toggleMobileMenu}>
              <div style={burgerLineStyles}></div>
              <div style={burgerLineStyles}></div>
              <div style={burgerLineStyles}></div>
            </button>
          </div>
        </div>
        <div style={mobileStyles}>
          <div className="container">
            <div style={mobileLinksStyles}>
              <Link href="/catalog" className="mobile-link" style={mobileLinkStyles}>Каталог</Link>
              <Link href="/portfolio" className="mobile-link" style={mobileLinkStyles}>Наши работы</Link>
              <Link href="/reviews" className="mobile-link" style={mobileLinkStyles}>Отзывы</Link>
              <Link href="/contacts" className="mobile-link" style={mobileLinkStyles}>Контакты</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;