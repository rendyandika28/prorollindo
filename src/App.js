import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { Login, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/admin/*" component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
