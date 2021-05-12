import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Login from './components/login/Login'
import ApplaudsList from './components/applauds/ApplaudsList'


function App(){

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home" component={ApplaudsList} />
            <Route path="/login" component={Login} />
            <Route path="/" component={ApplaudsList} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
