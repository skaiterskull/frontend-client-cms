import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootswatch/dist/yeti/bootstrap.min.css";
import "./App.css";
import Layout from "./components/Layout";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout />
          </Route>
          <Route path="/cart">hi</Route>
          <Route path="/login">hi</Route>
          <Route path="/:category">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
