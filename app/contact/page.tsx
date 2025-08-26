'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном приложении здесь был бы код для отправки данных на сервер
    alert(`Форма отправлена:\nИмя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`);
    // Сброс формы после отправки
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] items-center sm:items-start max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Свяжитесь с нами</h1>
        <p className="text-lg mb-6">
          У вас есть вопросы или предложения? Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
        </p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Отправить
          </button>
        </form>
      </main>
    </div>
  );
}