import React from 'react';

import Button from '../UI/Button/Button';
import style from './Footer.module.css';

import color from '../../assets/images/dot-red.png'

const footer = props => {

  return (
    <footer className={style.footer}>
      <span>Total <span className={style.price}>${props.price}</span></span>
      <span>Model R</span>
      <span style={{ fontWeight: 500 }}>{props.kwh} <span className={style.type}>{props.type}</span></span>
      <span className={style.hidden}><img src={color} alt="cor" /></span>
      <span className={style.hidden}><img src="../../assets/images/dot-grey.png" alt="wheels" /></span>
      <Button text="NEXT" url="/modelr/custom/color" />
    </footer>
  )
}

export default footer;