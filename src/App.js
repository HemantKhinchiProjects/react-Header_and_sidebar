import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import Hero from './Hero';

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}
