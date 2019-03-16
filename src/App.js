import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Landing from './components/Landing/Landing';
import Soon from './components/Soon/Soon';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ margin: '0 5%' }}>
          <Layout>
            <Switch>
              <Route path="/iq" exact component={Soon} />
              <Route path="/mobi" exact component={Soon} />
              <Route path="/charlie" exact component={Soon} />
              <Route path="/italy" exact component={Soon} />
              <Route path="/" exact component={Landing} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
