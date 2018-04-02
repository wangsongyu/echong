import {
	NavLink
} from 'react-router-dom'
import React, { Component } from 'react';
import axios from 'axios'
import './index.css'

class Register extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return <div id="register">
			<div className="text">
				<p><input type="text" placeholder="请输入手机号码"/></p>
			</div>
			<div className="next">
				<NavLink to="/reginfo" >下一步</NavLink>
			</div>
			
		</div>
	}
	
	
}

export default Register

