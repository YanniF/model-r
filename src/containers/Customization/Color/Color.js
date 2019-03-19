import React, { Component } from 'react';
import axios from 'axios';

import style from './Color.module.css';
import Options from '../../../components/Color/Options/Options';

class Color extends Component {

  state = {
    color: null,
    description: '',
    selected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ color: res.data.data.color.items, description: res.data.data.color.description });
      })
      .catch(err => console.error(err));
  }

  render() {
    let image = null;
    let details = null;
    let options = null;

    if (this.state.color) {
      let selected = this.state.selected - 1;

      image = <figure className={style.figure}><img src={this.state.color[selected].image} alt="Car" /></figure>
      details = (
        <div>
          <p>{this.state.color[selected].label}</p>
          <p>{this.state.color[selected].price === 0 ? 'Included' : '+$' + this.state.color[selected].price}</p>
        </div>
      )
      options = <Options desc={this.state.description} />
    }

    return (
      <div>
        {image}
        {details}
        {options}
      </div>
    )
  }
}

export default Color;