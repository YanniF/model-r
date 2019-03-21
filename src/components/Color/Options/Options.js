import React from 'react';

import dotRed from '../../../assets/images/dot-red.png';
import dotBlue from '../../../assets/images/dot-blue.png';
import dotGrey from '../../../assets/images/dot-grey.png';
import style from './Options.module.css';

const options = props => {

  const imageSource = [dotRed, dotBlue, dotGrey];
  const alt = ["Color: red", "Color: blue", "Color: grey"]

  return (
    <section className={style.options}>
      <h2>Color</h2>
      <p>{props.desc}</p>
      <div className={style.colors}>
        {
          imageSource.map((image, index) => (
            image = (
              <img src={image} alt={alt[index]} key={index + 1} 
                className={props.selected === index + 1 ? style.selected : null}
                onClick={() => props.colorSelected(index + 1)}/>
            )
          ))
        }
      </div>
    </section>
  )
}

export default options;