import React, { useState } from 'react';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    // Add your code to toggle the menu or perform other actions
  };

  return (
    <div className="hamburger-icon" onClick={handleToggleMenu}>
      <div className={isOpen ? 'line line-open' : 'line'}></div>
      <div className={isOpen ? 'line line-open' : 'line'}></div>
      <div className={isOpen ? 'line line-open' : 'line'}></div>
    </div>
  );
};

export default HamburgerIcon;
