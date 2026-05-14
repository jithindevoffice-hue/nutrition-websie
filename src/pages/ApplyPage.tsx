import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ApplyPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#f6f5f2' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '160px', paddingBottom: '80px', display: 'flex', justifyContent: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ width: '100%', maxWidth: '700px' }}>
          <h1 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '2rem' }}>
            Begin Your Journey
          </h1>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdfIY-G6_aZaj6F2CO4jevkj2-1CAWKKTv3-SJvGXfLVHNMXg/viewform?embedded=true" 
            width="100%" 
            height="1200" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            style={{ minHeight: '80vh', border: 'none' }}
          >
            Loading…
          </iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};
