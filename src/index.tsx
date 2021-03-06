import React from 'react';
import ReactDOM from 'react-dom';

/* UI Fabric imports */
import { mergeStyles } from 'office-ui-fabric-react';
import { initializeIcons } from '@uifabric/icons';

/* SRC imports */
import './styles/css/index.css';
import { ListPage } from './pages/ListPage';

/* Router import */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TabPage } from './pages/TabPage'; 
import DashboardPage from './pages/DashboardPage';

initializeIcons();

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={DashboardPage} />
      <Route path="/list" component={ListPage} />
      <Route path="/tab" component={TabPage} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('app'));
