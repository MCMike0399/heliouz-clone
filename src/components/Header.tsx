import React from 'react';
import Menu from './Menu';

const Header: React.FC = () => {
  return (
    <header>
      <h1 style={{ color: '#0D3251' }}>Helios O.</h1>
      <h3 style={{ color: '#0D3251' }}>Investigo, divulgo y a veces programo.</h3>
      <Menu />
    </header>
  );
}

export default Header;
