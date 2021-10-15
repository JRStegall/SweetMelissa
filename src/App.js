import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigate from "./components/Nav";
import Main from "./components/Main";
import Shows from "./components/Shows";
import SetList from "./components/SetList";
import Xtras from "./components/Xtras";
import "./App.css";
import "./_redirects.txt";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Switch>
        <Route path="/shows" component={Shows} />
        <Route path="/setlist" component={SetList} />
        <Route path="/xtras" component={Xtras} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
