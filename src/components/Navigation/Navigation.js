import React from 'react';
import { NavLink } from 'react-router-dom';

import Auxiliar from '../../hoc/Auxliar/Auxiliar';
import style from './Navigation.module.css';
import logo from '../../assets/images/RV-logo.svg';
import NavigationItem from './NavigationItem/Navigation-item';

const navigation = () => (
  <Auxiliar>
    <nav className={style.navigation}>
      <NavLink to="/"><img src={logo} alt="Red Venture logo" /></NavLink>
      <ul>
        <NavigationItem link="/" exact>Model R</NavigationItem>
        <NavigationItem link="/iq" exact>Model IQ</NavigationItem>
        <NavigationItem link="/mobi" exact>Model Mobi</NavigationItem>
        <NavigationItem link="/charlie" exact>Model Charlie</NavigationItem>
        <NavigationItem link="/italy" exact>Model Italy</NavigationItem>
      </ul>
    </nav>
  </Auxiliar>
);

export default navigation;