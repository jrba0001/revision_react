import React from 'react';

import './SimpleComponent.css';

export const myNumber = 5;

const SimpleComponent = ({ title, children }) => (
  <div className="simpleComponent">
    <h1 className="title">{title}</h1>
    <div className="content">{children}</div>
  </div>
);

export default SimpleComponent;
