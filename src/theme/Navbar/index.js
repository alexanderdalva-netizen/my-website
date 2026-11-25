import React from 'react';
import Navbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: '#2563eb',
          color: 'white',
          textAlign: 'center',
          padding: '8px',
          fontWeight: 'bold',
        }}>
        Welcome to Alexander's Microsite
      </div>

      <Navbar {...props} />
    </>
  );
}