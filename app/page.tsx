'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const NewHomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ле-манш - Кухни на заказ в Ростове-на-Дону</title>
        <meta name="description" content="Кухни на заказ со скидкой до -40%. Напрямую от производителя в Ростове-на-Дону. Гарантия, быстрые сроки, бесплатный замер." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white text-gray-900">
        <Header />
        <main>
          <Hero />
          <Calculator />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NewHomePage;
