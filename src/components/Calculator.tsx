"use client";

import React, { useMemo, useState } from 'react';

interface StepOption {
  label: string;
  value: string;
  helper?: string;
}

interface Step {
  id: string;
  number: number;
  question: string;
  options: StepOption[];
}

const steps: Step[] = [
  {
    id: 'shape',
    number: 1,
    question: 'Какая форма кухни вам подходит?',
    options: [
      { label: 'Прямая', value: 'straight' },
      { label: 'Угловая', value: 'corner' },
      { label: 'П-образная', value: 'u-shaped' },
      { label: 'С островом', value: 'island' },
    ],
  },
  {
    id: 'size',
    number: 2,
    question: 'Укажите примерные размеры кухни',
    options: [
      { label: 'До 3 метров', value: 'small' },
      { label: 'От 3 до 5 метров', value: 'medium' },
      { label: 'Более 5 метров', value: 'large' },
    ],
  },
  {
    id: 'facade',
    number: 3,
    question: 'Какой материал фасадов предпочитаете?',
    options: [
      { label: 'ЛДСП', value: 'ldsp' },
      { label: 'МДФ (плёнка/эмаль)', value: 'mdf' },
      { label: 'Пластик / Акрил', value: 'plastic' },
      { label: 'Массив / Шпон', value: 'wood' },
    ],
  },
  {
    id: 'countertop',
    number: 4,
    question: 'Какую столешницу выберем?',
    options: [
      { label: 'Пластиковая (HPL)', value: 'plastic' },
      { label: 'Искусственный камень', value: 'stone' },
    ],
  },
];

type AnswerState = Record<string, string | undefined>;

const formatPrice = (value: number) =>
  new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const getPriceRange = (answers: AnswerState) => {
  const baseMin = 90000;
  const baseMax = 130000;

  let min = baseMin;
  let max = baseMax;

  switch (answers.shape) {
    case 'corner':
      min += 20000;
      max += 28000;
      break;
    case 'u-shaped':
      min += 32000;
      max += 42000;
      break;
    case 'island':
      min += 52000;
      max += 68000;
      break;
    default:
      break;
  }

  switch (answers.size) {
    case 'medium':
      min += 15000;
      max += 20000;
      break;
    case 'large':
      min += 28000;
      max += 36000;
      break;
    default:
      break;
  }

  switch (answers.facade) {
    case 'mdf':
      min += 15000;
      max += 18000;
      break;
    case 'plastic':
      min += 22000;
      max += 26000;
      break;
    case 'wood':
      min += 45000;
      max += 58000;
      break;
    default:
      break;
  }

  if (answers.countertop === 'stone') {
    min += 28000;
    max += 34000;
  }

  return `${formatPrice(min)}–${formatPrice(max)} ₽`;
};

