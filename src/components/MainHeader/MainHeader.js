import React from 'react';

import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={`${classes.mainHeader} ${props.className}`}>
      <h1>IdeaPortal</h1>
      {props.children}
    </header>
  );
};

export default MainHeader;
