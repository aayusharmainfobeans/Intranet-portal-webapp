import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import ApplaudsList from './components/applauds/ApplaudsList'


function App(){

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/home" component={ApplaudsList} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={ApplaudsList} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
