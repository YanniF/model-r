import React from 'react'

import Option from './Option/Option';
import style from './Options.module.css';

const Options = props => {

  return (
    <div className={style.options}>
      <h2>Engine</h2>
      {
        props.engineInfo.map(item => (
          <Option key={item.id} kwh={item.kwh} type={item.type} range={item.range} price={item.price} />
        ))
      }
    </div>
  )
}

export default Options
