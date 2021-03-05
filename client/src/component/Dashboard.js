import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ARTWORKS from '../db.json';
import List from './List';
import Login from './Login';
import Logout from './Logout';
import MyList from './MyList';
import Register from './Register';
import ItemDetails from './ItemDetails';

export default function Dashboard() {

  const [ items, setItems ] = useState(ARTWORKS.artworks);

  // useEffect(() => {
  //   // ApiService.loadList()
  //   // .then(items => setItems(items))
  //   setItems(ARTWORKS.artworks);
  // }, []);
  
  return (
    // after loading animation finished
    <div className="dashboard">
      <Switch>
        <Route
          path='/'
          /* default // home: show artworks */
          render={(props) => (
            <List {...props} items={items} />
          )}
        />

      {/* routing */ /* login logout mylist */}

      {/* not logged-in */}
        <Route
          path='/register'
          render={(props) => (
            <Register {...props} />
          )}
        />

        <Route
          path='/login'
          render={(props) => (
            <Login {...props} />
          )}
        />

        {/* logged-in */}
        <Route path='/mylist' component={MyList} />

        <Route
          path='/logout'
          render={(props) => (
            <Logout {...props} />
          )}
        />

      </Switch>
    </div>
  )

}