import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UserProvider from "./contexts/UserProvider";
import MenuBar from "./components/menus/MenuBar";

const App = () => {
  return (
    <Router history={history}>
      <UserProvider>
        <Route path='/' component={MenuBar} />
        <Route path='/profile' component={ProfilePage} />
      </UserProvider>
      <Route path='/' exact component={HomePage} />
    </Router>
  );
};

export default App;
