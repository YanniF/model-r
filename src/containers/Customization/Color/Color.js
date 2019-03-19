import React, { Component } from 'react';

import axios from 'axios';

class Color extends Component {

  state = {
    color: null,
    price: 0,
    selected: 1
  }

  componentDidMount() {
    axios.get('https://next.json-generator.com/api/json/get/41ORKNZDU')
      .then(res => {
        this.setState({ color: res.data.data.color.items, price: res.data.data.price });
      })
      .catch(err => console.error(err));
  }

  render() {
    return(
      <div>color</div>
    )
  }
}

export default Color;