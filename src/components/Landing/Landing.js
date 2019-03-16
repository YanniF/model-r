import React from 'react';

import Auxiliar from '../../hoc/Auxliar/Auxiliar';
import Button from '../UI/Button/Button';
import style from './Landing.module.css';
import imageCar from '../../assets/images/car-home.png';
import FooterItem from './Footer-item/Footer-item';

const landing = () => (
  <Auxiliar>
    <section className={style.hero}>
      <div className={style.heroTitle}>
        <p>Build your</p>
        <h1>MODEL <span>R</span></h1>
      </div>
      <img src={imageCar} alt="Red sports car"></img>
      <div>
        <Button text="BEGIN" />
      </div>
    </section>
    <footer className={style.footer}>
      <FooterItem number="2.5" abbr="s" description="From 0 to 100" />  
      <FooterItem number="420" abbr="mi" description="Miles range" />  
      <FooterItem number="250" abbr="mp/h" description="Max speed" />  
    </footer>
  </Auxiliar>
);

export default landing;