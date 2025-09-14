'use client';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const layoutStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
  };

  const containerStyles = {
    maxWidth: '1120px',
    margin: '0 auto',
    padding: '0 16px',
    width: '100%',
  };

  const mainStyles = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column' as const,
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .layout-container {
            max-width: 1120px;
            margin: 0 auto;
            padding: 0 16px;
            width: 100%;
          }
          
          @media (max-width: 768px) {
            .layout-container {
              padding: 0 12px;
            }
          }
          
          @media (max-width: 480px) {
            .layout-container {
              padding: 0 8px;
            }
          }
        `
      }} />
      <div style={layoutStyles}>
        <Header />
        <main style={mainStyles}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;