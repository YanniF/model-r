import React from 'react';

import Button from '../UI/Button/Button';
import style from './Footer.module.css';

import red from '../../assets/images/dot-red.png';
import blue from '../../assets/images/dot-blue.png';
import grey from '../../assets/images/dot-grey.png';

const footer = props => {
  let imageSource;
  let buttonUrl = "/modelr/custom/color";

  if (props.color === 3)
    imageSource = grey;
  else if (props.color === 2)
    imageSource = blue;
  else
    imageSource = red;

  if (props.showWheels) {
    buttonUrl = "/modelr/custom/final";
  }
  else if (props.showColor) {
    buttonUrl = "/modelr/custom/wheels";
  }

  return (
    <footer className={style.footer}>
      <span>Total <span className={style.price}>${props.price}</span></span>
      <span>Model R</span>
      <span style={{ fontWeight: 500 }}>{props.kwh} <span className={style.type}>{props.type}</span></span>
      <span className={props.showColor ? null : style.hidden}><img src={imageSource} alt="cor" /></span>
      <span className={props.showWheels ? null : style.hidden}><img style={{ width: '3rem' }} src={props.wheels} alt="wheels" /></span>
      <Button text="NEXT" url={buttonUrl} />
    </footer>
  )
}

export default footer;