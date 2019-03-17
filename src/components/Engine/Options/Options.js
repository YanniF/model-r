import React from 'react'

import Option from './Option/Option';
import style from './Options.module.css';

const options = props => (

  <div className={style.options}>
    <h2>Engine</h2>
    {
      props.engineInfo.map(item => {
        return (
          <Option
            key={item.id}
            info={item}
            selectedEngine={props.selected}
            clicked={() => props.optionClicked(item.id)} />
        )
      })
    }
  </div>
)

export default options
