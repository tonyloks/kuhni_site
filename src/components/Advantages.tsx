import React from 'react';

const advantages = [
  {
    title: 'Собственное производство',
    description:
      'Контролируем каждый этап — от раскроя до сборки. Это позволяет нам гарантировать качество, соблюдать сроки и предлагать честные цены без посредников.',
  },
  {
    title: 'Решения под любой нестандарт',
    description:
      'Мы не ограничены стандартными модулями. Создаём мебель, которая идеально вписывается в геометрию ваших стен, учитывая выступы, ниши и коммуникации.',
  },
  {
    title: 'Проверенные материалы и фурнитура',
    description:
      'Работаем с надёжными поставщиками МДФ, ЛДСП, массива и пластика. Устанавливаем фурнитуру Hettich, Boyard и Blum, чтобы ваша кухня служила долгие годы.',
  },
  {
    title: 'Прозрачный процесс работы',
    description:
      'От первого расчёта до финальной приёмки — вы всегда знаете, на каком этапе ваш проект. Делаем 3D-эскиз, заключаем договор и остаёмся на связи.',
  },
];

const Advantages = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .advantages-section {
              padding: 96px 0;
              background: var(--lm-bg);
            }

            .advantages-section__title {
              font-size: clamp(2rem, 1.5vw + 1.5rem, 2.75rem);
              margin: 0 0 2.5rem;
              max-width: 720px;
            }

            .advantages-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 1.5rem;
            }

            .advantages-card {
              padding: 2.25rem;
              background: #fff;
              border: 1px solid var(--lm-border);
              border-radius: 20px;
              position: relative;
              overflow: hidden;
              transition: transform .2s ease, box-shadow .2s ease;
            }

            .advantages-card::before {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(135deg, rgba(239, 68, 68, .08), transparent 50%);
              opacity: 0;
              transition: opacity .3s ease;
            }

            .advantages-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 32px -16px rgba(17, 24, 39, 0.25);
            }

            .advantages-card:hover::before {
              opacity: 1;
            }

            .advantages-card__icon {
              width: 48px;
              height: 48px;
              border-radius: 14px;
              background: rgba(185, 28, 28, 0.12);
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 1.5rem;
              color: var(--lm-primary-bg);
              font-size: 1.5rem;
              font-weight: 600;
            }

            .advantages-card__title {
              font-size: 1.5rem;
              margin: 0 0 .75rem;
            }

            .advantages-card__description {
              margin: 0;
              font-size: 1.05rem;
              line-height: 1.7;
            }

            @media (max-width: 900px) {
              .advantages-grid {
                grid-template-columns: 1fr;
              }

              .advantages-card {
                padding: 1.75rem;
              }
            }

            @media (max-width: 540px) {
              .advantages-section {
                padding: 72px 0;
              }

              .advantages-card__title {
                font-size: 1.35rem;
              }

              .advantages-card__description {
                font-size: 1rem;
              }
            }
          `,
        }}
      />
      <section className="advantages-section" id="advantages">
        <div className="layout-container">
          <h2 className="advantages-section__title">Почему нам доверяют создание уюта</h2>
          <div className="advantages-grid">
            {advantages.map((item) => (
              <article className="advantages-card" key={item.title}>
                <div className="advantages-card__icon" aria-hidden="true">
                  •
                </div>
                <h3 className="advantages-card__title">{item.title}</h3>
                <p className="advantages-card__description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Advantages;
