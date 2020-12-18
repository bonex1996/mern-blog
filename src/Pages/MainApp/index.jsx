import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '..'
import { Footer, Header } from '../../Components'
import './mainapp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="main-wrapper">
                <div className="content-wrapper">
                    <Router>
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                </div>
                <div className="aside-wrapper">
                    <ul>
                        <li><a href="">link 1</a></li>
                        <li><a href="">link 2</a></li>
                        <li><a href="">link 3</a></li>
                        <li><a href="">link 4</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainApp
