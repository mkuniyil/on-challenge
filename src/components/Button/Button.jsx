import React from 'react';
import './Button.scss';

const Button = ({ text, onClick, testId }) => (
  <button className="appButton" onClick={onClick} data-testid={testId}>
    {text}
  </button>
);

export default Button;
