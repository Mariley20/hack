import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Redirect,
    NavLink,
    Route,
    Switch,
    BrowserRouter} from 'react-router-dom';
// import './styles/App.css';
// import {Home, Information, NavBar} from './Home';
import {Login} from './Login';
import {Portfolio} from './Portfolio';
import {Habilities} from './Habilities';
import {Contact} from './Contact';
import {ViewWork} from './ViewWork';
// import {Resume} from './Resume';
const App = ({biografy, work, selected}) => {
return (
     <div className="container-fluid">
        <HashRouter>
            <Switch>
                    <Route path="/login" render={() => <Login NavBar={NavBar} Information={Information}  />}/>
                    {/* <Route path="/portfolio"  render={() => <Portfolio NavBar={NavBar} Information={Information} work={work} />}/>
                    <Route path="/viewWork"  render={() => <ViewWork work={work} selected={selected} />}/>
                    <Route path="/habilities"  render={() => <Habilities NavBar={NavBar} Information={Information} />}/>
                    <Route path = "/contact" render = { () => <Contact NavBar={NavBar} Information={Information}/>} /> */}
                    <Route path='/hack' render={() => <Redirect to="/login"/>}/>
                    <Route exact path="/" render={() => <Login />}/>
                    {/* <Route path="/resume"  render={() => <Resume biografy={biografy} selected={selected} />}/> */}
            </Switch>
        </HashRouter>
    </div>
)
}
const mapToProps = ({biografy, work, selected}) => ({biografy, work, selected});

export default connect(mapToProps)(App);