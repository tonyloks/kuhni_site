import React from 'react';

const About = () => {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .about-section {
              padding: 96px 0;
              background: #fff;
            }

            .about-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 3rem;
              align-items: center;
            }

            .about-title {
              font-size: clamp(2rem, 1.3vw + 1.8rem, 2.75rem);
              margin: 0 0 1.5rem;
            }

            .about-paragraph {
              margin: 0 0 1.25rem;
              font-size: 1.07rem;
              line-height: 1.75;
              color: var(--lm-text);
            }

            .about-media {
              position: relative;
            }

            .about-media__frame {
              border-radius: 20px;
              border: 1px solid var(--lm-border);
              padding: 12px;
              background: linear-gradient(160deg, rgba(248, 113, 113, .12), rgba(255, 255, 255, 1));
            }

            .about-media__image {
              aspect-ratio: 4 / 3;
              border-radius: 12px;
              background: linear-gradient(135deg, rgba(17, 24, 39, .65), rgba(239, 68, 68, .55));
              display: flex;
              align-items: flex-end;
              justify-content: flex-start;
              padding: 1.5rem;
              color: rgba(255,255,255,0.95);
              font-size: 1.05rem;
              line-height: 1.5;
            }

            .about-media__caption {
              margin-top: 0.75rem;
              font-size: .95rem;
              color: var(--lm-text);
              opacity: .85;
            }

            @media (max-width: 900px) {
              .about-grid {
                grid-template-columns: 1fr;
                gap: 2.5rem;
              }

              .about-media__image {
                aspect-ratio: 5 / 4;
              }
            }

            @media (max-width: 540px) {
              .about-section {
                padding: 72px 0;
              }

              .about-media__image {
                padding: 1.25rem;
                font-size: 1rem;
              }
            }
          `,
        }}
      />
      <section className="about-section" id="about">
        <div className="layout-container about-grid">
          <div>
            <h2 className="about-title">26 лет создаём кухни, в которые хочется возвращаться</h2>
            <p className="about-paragraph">
              «Ле-манш» — это семейное дело, которое выросло из небольшой мастерской в современное производство. Уже более четверти века мы специализируемся на кухнях и корпусной мебели по индивидуальным проектам.
            </p>
            <p className="about-paragraph">
              Наша команда — это мастера, которые работают с нами более 15 лет. Мы не гонимся за массовостью, а вкладываем опыт и душу в каждый проект, чтобы мебель радовала вас функциональностью, качеством и внешним видом.
            </p>
          </div>
          <div className="about-media">
            <div className="about-media__frame">
              <div className="about-media__image">
                Наше производство
                <br />
                в Ростове-на-Дону
              </div>
            </div>
            <div className="about-media__caption">Наше производство в Ростове-на-Дону</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
