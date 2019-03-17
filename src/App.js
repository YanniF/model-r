import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Landing from './components/Landing/Landing';
import Soon from './components/Soon/Soon';
import Engine from './containers/Engine/Engine';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ margin: '0 5%' }}>
          <Layout>
            <Switch>
              <Redirect from="/" to="/modelr" exact />
              <Route path="/modelr" exact component={Landing} />
              <Route path="/iq" component={Soon} />
              <Route path="/mobi" component={Soon} />
              <Route path="/charlie" component={Soon} />
              <Route path="/italy" component={Soon} />
              <Route path={'/modelr/engine'} exact component={Engine} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
