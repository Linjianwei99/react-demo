import React from 'react';
import { Route, Link, Switch,BrowserRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Home from './Home';
import About from './About';

import './style.css';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 0, beforeChildren: true },
  exit: { opacity: 0 }
});

export default function App() {
    return (
        <Route
            render={({ location }) => (
            <div id="site-container">
                <header>
                    <h1>Route transitions with Pose and React Router</h1>
                </header>
                <div id="content-container">
                <ul id="site-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <PoseGroup>
                    <RouteContainer key={location.pathname}>
                        <Switch location={location}>
                            <BrowserRouter>
                                <Route exact path="/" component={Home} key="home" />
                                <Route path="/about" component={About} key="about" />
                            </BrowserRouter>
                        </Switch>
                    </RouteContainer>
                </PoseGroup>
                </div>
            </div>
            )}
        />
    )
}