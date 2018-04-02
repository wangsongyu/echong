import React, { Component } from 'react';
import './index.css';

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
						<a>注册</a>
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
					<li><input type="text" placeholder="手机/邮箱/用户名"/></li>
					<li><input type="password" placeholder="输入密码"/></li>
				</ul>
			</div>
			<div className="forgetPW">
				忘记密码?
			</div>
			<div className="loginBtn">
				<a href="javascript:;">登&nbsp;&nbsp;录</a>
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
}

export default Login