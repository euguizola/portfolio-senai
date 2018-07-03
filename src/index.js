import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Infocast from './components/projects/infocast/Infocast'
import Educar from './components/projects/educar/Educar'

ReactDOM.render(
     <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/infocast" component={Infocast}/>
            <Route exact path="/educar" component={Educar}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
