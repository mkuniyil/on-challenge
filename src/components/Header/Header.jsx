import React from 'react';
import LogoIcon from '../../assets/LogoIcon.svg';
import './Header.scss';

const Header = () => (
  <a href="/home" className="logoImage" data-testid="logoIcon">
    <img src={LogoIcon} alt="logo" data-testid="appHeader" />
  </a>
);

export default Header;
