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
import ResetPassNotif from "./pages/reset-pass-notif/ResetPassNotif";
import UpdatePassword from "./pages/update-password/UpdatePassword";
import PrivateRoute from "./components/PrivateRoute";
import CheckoutComplete from "./pages/checkoutComplete/CheckoutComplete";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/editProfile/EditProfile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
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
          <Route path="/reset-password">
            <ResetPassNotif />
          </Route>
          <Route path="/update-password">
            <UpdatePassword />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
          <PrivateRoute exact path="/profile/edit">
            <EditProfile />
          </PrivateRoute>
          <PrivateRoute exact path="/checkout">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute exact path="/checkout/notification">
            <CheckoutComplete />
          </PrivateRoute>
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
