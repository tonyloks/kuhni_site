import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">О нас</h1>
        <p className="text-lg mb-4">
          Добро пожаловать на страницу о нас! Здесь вы можете узнать больше о нашей компании и нашей миссии.
        </p>
        <p className="text-lg mb-4">
          Мы стремимся создавать инновационные решения, которые помогают нашим клиентам достигать своих целей.
        </p>
        <p className="text-lg mb-4">
          Наша команда состоит из опытных профессионалов, которые постоянно совершенствуют свои навыки и знания.
        </p>
      </main>
    </div>
  );
}