import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Redirect,
    NavLink,
    Route,
    Switch,
    BrowserRouter} from 'react-router-dom';
import {ChatReport} from './ChatReport';
import Parts from './Parts';
// import {Habilities} from './Habilities';
// import {Contact} from './Contact';
import AddPhoto from './AddPhoto';
// import {Resume} from './Resume';
const App = ({chatComent, wordsIdentify, selected, next}) => {
return (
     <div className="container-fluid">
        <HashRouter>
            <Switch>
                    <Route path="/chatReport" render={() => <ChatReport chatComent={chatComent} next={next}/>}/>
                    <Route path="/showParts"  render={() => <Parts  />}/>
                     <Route path="/addPhoto"  render={() => <AddPhoto />}/>
                   {/* <Route path="/habilities"  render={() => <Habilities NavBar={NavBar} Information={Information} />}/>
                    <Route path = "/contact" render = { () => <Contact NavBar={NavBar} Information={Information}/>} /> */}
                    <Route path='/hack' render={() => <Redirect to="/chatReport"/>}/>
                    <Route exact path="/" render={() => <ChatReport chatComent={chatComent} next={next}/>}/>
                    {/* <Route path="/resume"  render={() => <Resume biografy={biografy} selected={selected} />}/> */}
            </Switch>
        </HashRouter>
    </div>
)
}
const mapToProps = ({chatComent,wordsIdentify, selected, next}) => ({chatComent, wordsIdentify, selected, next});

export default connect(mapToProps)(App);