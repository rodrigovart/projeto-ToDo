import React from 'react'
import {Router, Route, Redirect, hashHistory} from 'react-router'

import todo from '../todo/todo'
import about from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path="/todos" component={todo} />
        <Route path="/about" component={about} />
        <Redirect from="*" to="/todos"/>
    </Router>
)