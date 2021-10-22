import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigate from "./components/Nav";
import Main from "./components/Main";
import Shows from "./components/Shows";
import SetList from "./components/SetList";
import Xtras from "./components/Xtras";
import Music from "./components/Music";
import "./App.css";
import "..public/_redirects";

function App() {
  return (
    <div className="App">
      <Navigate />
      <Switch>
        <Route path="/music" component={Music} />
        <Route path="/shows" component={Shows} />
        <Route path="/setlist" component={SetList} />
        <Route path="/xtras" component={Xtras} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
