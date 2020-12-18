import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainApp, Login, Register, Dashboard } from '../../Pages'

const index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/Home">
                    <MainApp />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    )
}

export default index
