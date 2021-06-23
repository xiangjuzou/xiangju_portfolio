import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from"./pages/Home";
import Projects from "./pages/Projects";
import OverMij from"./pages/OverMij";
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
        <Route exact path="/" component={Home}/> 
        <Route path="/Projecten" component={Projects}/> 
        <Route path="/OverMij" component={OverMij}/>
        <Route path="/Contact" component={Contact} />   
      </Switch>
      </div>
      
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
