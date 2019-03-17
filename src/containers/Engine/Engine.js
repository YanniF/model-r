import React, { Component } from 'react';
import axios from 'axios';

import Auxiliar from '../../hoc/Auxliar/Auxiliar';
import Options from '../../components/Engine/Options/Options';
import Footer from '../../components/Footer/Footer';
import style from './Engine.module.css';

export class Engine extends Component {

  state = {
    engine: null,
    price: 0,
    selected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ engine: res.data.data.engine.items, price: res.data.data.price });
      })
      .catch(err => console.error(err));
  }

  optionClickedHandler = id => {
    this.setState({ selected: id })
  }

  render() {
    let image = null;
    let options = null;
    let footer = null;

    if (this.state.engine) {
      let selected = this.state.selected - 1;

      image = <figure className={style.figure}><img src={this.state.engine[this.state.selected - 1].image} alt="Car" /></figure>
      options = (
        <Options 
          className={style.options} 
          engineInfo={this.state.engine} 
          optionClicked={this.optionClickedHandler}
          selected={this.state.selected} />
      )
      footer = (
        <Footer 
          price={this.state.price + this.state.engine[selected].price}
          kwh={this.state.engine[selected].kwh}
          type={this.state.engine[selected].type} />
      )
    }

    return (
      <Auxiliar>
        <section className={style.engine}>
          {image}
          {options}
        </section>
        {footer}        
      </Auxiliar>
    )
  }
}

export default Engine
