import React from 'react';

import style from './Option.module.css';

const Option = props => {
  return (
    <div className={style.option}>
      <p className={style.kwh1}>
        {props.kwh}
        <span className={style.type}> {props.type}</span>
      </p>
      <p>
        <span className={style.kwh2}>{props.kwh} </span>
        kWh
      </p>
      <p>
        <span className={style.range}>{props.range} </span>
        miles range
      </p>
      <span className={style.select}></span>
      <span className={style.price}>{props.price}</span>
    </div>
  )
}

export default Option;
