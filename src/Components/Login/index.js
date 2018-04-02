import React, { Component } from 'react';
import './index.css';
import {
	NavLink
} from 'react-router-dom'
import axios from 'axios'
import checkSession from './auth.js'
import store from '../../Redux'

class Login extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return <div id="login">
			<header>
				<h1>
					<a className="back" href="javascript:;">
					</a>
					<div className="register">
						<NavLink to="/register">注册</NavLink>
					</div>
				</h1>
				<h2>
					<img src="https://static.epetbar.com/mpet/images/login/logo.png"/>
				</h2>
				<h3>
					<a href="javascript:;">普通登录</a>
					<a href="javascript:;">手机动态密码登录</a>
				</h3>
			</header>
			<div className="content">
				<ul className="mform">
					<li><input type="text" placeholder="手机/邮箱/用户名" ref="username"/></li>
					<li><input type="password" placeholder="输入密码" ref="password"/></li>
				</ul>
			</div>
			<div className="forgetPW">
				忘记密码?
			</div>
			<div className="loginBtn">
				<a href="javascript:;" onClick={this.handleClick.bind(this)}>登&nbsp;&nbsp;录</a>
			</div>
			<div className="otherLogin">
				<p>合作网站登录</p>
				<ul>
					<li><img src="https://static.epetbar.com/mpet/images/login/login_ico4.png"/></li>
					<li><img src="https://static.epetbar.com/mpet/images/login/login_ico2.png"/></li>
				</ul>
			</div>

		</div>
	}
	handleClick(){
		axios.post("/login",{
			username:this.refs.username.value,
			password:this.refs.password.value
		}).then(res=>{
			// console.log(res.data);
			if(res.data.status == 1){
				checkSession.setLoginStatus(true);
				this.props.history.push("/my")
			}
		})
		function actionCreator(){
			return {
				type:'changeUser',
				payload:'wangleo'
			}
		}
		store.dispatch(actionCreator())
	}
}

export default Login