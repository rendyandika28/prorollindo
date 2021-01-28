import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Login, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/admin" component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
