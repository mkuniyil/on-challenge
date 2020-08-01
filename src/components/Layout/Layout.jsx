import React from 'react';
import './Layout.scss';
import Header from '../Header/Header';

const Layout = ({ children }) => {
  return (
    <div className="box_appLayout">
      <header className="box_appHeader">
        <Header />
      </header>
      {children}
    </div>
  );
};

export default Layout;
