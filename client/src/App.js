import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import "./css/style.css";
import Navbar from "./component/Navbar";
import Dashboard from "./component/Dashboard";
import auth from "./utils/auth";

function App() {
  const initialState = auth;
  const [isAuthenticated, setIsAuthenticated] = useState(initialState);

  return (
    <div>
      <Router>
        <Navbar isAuthenticated={isAuthenticated} />
        <Dashboard setIsAuthenticated={setIsAuthenticated} />
      </Router>
    </div>
  );
}

export default App;
