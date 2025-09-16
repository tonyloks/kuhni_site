import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Calculator from '@/components/Calculator';
import Advantages from '@/components/Advantages';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import ContactsSection from '@/components/ContactsSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <Works />
      <Calculator />
      <Advantages />
      <About />
      <FAQ />
      <ContactsSection />
    </main>
  );
}
