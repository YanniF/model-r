import React from 'react';

import style from './Button.module.css';

const Button = props => (
  <button className={style.button} onClick={props.clicked}>{props.text}</button>
)

export default Button;
