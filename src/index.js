import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Sobre from './components/Sobre'

// Pages
import Infocast from './components/projects/infocast/Infocast'
import Educar from './components/projects/educar/Educar'

ReactDOM.render(
    <Router>
        <Route render={({ location }) => (
            <TransitionGroup>
                <CSSTransition classNames="fade" timeout={300} key={location.key}>
                    <Switch location={location}>
                        <Route exact path="/" component={App} />
                        <Route exact path="/infocast" component={Infocast} />
                        <Route exact path="/educar" component={Educar} />
                        <Route exact path="/sobre" component={Sobre} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )} />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
