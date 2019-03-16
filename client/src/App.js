import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Books from "./pages/Books";
import BrowseWrite from "./pages/BrowseWrite";
import BrowseRead from "./pages/BrowseRead";
//import Detail from "./pages/Detail";
import ReadDetail from "./pages/ReadDetail";
import TextEditor from "./pages/TextEditor";
import NewTextEditor from "./pages/NewTextEditor";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={BrowseWrite} />
          <Route exact path="/write" component={BrowseWrite} />
          <Route exact path="/write/new" component={NewTextEditor} />
          <Route exact path="/write/:id" component={TextEditor} />
          <Route exact path="/read" component={BrowseRead} />
          <Route exact path="/read/:id" component={ReadDetail} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

