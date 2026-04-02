import { useState, useEffect } from 'react';
import { Menu, X, Upload, ShoppingCart, Package, Zap, Palette, Home, CheckCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { HowItWorks } from './components/HowItWorks';
import { WhyUs } from './components/WhyUs';
import { OrderCTA } from './components/OrderCTA';
import { Policies } from './components/Policies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles.css';

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Products />
      <HowItWorks />
      <WhyUs />
      <OrderCTA />
      <Policies />
      <Contact />
      <Footer />
    </div>
  );
}
