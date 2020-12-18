import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from '..'

const MainApp = () => {
    return (
        <Fragment>
            <p>Header</p>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
            <p>Footer</p>
        </Fragment>
    )
}

export default MainApp
