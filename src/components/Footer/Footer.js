import React from 'react';

import Button from '../UI/Button/Button';
import style from './Footer.module.css';

import color from '../../assets/images/dot-red.png'

const footer = () => (
  <footer className={style.footer}>
    <span>Total <span className={style.price}>$68.500</span></span>
    <span>Model R</span>
    <span style={{fontWeight: 500}}>100 <span className={style.type}>S</span></span>
    <span className={style.hidden}><img src={color} alt="cor" /></span>
    <span className={style.hidden}><img src="../../assets/images/dot-grey.png" alt="wheels" /></span>
    <Button text="NEXT" />
  </footer>
);

export default footer;