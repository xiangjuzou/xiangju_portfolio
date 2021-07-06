import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
import "../node_modules/jquery/dist/jquery.min.js";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from"./pages/Home";
import Projects from "./pages/Projects";
import OverMij from"./pages/OverMij";
import Contact from './pages/Contact';
import Header from './layout/Header';
import Footer from './layout/Footer';
import WeerProject from './pages/WeerProject';


function App() {

  return (
    <div>
    <Router>
      <div className="App d-flex" style={{justifyContent:'space-between', flexDirection: 'column', minHeight: '100vh'}}>
      <Header />
        <div className="content" style={{height:'100%'}}>
          <Switch>
            <Route exact path="/" component={Home}/> 
            <Route path="/Projecten" component={Projects}/> 
            <Route path="/OverMij" component={OverMij}/>
            <Route path="/Contact" component={Contact} /> 
            <Route path="/Weer"  component={WeerProject}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    </div>
  );
}

export default App;
