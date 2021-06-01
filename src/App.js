import './App.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from"./components/Home";
import OverMe from"./components/OverMe";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <div className="content">
      <switch>
        <Route exact path="/">
          <Home/>  
        </Route>

        <Route path="/Projects">
          <Projects/>
        </Route>

        <Route path="/Overme">
          <OverMe/>
        </Route>

        <Route path="/Contact">
          <Contact/>
        </Route>
       
      </switch>
      </div>
      
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
