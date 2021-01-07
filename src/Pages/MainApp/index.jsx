import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '..'
import { Footer, Header, Aside } from '../../Components'
import CreateBlog from '../CreateBlog'
import Detail from '../Detail'
import './mainapp.scss'

const MainApp = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="main-wrapper">
                <div className="content-wrapper">
                    <Router>
                        <Switch>
                            <Route path="/create-blog">
                                <CreateBlog />
                            </Route>
                            <Route path="/detail">
                                <Detail />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                </div>
                <div className="aside-wrapper">
                    <Aside />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainApp
