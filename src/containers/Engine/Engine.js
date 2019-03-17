import React, { Component } from 'react';
import axios from 'axios';

import ImageCar from '../../components/ImageCar/ImageCar';
import Auxiliar from '../../hoc/Auxliar/Auxiliar';
import Button from '../../components/UI/Button/Button';
import Options from '../../components/Engine/Options/Options';
import style from './Engine.module.css';

export class Engine extends Component {

  state = {
    engine: null,
    price: 0
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ engine: res.data.data.engine.items, price: res.data.data.price });
      })
      .catch(err => console.error(err));
  }

  render() {
    let image = null;
    let options = null;

    if (this.state.engine) {
      image = <figure className={style.figure}><ImageCar source={this.state.engine[0].image} /></figure>
      options = <Options className={style.options} engineInfo={this.state.engine} />
    }

    return (
      <Auxiliar>
        <section className={style.engine}>
          {image}
          {options}
        </section>
        <footer className={style.footer}>
          <Button text="NEXT" />
        </footer>
      </Auxiliar>
    )
  }
}

export default Engine
