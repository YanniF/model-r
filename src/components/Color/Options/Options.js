import React from 'react';

import dotRed from '../../../assets/images/dot-red.png';
import dotBlue from '../../../assets/images/dot-blue.png';
import dotGrey from '../../../assets/images/dot-grey.png';
import style from './Options.module.css';

const options = props => {

  return (
    <section className={style.options}>
      <h2>Color</h2>
      <p>{props.desc}</p>
      <div className={style.colors}>
        <img src={dotRed} alt="Color red" />
        <img src={dotBlue} alt="Color blue" />
        <img src={dotGrey} alt="Color grey" />
      </div>
    </section>
  )
}

export default options;