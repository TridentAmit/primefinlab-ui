import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Solutions } from './components/sections/Solutions';
import { Features } from './components/sections/Features';
import { Images } from './components/sections/Images';
import { Stats } from './components/sections/Stats';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Features />
        <Images />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;