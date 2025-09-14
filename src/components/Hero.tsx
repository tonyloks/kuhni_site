import React from 'react';

const Hero = () => {
  return (
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
  );
};

export default Hero;