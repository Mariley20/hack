import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './Login.css';
import {signIn} from './actions';

export const Login = () => {
    return (
        <form
            onSubmit = {
       e => {
          e.preventDefault();
          signIn ( this.emailInputRef.value,  this.passwordInputRef.value)
       }
    }>
        <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" ref = { e => this.emailInputRef = e} />
         </div>
         <div class="form-group">
             <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" ref = { e => this.passwordInputRef = e} />
        </div>
        <button type="submit" class="btn btn-default"> <NavLink to='/chatReport'> Submit </NavLink></button>
        </form>
    )
}