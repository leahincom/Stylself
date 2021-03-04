import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Dashboard from './component/Dashboard'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Dashboard />
      </Router>
    </div>
  );
}

export default App;
