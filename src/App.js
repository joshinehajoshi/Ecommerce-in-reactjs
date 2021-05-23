import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import Cart from './Components/Cart';
import About from './Components/About';
import Shop from './Components/Shop/Shop';
import Account from './Components/Account';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={About}/>
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Shop' exact component={Shop}/>
          <Route path='/Cart' exact component={Cart}/>
          <Route path='/Account' exact component={Account}/>
        </Switch>
      </Router>

    </div>
  )
}

export default App;