import React from 'react';
import {Home} from './components/Home';
import {Department} from './components/Department';
import {Employee} from './components/Employee';  

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
    <div className="container">

      <Navigation/>

    <Switch>
  <Route path="/home" component={Home}/>
  <Route path="/department" component={Department}/>
  <Route path="/employee" component={Employee}/></Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
