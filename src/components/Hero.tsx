"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-v1 {
            padding: 80px 0;
            background: var(--lm-bg);
            color: var(--lm-text);
          }
          
          .hero-v1__content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
            align-items: center;
          }
          
          .hero-v1__prebadge {
            display: inline-flex;
            align-items: center;
            gap: .5rem;
            margin-bottom: 1.25rem;
          }
          
          .hero-v1__title {
            font-family: "DM Serif Display", ui-serif, Georgia, serif;
            color: var(--lm-heading);
            letter-spacing: -0.01em;
            font-size: clamp(2rem, 2.5vw + 1rem, 3rem);
            line-height: 1.15;
            margin: 0 0 1.25rem;
          }
          
          .hero-v1__subtitle {
            font-family: "Source Sans 3", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
            font-size: 1.125rem;
            line-height: 1.6;
            margin: 0 0 2rem;
            color: var(--lm-text);
            max-width: 40rem;
          }
          
          .hero-v1__actions {
            display: flex;
            flex-wrap: wrap;
            gap: .75rem;
          }
          
          .hero-v1__chips {
            display: flex;
            flex-wrap: wrap;
            gap: .75rem;
            margin-top: 2rem;
            font-size: .875rem;
          }
          
          .hero-v1__media {
            position: relative;
            aspect-ratio: 4 / 3;
            border-radius: 16px;
            overflow: hidden;
            background: linear-gradient(180deg, var(--lm-card-from), var(--lm-card-to));
            border: 1px dashed var(--lm-deco-border);
            min-height: 260px;
          }
          
          @media (max-width: 960px) {
            .hero-v1 {
              grid-template-columns: 1fr;
              gap: 2rem;
              padding: 56px 12px;
            }
            
            .hero-v1__media {
              order: -1;
            }
          }
          
          @media (max-width: 768px) {
            .hero-v1 {
              padding: 56px 8px;
            }
          }
          
          @media (max-width: 480px) {
            .hero-v1__title {
              font-size: clamp(1.875rem, 5vw + 1rem, 2.375rem);
            }
            
            .hero-v1__subtitle {
              font-size: 1rem;
            }
          }
        `
      }} />
      <section className="hero-v1">
        <div className="layout-container">
          <div className="hero-v1__content">
            <div className="hero-v1__left">
            <div className="hero-v1__prebadge">
              <span className="badge-dot"></span>
              <span>Современные и классические кухни</span>
            </div>
            <h1 className="hero-v1__title">
              Кухни на заказ в Ростове-на-Дону от производителя
            </h1>
            <p className="hero-v1__subtitle">
              Создаём корпусную мебель и кухни по индивидуальным размерам уже 26 лет. Любые нестандартные решения для вашего уюта.
            </p>
            <div className="hero-v1__actions">
              <a href="#" className="btn-primary">
                Рассчитать стоимость кухни
              </a>
              <a href="#" className="btn-secondary">
                Вызвать замерщика
              </a>
            </div>
            <div className="hero-v1__chips">
              <div className="chip">26 лет на рынке</div>
              <div className="chip">Любые нестандарты</div>
              <div className="chip">Широкий выбор</div>
            </div>
        </div>
        <div className="hero-v1__media card">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Современная кухня на заказ"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;