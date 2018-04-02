import {
	NavLink
} from 'react-router-dom'
import React, { Component } from 'react';
import './index.css'
import axios from 'axios'

class RegInfo extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return <div id="reginfo">
			<ul>
				<li><p><input type="text" placeholder="请输入手机号码" ref="phone"/></p></li>
				<li><p><input type="text" placeholder="你的昵称/用户名" ref="username"/></p></li>
				<li><p><input type="password" placeholder="请设置密码" ref="password"/></p></li>
				<li><p><input type="password" placeholder="请确认密码" ref="confirm"/></p></li>
			</ul>
			<div className="next">
				<a href="javascript:;" onClick={this.handleClick.bind(this)}>下一步</a>
			</div>
		</div>
	}
	handleClick(){
		
		axios.post("/register",{
			phone:this.refs.phone.value,
			username:this.refs.username.value,
			password:this.refs.password.value
			
		}).then(res=>{
			console.log(res.data);
		})
	}
}

export default RegInfo

