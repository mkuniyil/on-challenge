import React from 'react';
import './Link.scss';

const Link = ({ href, classname, text, testId }) => (
  <a href={href} className={classname} data-testid={testId}>
    {text}
  </a>
);

export default Link;
