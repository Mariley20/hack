import React, { Component } from 'react';
import {
    NavLink, Redirect
} from 'react-router-dom';
import {chat} from './actions';

export const ChatReport = ({chatComent, next}) => {
    console.log('nextt', next)
    return  (
        <div>
            <HTMLprint chatComent={chatComent} next={next} />
        <form className='demoForm' onSubmit = {e => {
          e.preventDefault();
          chat ( this.commentInputRef.value)
       }
    }>
        <div className='form-group'>
		    <div className='input-group'>
		        <span className="input-group-addon"><i className="fa fa-key fa-fw lock"></i></span>
                <input type="text" className="form-control inputName"
                    placeholder="comment" ref = { e => this.commentInputRef = e} />
			</div>
        </div>     
       <button type = "submit" >comment</button>
    </form>
    </div>
    )
}
const HTMLprint = ({chatComent, next}) => {
    console.log('next', next)
    return (
        <div>
            {
                chatComent.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.msg}
                        </div>
                    )
                })
            }
            {
            next  && <Redirect to = "/map" />
         }
        </div>
    )
}