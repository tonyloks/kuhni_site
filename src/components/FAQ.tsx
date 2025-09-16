'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question:
      'Можно ли сделать кухню по моим размерам, если у меня нестандартная планировка?',
    answer:
      'Да, конечно. Это наша основная специализация. Мы изготавливаем кухни и любую корпусную мебель точно по вашим размерам, учитывая все особенности помещения: ниши, выступы, трубы и углы. Стандартных модулей у нас нет — только индивидуальные проекты.',
  },
  {
    question: 'Какие сроки изготовления кухни?',
    answer:
      'В среднем, стандартный срок изготовления составляет около 4 недель. Если вы выбираете фасады из массива дерева, срок может увеличиться до 2 месяцев из-за особенностей материала. Возможность ускорения заказа обсуждается индивидуально.',
  },
  {
    question: 'Замер платный?',
    answer:
      'Да, выезд замерщика на объект является платной услугой, так как это важный и ответственный этап работы. Однако, при заключении договора на изготовление мебели, мы полностью вычитаем стоимость замера из итоговой суммы. Для вас он становится бесплатным.',
  },
  {
    question: 'Вы устанавливаете встраиваемую бытовую технику?',
    answer:
      'Да, наши монтажники выполняют установку и подключение любой встраиваемой техники: варочных панелей, духовых шкафов, посудомоечных машин, вытяжек и холодильников. Мы делаем все необходимые выпилы в столешнице и корпусах.',
  },
  {
    question: 'Какую гарантию вы предоставляете?',
    answer:
      'Мы предоставляем официальную гарантию 1 год на всю нашу мебель. Гарантия распространяется на фурнитуру, механизмы и производственные дефекты, которые могут проявиться в ходе правильной эксплуатации.',
  },
];

const FAQ = () => {
  const [opened, setOpened] = useState<number | null>(0);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .faq-section {
              padding: 96px 0;
              background: #fff7f7;
            }

            .faq-title {
              font-size: clamp(2rem, 1.5vw + 1.4rem, 2.5rem);
              margin: 0 0 2.5rem;
              text-align: center;
            }

            .faq-list {
              max-width: 880px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }

            .faq-item {
              border: 1px solid var(--lm-border);
              border-radius: 16px;
              background: #fff;
              overflow: hidden;
              transition: border-color .2s ease, box-shadow .2s ease;
            }

            .faq-item--opened {
              border-color: rgba(239, 68, 68, .45);
              box-shadow: 0 20px 40px -30px rgba(185, 28, 28, .45);
            }

            .faq-button {
              width: 100%;
              background: transparent;
              border: none;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 1rem;
              padding: 1.5rem 2rem;
              font-size: 1.1rem;
              font-weight: 600;
              text-align: left;
              cursor: pointer;
              color: var(--lm-heading);
            }

            .faq-button:focus-visible {
              outline: none;
              box-shadow: inset 0 0 0 2px var(--lm-focus-ring);
            }

            .faq-icon {
              width: 32px;
              height: 32px;
              border-radius: 999px;
              border: 1px solid var(--lm-border);
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-size: 1.5rem;
              color: var(--lm-accent-dot);
              transition: transform .2s ease;
            }

            .faq-item--opened .faq-icon {
              transform: rotate(45deg);
            }

            .faq-answer {
              max-height: 0;
              overflow: hidden;
              transition: max-height .35s ease;
              padding: 0 2rem;
            }

            .faq-item--opened .faq-answer {
              max-height: 320px;
              padding-bottom: 1.75rem;
            }

            .faq-answer__text {
              margin: 0;
              font-size: 1.05rem;
              line-height: 1.8;
              color: var(--lm-text);
            }

            @media (max-width: 540px) {
              .faq-section {
                padding: 72px 0;
              }

              .faq-button {
                padding: 1.25rem 1.5rem;
                font-size: 1rem;
              }

              .faq-answer {
                padding: 0 1.5rem;
              }

              .faq-item--opened .faq-answer {
                padding-bottom: 1.25rem;
              }
            }
          `,
        }}
      />
      <section className="faq-section" id="faq">
        <div className="layout-container">
          <h2 className="faq-title">Ответы на частые вопросы</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => {
              const isOpened = opened === index;
              return (
                <article
                  className={`faq-item${isOpened ? ' faq-item--opened' : ''}`}
                  key={item.question}
                >
                  <button
                    type="button"
                    className="faq-button"
                    onClick={() => setOpened(isOpened ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpened ? '–' : '+'}
                    </span>
                  </button>
                  <div className="faq-answer" aria-hidden={!isOpened}>
                    <p className="faq-answer__text">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
