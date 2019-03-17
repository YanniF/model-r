import React from 'react';

import style from './Option.module.css';

const Option = props => {
    
  const selected = props.selected ? style.selected : null;

  return (
    <div className={style.option + " " + selected} onClick={props.clicked}>
      <p className={style.kwh1}>
        {props.info.kwh}
        <span className={style.type}> {props.info.type}</span>
      </p>
      <p>
        <span className={style.kwh2}>{props.info.kwh} </span>
        kWh
      </p>
      <p>
        <span className={style.range}>{props.info.range} </span>
        miles range
      </p>
      <p className={style.select}></p>
      <span className={style.price}>+${props.info.price}</span>
    </div>
  )
}

export default Option;
