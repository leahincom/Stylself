import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ARTWORKS from "../db.json";
import ARTSYS from "../artsy.json";
import List from "./List";
import Login from "./Login";
import Logout from "./Logout";
import MyList from "./MyList";
import Register from "./Register";
import ItemDetails from "./ItemDetails";
import Footer from "./Footer";

export default function Dashboard({ setIsAuthenticated }) {
  const [items, setItems] = useState(ARTWORKS.artworks);
  const [artsys, setArtsys] = useState(ARTSYS.artworks);

  // useEffect(() => {
  //   // ApiService.loadList()
  //   // .then(items => setItems(items))
  //   setItems(ARTWORKS.artworks);
  // }, []);

  return (
    // after loading animation finished
    <div className="dashboard">
      <Switch>
        {/* routing */
        /* login logout mylist */}

        {/* not logged-in */}
        <Route path="/register" render={(props) => <Register {...props} />} />

        <Route
          path="/login"
          render={(props) => (
            <Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />

        {/* logged-in */}
        <Route path="/mylist" render={(props) => <MyList {...props} />} />

        <Route
          path="/logout"
          render={(props) => (
            <Logout {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />

        <Route path="/artworks/:id" component={ItemDetails} />

        <Route
          path="/"
          /* default // home: show artworks */
          render={(props) => <List {...props} items={items} artsys={artsys} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}
