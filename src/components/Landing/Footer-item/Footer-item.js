import React from 'react';

import Auxiliar from '../../../hoc/Auxliar/Auxiliar';
import style from './Footer-item.module.css';

const footerItem = props => (
  <Auxiliar>
      <div className={style.footerItem}>
        <span className={style.number}>{props.number}</span><span className={style.abbr}>{props.abbr}</span>
        <p className={style.description}>{props.description}</p>
      </div>  
  </Auxiliar>
);

export default footerItem;