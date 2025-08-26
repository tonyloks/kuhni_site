'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          Мой Сайт
        </Link>
        
        <div className="flex space-x-6">
          <Link 
            href="/" 
            className={`text-base ${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            Главная
          </Link>
          <Link 
            href="/about" 
            className={`text-base ${pathname === '/about' ? 'text-blue-600 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            О нас
          </Link>
          <Link 
            href="/contact" 
            className={`text-base ${pathname === '/contact' ? 'text-blue-600 font-medium' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}
          >
            Контакты
          </Link>
        </div>
      </div>
    </nav>
  );
}