import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/navigation/Header'
import Home from './pages/Home'
import Auth from './pages/Auth'
import AllProducts from './pages/AllProducts'
import Checkout from './pages/Checkout'
import SpecificProduct from './pages/SpecificProduct';

import './_App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop" exact>
          <AllProducts />
        </Route>
        <Route path="/shop/:productId" exact>
          <SpecificProduct />
        </Route>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
