import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Your main component
import BotDetail from './BotDetail'; // Example for a detail view component

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/bots" component={BotDetail} /> {/* Ensure this route exists */}
                {/* Add additional routes here */}
            </Switch>
        </Router>
    );
};

export default Routes;