const Calculator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const totalSteps = steps.length;
  const activeStep = steps[currentStep];
  const selectedValue = activeStep ? answers[activeStep.id] : undefined;

  const progress = useMemo(() => {
    const base = currentStep / totalSteps;
    return Math.min(1, Math.max(0, currentStep === totalSteps ? 1 : base));
  }, [currentStep, totalSteps]);

  const priceRange = useMemo(() => getPriceRange(answers), [answers]);

  const handleOptionClick = (value: string) => {
    if (!activeStep) return;
    setAnswers((prev) => ({ ...prev, [activeStep.id]: value }));
  };

  const handleNext = () => {
    if (currentStep === totalSteps) return;

    if (!selectedValue) {
      return;
    }

    if (currentStep === totalSteps - 1) {
      setCurrentStep(totalSteps);
      return;
    }

    setCurrentStep((prev) => Math.min(totalSteps, prev + 1));
  };

  const handleBack = () => {
    if (currentStep === 0) return;

    if (currentStep === totalSteps) {
      setCurrentStep(totalSteps - 1);
      return;
    }

    setCurrentStep((prev) => Math.max(0, prev - 1));
  };

  const handleRestart = () => {
    setAnswers({});
    setFormSubmitted(false);
    setCurrentStep(0);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const allStepsCompleted = steps.every((step) => answers[step.id]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .quiz-section {
              padding: 80px 0;
              background: var(--lm-bg);
            }

            .quiz-section__header {
              max-width: 640px;
              margin: 0 auto 48px;
              text-align: center;
            }

            .quiz-section__title {
              font-size: clamp(2rem, 2vw + 1.25rem, 2.75rem);
              line-height: 1.15;
              margin-bottom: 1rem;
            }

            .quiz-section__subtitle {
              font-family: var(--font-source-sans-3), sans-serif;
              font-size: 1.125rem;
              line-height: 1.6;
              color: var(--lm-text);
              margin: 0;
            }

            .quiz-card {
              padding: 32px;
              border-radius: 20px;
              background: linear-gradient(180deg, var(--lm-card-from) 0%, var(--lm-card-to) 100%);
              border: 1px solid var(--lm-border);
              box-shadow: 0 10px 40px rgba(17, 24, 39, 0.08);
            }

            .quiz-progress {
              display: flex;
              align-items: center;
              gap: 1rem;
              margin-bottom: 2rem;
            }

            .quiz-progress__bar {
              flex: 1;
              background: rgba(185, 28, 28, 0.1);
              height: 6px;
              border-radius: 999px;
              overflow: hidden;
            }

            .quiz-progress__bar-inner {
              height: 100%;
              background: var(--lm-primary-bg);
              width: ${progress * 100}%;
              transition: width .3s ease;
            }

            .quiz-progress__meta {
              font-size: 0.875rem;
              color: var(--lm-text);
              font-weight: 600;
            }

            .quiz-step__question {
              font-size: 1.75rem;
              line-height: 1.3;
              margin: 0 0 24px;
            }

            .quiz-options {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 1.25rem;
              margin-bottom: 32px;
            }

            .quiz-option {
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              background: #fff;
              border-radius: 16px;
              border: 1px solid var(--lm-border);
              padding: 20px;
              min-height: 160px;
              cursor: pointer;
              transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
            }

            .quiz-option::before {
              content: '';
              position: absolute;
              inset: 16px 16px 60px;
              background: linear-gradient(180deg, rgba(185, 28, 28, 0.08) 0%, rgba(185, 28, 28, 0.02) 100%);
              border-radius: 12px;
              opacity: 0;
              transition: opacity .2s ease;
            }

            .quiz-option__label {
              position: relative;
              font-size: 1.125rem;
              font-weight: 600;
              color: var(--lm-heading);
              margin: 0;
            }

            .quiz-option:hover {
              transform: translateY(-2px);
              box-shadow: 0 12px 24px rgba(17, 24, 39, 0.08);
            }

            .quiz-option:hover::before {
              opacity: 1;
            }

            .quiz-option.is-selected {
              border-color: var(--lm-primary-bg);
              box-shadow: 0 16px 28px rgba(185, 28, 28, 0.18);
            }

            .quiz-option.is-selected::before {
              opacity: 1;
              background: linear-gradient(180deg, rgba(185, 28, 28, 0.16) 0%, rgba(185, 28, 28, 0.04) 100%);
            }

            .quiz-helpers {
              font-size: 0.95rem;
              color: var(--lm-text);
              margin-bottom: 24px;
            }

            .quiz-controls {
              display: flex;
              justify-content: space-between;
              gap: 12px;
            }

            .quiz-controls button {
              flex: 1;
              border-radius: 12px;
              padding: 14px 20px;
              font-weight: 600;
              border: none;
              cursor: pointer;
              transition: transform .15s ease, filter .2s ease;
            }

            .quiz-controls__back {
              background: rgba(17, 24, 39, 0.04);
              color: var(--lm-heading);
            }

            .quiz-controls__back:hover {
              filter: brightness(0.95);
            }

            .quiz-controls__next {
              background: var(--lm-primary-bg);
              color: var(--lm-primary-text);
            }

            .quiz-controls__next:disabled {
              opacity: 0.4;
              cursor: not-allowed;
            }

            .quiz-controls__next:not(:disabled):hover {
              filter: brightness(0.95);
            }

            .quiz-result__title {
              font-size: clamp(1.75rem, 1.5vw + 1.25rem, 2.5rem);
              margin: 0 0 16px;
            }

            .quiz-result__price-card {
              background: #fff;
              border-radius: 16px;
              border: 1px solid var(--lm-border);
              padding: 24px;
              margin-bottom: 20px;
            }

            .quiz-result__price-label {
              font-size: 0.95rem;
              color: var(--lm-text);
              margin-bottom: 6px;
              font-weight: 600;
            }

            .quiz-result__price-value {
              font-size: clamp(1.75rem, 1.8vw + 1.25rem, 2.5rem);
              color: var(--lm-heading);
              font-family: var(--font-dm-serif-display), serif;
            }

            .quiz-result__disclaimer {
              font-size: 0.9rem;
              color: var(--lm-text);
              line-height: 1.5;
              margin-bottom: 32px;
            }

            .quiz-result__overview {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
              gap: 1rem;
              margin-bottom: 32px;
            }

            .quiz-result__summary-item {
              background: #fff;
              border-radius: 12px;
              border: 1px solid var(--lm-border);
              padding: 16px 20px;
            }

            .quiz-result__summary-label {
              font-size: 0.85rem;
              text-transform: uppercase;
              letter-spacing: 0.02em;
              color: rgba(17, 24, 39, 0.6);
              margin-bottom: 4px;
              font-weight: 600;
            }

            .quiz-result__summary-value {
              font-size: 1.1rem;
              font-weight: 600;
              color: var(--lm-heading);
            }

            .quiz-form {
              background: #fff;
              border-radius: 16px;
              border: 1px solid var(--lm-border);
              padding: 24px;
            }

            .quiz-form__title {
              margin: 0 0 8px;
              font-size: 1.5rem;
            }

            .quiz-form__subtitle {
              margin: 0 0 24px;
              color: var(--lm-text);
              line-height: 1.5;
            }

            .quiz-form__fields {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 16px;
              margin-bottom: 20px;
            }

            .quiz-form__fields input {
              border-radius: 12px;
              border: 1px solid var(--lm-border);
              padding: 14px;
              font-size: 1rem;
              font-family: var(--font-source-sans-3), sans-serif;
            }

            .quiz-form__fields input:focus-visible {
              outline: none;
              border-color: var(--lm-primary-bg);
              box-shadow: 0 0 0 4px var(--lm-focus-ring);
            }

            .quiz-form__submit {
              width: 100%;
              background: var(--lm-primary-bg);
              color: var(--lm-primary-text);
              border: none;
              border-radius: 12px;
              padding: 16px;
              font-weight: 600;
              font-size: 1rem;
              cursor: pointer;
              transition: filter .2s ease;
            }

            .quiz-form__submit:hover {
              filter: brightness(0.95);
            }

            .quiz-form__note {
              font-size: 0.85rem;
              color: rgba(17, 24, 39, 0.6);
              margin-top: 16px;
              line-height: 1.5;
            }

            .quiz-form__success {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              font-weight: 600;
              color: var(--lm-heading);
              background: rgba(185, 28, 28, 0.08);
              border-radius: 999px;
              padding: 8px 16px;
              margin-top: 16px;
            }

            .quiz-result__actions {
              display: flex;
              flex-wrap: wrap;
              gap: 12px;
              margin-top: 32px;
            }

            .quiz-result__restart {
              background: rgba(17, 24, 39, 0.04);
              color: var(--lm-heading);
              border: none;
              border-radius: 12px;
              padding: 14px 20px;
              cursor: pointer;
              font-weight: 600;
            }

            @media (max-width: 960px) {
              .quiz-card {
                padding: 24px;
              }
            }

            @media (max-width: 768px) {
              .quiz-section {
                padding: 64px 0;
              }

              .quiz-options {
                grid-template-columns: 1fr;
              }

              .quiz-form__fields {
                grid-template-columns: 1fr;
              }
            }

            @media (max-width: 480px) {
              .quiz-section {
                padding: 56px 0;
              }

              .quiz-card {
                padding: 20px;
              }

              .quiz-step__question {
                font-size: 1.5rem;
              }

              .quiz-controls {
                flex-direction: column;
              }
            }
          `,
        }}
      />
      <section className="quiz-section" id="calculator">
        <div className="layout-container">
          <header className="quiz-section__header">
            <h2 className="quiz-section__title">Рассчитайте стоимость вашей будущей кухни</h2>
            <p className="quiz-section__subtitle">Ответьте на четыре простых вопроса, и мы сориентируем вас по цене</p>
          </header>
          <div className="quiz-card">
            <div className="quiz-progress">
              <div className="quiz-progress__bar">
                <div className="quiz-progress__bar-inner" />
              </div>
              <span className="quiz-progress__meta">
                {currentStep < totalSteps ? `Шаг ${activeStep.number} из ${totalSteps}` : 'Готово'}
              </span>
            </div>
            {currentStep < totalSteps && activeStep ? (
              <div className="quiz-step">
                <h3 className="quiz-step__question">{activeStep.question}</h3>
                <div className="quiz-options">
                  {activeStep.options.map((option) => {
                    const isSelected = selectedValue === option.value;
                    return (
                      <button
                        type="button"
                        key={option.value}
                        className={`quiz-option${isSelected ? ' is-selected' : ''}`}
                        onClick={() => handleOptionClick(option.value)}
                      >
                        <span className="quiz-option__label">{option.label}</span>
                        {option.helper && <span className="quiz-helpers">{option.helper}</span>}
                      </button>
                    );
                  })}
                </div>
                <div className="quiz-controls">
                  <button
                    type="button"
                    className="quiz-controls__back"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                  >
                    Назад
                  </button>
                  <button
                    type="button"
                    className="quiz-controls__next"
                    onClick={handleNext}
                    disabled={!selectedValue}
                  >
                    {currentStep === totalSteps - 1 ? 'Показать результат' : 'Далее'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="quiz-result">
                <h3 className="quiz-result__title">Предварительный расчёт готов!</h3>
                <div className="quiz-result__price-card">
                  <div className="quiz-result__price-label">Ориентировочная стоимость вашей кухни</div>
                  <div className="quiz-result__price-value">{priceRange}</div>
                </div>
                <p className="quiz-result__disclaimer">
                  Онлайн-калькулятор даёт ориентировочную цену и не является публичной офертой. Итоговая стоимость зависит от конкретного состава, материалов, фурнитуры и точных размеров после замера.
                </p>

                {allStepsCompleted && (
                  <div className="quiz-result__overview">
                    {steps.map((step) => (
                      <div key={step.id} className="quiz-result__summary-item">
                        <div className="quiz-result__summary-label">{step.question}</div>
                        <div className="quiz-result__summary-value">
                          {step.options.find((option) => option.value === answers[step.id])?.label || '—'}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <form className="quiz-form" onSubmit={onSubmit}>
                  <h4 className="quiz-form__title">Оставьте контакты для точного расчёта</h4>
                  <p className="quiz-form__subtitle">
                    Наш дизайнер свяжется с вами, ответит на вопросы и подготовит бесплатный 3D‑проект.
                  </p>
                  <div className="quiz-form__fields">
                    <input type="text" name="name" placeholder="Ваше имя" required />
                    <input type="tel" name="phone" placeholder="Ваш телефон" required />
                  </div>
                  <button type="submit" className="quiz-form__submit">
                    Получить точный расчёт и 3D-проект
                  </button>
                  <p className="quiz-form__note">
                    Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
                  </p>
                  {formSubmitted && (
                    <div className="quiz-form__success">Спасибо! Мы свяжемся с вами в ближайшее время.</div>
                  )}
                </form>

                <div className="quiz-result__actions">
                  <button type="button" className="quiz-result__restart" onClick={handleRestart}>
                    Пройти расчёт заново
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
