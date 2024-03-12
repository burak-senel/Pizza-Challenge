import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Home from "./components/Home";
import Order from "./components/Order";
import Success from "./components/Success";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/OrderPizza">
        <Order />
      </Route>
      <Route path="/Success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
