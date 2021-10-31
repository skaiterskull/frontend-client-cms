import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import Registration from "./pages/registration/Registration";
import Verification from "./pages/verification/Verification";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/verification">
            <Verification />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/:category">
            <Category />
          </Route>
          <Route exact path="/:category/:productSlug">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
