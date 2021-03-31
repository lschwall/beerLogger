import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Home/Landing.jsx';
import Signup from './Authentication/Signup.jsx';
import Login from './Authentication/Login.jsx';
import '../Styles/styles.scss';


const App = () => {
    return (

        <Router>
            <Switch>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
