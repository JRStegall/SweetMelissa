import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navigate from "./components/Nav";
import Main from "./components/Main";
import Shows from "./components/Shows";
import SetList from "./components/SetList";
import Xtras from "./components/Xtras";
import Music from "./components/Music";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigate />
        <Switch>
          <Route path="/music" component={Music} />
          <Route path="/gallery" component={Shows} />
          <Route path="/events" component={SetList} />
          <Route path="/friends" component={Xtras} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
