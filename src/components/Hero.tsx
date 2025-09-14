"use client";

import React from 'react';

const Hero = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .hero-v1 {
            max-width: 1280px;
            margin: 0 auto;
            padding: 80px 16px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
            align-items: center;
            background: var(--lm-bg);
            color: var(--lm-text);
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
              padding: 56px 16px;
            }
            
            .hero-v1__media {
              order: -1;
            }
          }
          
          @media (max-width: 768px) {
            .hero-v1 {
              padding: 56px 12px;
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
      <div className="hero-v1__left">
        <div className="hero-v1__prebadge">
          <span className="badge-dot"></span>
          <span>Современные и классические кухни</span>
        </div>
        <h1 className="hero-v1__title">
          Кухни на заказ в Москве и области от 2 недель
        </h1>
        <p className="hero-v1__subtitle">
          Создаем уникальные кухонные гарнитуры, которые идеально вписываются в ваш интерьер и соответствуют вашему образу жизни. Бесплатный замер и 3D-проект.
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
          <div className="chip">Гарантия 5 лет</div>
          <div className="chip">Собственное производство</div>
          <div className="chip">Более 3000 проектов</div>
        </div>
      </div>
      <div className="hero-v1__media card"></div>
    </section>
    </>
  );
};

export default Hero;