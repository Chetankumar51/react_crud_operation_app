import './App.css';
import Home from './components/pages/Home';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound'
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
      <Router>
    <div className="App">
    <Navbar />
    
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/user/add" component={AddUser} />
    <Route exact path="/user/edit/:id" component={EditUser} />
    <Route exact path="/user/:id" component={User} />
    {/* <Route exact component={NotFound} /> */}
    </div>
    </Router>

  );
}

export default App;
