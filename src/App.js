import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from"./pages/Home";
import OverMe from"./pages/OverMe";
import Projects from "./pages/Projects";
import Contact from './pages/Contact';
import Header from './layout/Header';
import Footer from './layout/Footer';


function App() {
  return (
    <Router>
    <div className="App">
    <Header/>
    <div className="content">
      <Switch>
        <Route exact path="/"> 
           <Home/>
        </Route>
        <Route path="/Projects" component={Projects}/> 
        <Route path="/OverMe" component={OverMe}/>
        <Route path="/Contact" component={Contact} />
         
      </Switch>
      </div>
      
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
