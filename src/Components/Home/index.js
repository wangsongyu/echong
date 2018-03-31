import {
	NavLink
} from 'react-router-dom'
import React, { Component } from 'react';
import './index.css'

class Home extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return( 
			<div id="home">
				<div className="downloadApp">
					<img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water" />
				</div>
				<div className="home_head">
					<div className="home_head_up">
						<div className="head_up_left">
							<a className="dogdog">狗狗</a>	
							<span className="littleBorder"></span>
							<a className="area">重庆<span></span></a>
							<i></i>
						</div>
						<div className="head_up_center">
							<input type="text" value="搜索商品和品牌" />
							<span></span>
						</div>
						<span className="head_up_right"></span>
					</div>
					<div className="home_head_down">
						<ul>
							<li><NavLink to="/home" activeClassName="head_border">首页</NavLink></li>
							<li><NavLink to="/home">狗狗主粮</NavLink></li>
							<li><NavLink to="/home">服饰城</NavLink></li>
							<li><NavLink to="/home">医疗保健</NavLink></li>
							<li><NavLink to="/home">零食玩具</NavLink></li>
							<li><NavLink to="/home">日用外出</NavLink></li>
							<li><NavLink to="/home">美容香波</NavLink></li>
						</ul>
					</div>
				</div>


				<div className="home_foot">
					<ul>
						<li><NavLink to="/home" className="foot_home" activeClassName="mark"></NavLink></li>
						<li><NavLink to="/classify" className="foot_classify" activeClassName="mark"></NavLink></li>
						<li><NavLink to="/cart" className="foot_cart" activeClassName="mark"></NavLink></li>
						<li><NavLink to="/my" className="foot_my" activeClassName="mark"></NavLink></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Home