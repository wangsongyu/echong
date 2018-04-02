import {
	NavLink
} from 'react-router-dom'
import React, { Component } from 'react';
import './index.css'
import axios from 'axios'
import ReactSwipe from 'react-swipe';

class Home extends Component{
	constructor(props) {
		super(props);
		this.state={
			bannerlist:[],
			iconlist:[],
			everyday:null,
			everyPic1:[]
		}
		
	}
	render(){
		return( 
			<div id="home">
				<div className="home_head">
					<div className="home_head_up">
						<div className="head_up_left">
							<a className="dogdog">狗狗</a>	
							<span className="littleBorder"></span>
							<a className="area">重庆<span></span></a>
							<i></i>
						</div>
						<div className="head_up_center">
							<input type="text" />
							<span></span>
						</div>
						<span className="head_up_right"></span>
					</div>
					<div className="home_head_down">
						<ul>
							<li><NavLink to="/home"><span>首页</span></NavLink></li>
							<li><NavLink to="/home">狗狗主粮</NavLink></li>
							<li><NavLink to="/home">服饰城</NavLink></li>
							<li><NavLink to="/home">医疗保健</NavLink></li>
							<li><NavLink to="/home">零食玩具</NavLink></li>
							<li><NavLink to="/home">日用外出</NavLink></li>
							<li><NavLink to="/home">美容香波</NavLink></li>
						</ul>
					</div>
				</div>
				<div className="home_banner">
					<ReactSwipe key={this.state.bannerlist.length} className="carousel" swipeOptions={{auto:2000,continuous: true}}>
		                {
		                	this.state.bannerlist.map(item=>
		                		<img key={item.advid} src={item.image}/>
		                	)
		                }
		            </ReactSwipe>
				</div>
				<div className="columnNav">
					<ul>
						{
							this.state.iconlist.map(item=>
								<li>
									<img key={item} src={item.image} />
								</li>
							)
						}
					</ul>
				</div>
				<div className="newPeople">
					<img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" />
				</div>
				<div className="surprise">
					<div className="up">
						<div className="left">
							<img src={this.state.everyPic1}/>
						</div>
						<div className="right"></div>
					</div>
					<div className="down">
						<ul></ul>
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
	componentDidMount(){
		axios.get('/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1522630641262').then(res=>{
				console.log(res.data.data['1'].value)
				this.setState({
					bannerlist:res.data.data['1'].value
				})


		})
		axios.get('/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1522634568975').then(res=>{
			console.log(res.data.datas[2].menus)
			this.setState({
				iconlist:res.data.datas[2].menus
			})
		})
		axios.get('/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1522637162312').then(res=>{
			console.log(res.data.data['3'].surprise_icon.image)
			this.setState({
				everyday:res.data.data['3'],
				everyPic1:res.data.data['3'].surprise_icon.image
			})
		})
	}	
}

export default Home