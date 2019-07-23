import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Me from "../Pages/Me";
import Works from "../Pages/Works";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact component={Me} />
          <Route path="/works" exact component={Works} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
