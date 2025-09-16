import React from 'react';

const contactInfo = [
  {
    label: 'Адрес салона:',
    value: 'г. Ростов-на-Дону, [улица, номер дома]',
  },
  {
    label: 'Телефон:',
    value: '+7 (XXX) XXX-XX-XX',
  },
  {
    label: 'Напишите нам в мессенджеры:',
    value: 'Telegram, WhatsApp',
  },
  {
    label: 'Электронная почта:',
    value: 'email@example.com',
  },
  {
    label: 'График работы:',
    value: 'Ежедневно, с 10:00 до 19:00',
  },
];

const ContactsSection = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .contacts-section {
              padding: 96px 0 104px;
              background: #fff;
            }

            .contacts-section__title {
              font-size: clamp(2rem, 1.4vw + 1.4rem, 2.5rem);
              margin: 0 0 2.5rem;
            }

            .contacts-wrapper {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 2.5rem;
              margin-bottom: 3rem;
            }

            .contacts-card {
              border: 1px solid var(--lm-border);
              border-radius: 20px;
              padding: 2.25rem;
              background: linear-gradient(160deg, rgba(248, 113, 113, .07), #fff 65%);
            }

            .contacts-card__list {
              display: grid;
              gap: 1.25rem;
            }

            .contacts-card__label {
              font-weight: 600;
              font-size: 1.05rem;
              margin-bottom: .4rem;
            }

            .contacts-card__value {
              margin: 0;
              font-size: 1.05rem;
              color: var(--lm-text);
              line-height: 1.6;
            }

            .contacts-form {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }

            .contacts-form__title {
              font-size: 1.5rem;
              margin: 0 0 .75rem;
            }

            .contacts-form__description {
              margin: 0 0 1.5rem;
              color: var(--lm-text);
              line-height: 1.6;
            }

            .contacts-form__submit {
              align-self: flex-start;
              margin-top: .5rem;
            }

            .contacts-map {
              border: 1px dashed var(--lm-deco-border);
              border-radius: 20px;
              padding: 2.5rem;
              text-align: center;
              color: var(--lm-heading);
              font-size: 1.1rem;
              background: linear-gradient(135deg, rgba(239, 68, 68, .07), rgba(255,255,255, .9));
            }

            @media (max-width: 900px) {
              .contacts-wrapper {
                grid-template-columns: 1fr;
              }

              .contacts-card {
                padding: 2rem;
              }

              .contacts-form__submit {
                width: 100%;
                text-align: center;
              }
            }

            @media (max-width: 540px) {
              .contacts-section {
                padding: 72px 0 80px;
              }

              .contacts-card {
                padding: 1.75rem;
              }
            }
          `,
        }}
      />
      <section className="contacts-section" id="main-contacts">
        <div className="layout-container">
          <h2 className="contacts-section__title">Свяжитесь с нами</h2>
          <div className="contacts-wrapper">
            <article className="contacts-card">
              <div className="contacts-card__list">
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    <div className="contacts-card__label">{item.label}</div>
                    <p className="contacts-card__value">{item.value}</p>
                  </div>
                ))}
              </div>
            </article>
            <form className="contacts-card contacts-form">
              <h3 className="contacts-form__title">Остались вопросы? Напишите нам</h3>
              <p className="contacts-form__description">
                Расскажите, что нужно подсказать, и оставьте свой телефон. Наш менеджер ответит в течение рабочего дня.
              </p>
              <input className="input" type="text" name="name" placeholder="Ваше имя" />
              <input className="input" type="tel" name="phone" placeholder="Ваш телефон" />
              <textarea className="textarea" name="message" placeholder="Ваш вопрос или сообщение" rows={4} />
              <button type="submit" className="btn-primary contacts-form__submit">
                Отправить сообщение
              </button>
            </form>
          </div>
          <div className="contacts-map">
            Интерактивная Яндекс.Карта с отметкой нашего салона
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactsSection;
