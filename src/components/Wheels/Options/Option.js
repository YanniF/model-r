import React from 'react';

import style from './Option.module.css';

const option = props => {

  return (
    <figure 
      className={props.selected === props.wheels.id ? style.selected : style.notSelected}
      onClick={() => props.optionClicked(props.wheels.id)}>
      <img src={props.wheels.image} alt={props.wheels.label} />
      <figcaption>
        <p className={style.label}>{props.wheels.label}</p>
        <p className={style.price}>{props.wheels.price === 0 ? 'Included' : '+$' + props.wheels.price.toLocaleString()}</p>
      </figcaption>
    </figure>
  )
}

export default option;