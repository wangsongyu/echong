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
			menulist:[],
			bannerlist:[],
			mengzhualist:[],
			newpeople:'',
			iconlist:[],
			everyday:null,
			everyPic1:[],
			sessionEnd:'',
			morePic:'',
			zoneRPic:[],
			zoneLPic:[],
			con1:'',
			con2:'',
			con3:'',
			con4:'',
			con5:'',
			con6:'',
			con7:'',
			con8:'',
			con9:'',
			con10:'',
			con11:'',
			con12:'',
			chaopinL:'',
			chaopinR:'',
			remaiL:'',
			mengzhuaL:'',
			xiaojuchangL:'',
			mengchong:'',
			video:'',
			meng:'',
			juchang:'',
			videoNews:'',
			mengchongsay:'',
			juchanglist:'',
			eyeIcon:'',
			fourConL:[],
			fourConR:[],
			line:''
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
						<ul className="list" ref="dragNav">
							<li><NavLink to="/home">首页</NavLink></li>
							<li><NavLink to="/zhuliang">狗狗主粮</NavLink></li>
							<li><NavLink to="/fushi">服饰城</NavLink></li>
							<li><NavLink to="/baojian">医疗保健</NavLink></li>
							<li><NavLink to="/wanju">零食玩具</NavLink></li>
							<li><NavLink to="/waichu">日用外出</NavLink></li>
							<li><NavLink to="/meirong">美容香波</NavLink></li>


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
								<li key={item.name}>
									<img key={item} src={item.image} />
								</li>
							)
						}
					</ul>
				</div>
				<div className="newPeople">
					<img src={this.state.newpeople} />
				</div>
				<div className="surprise">
					<div className="up">
						<div className="left">
							<img src={this.state.everyPic1}/>
							<span className="session">{this.state.sessionEnd}</span>
							<span className="more">
								<img src={this.state.morePic} />
							</span>
						</div>
						<div className="right"></div>
					</div>
					<div className="down">
						<ul>
							{
								this.state.everyday?this.state.everyday.map(item=>{

									return <li key={item.gid}>
										<img src={item.image.image}/>
										<p>{item.sale_price}</p>
										<p>{item.little_price}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="home_zone">
					<div className="left">
						{
							this.state.zoneLPic.map(item=>{
								return <div key={item.atid}>
											<img src={item.image} />
										</div>
							})
						}

					</div>
					<div className="right">
						{
							this.state.zoneRPic.map(item=>{
								return <div key={item.advid}>
											<img src={item.image} />
										</div>
							})
						}
					</div>
				</div>
				<div className="con1">
					<img src={this.state.con1}/>
				</div>
				<div className="chaopin">
					<div>
						<img src={this.state.chaopinL}/>
					</div>
					<a>
						<img src={this.state.chaopinR}/>
					</a>
				</div>
				<div className="video">
					<div className="video_head">
						<img src={this.state.video}/>
					</div>
					<div className="videoContent">
						<p className="videoTitle">{this.state.videoNews.title}</p>
						<div className="down">
							<p className="left">
								<span>
									<img src={this.state.eyeIcon} />
								</span>
								{this.state.videoNews.visit}
							</p>
							<p className="right">
								<span></span>
								{this.state.videoNews.time}
							</p>
						</div>
					</div>
				</div>
				<div className="fourCon">
					<div className="left">
						{
							this.state.fourConL.map(item=>{
								return <div key={item.advid}>
									<img src={item.image} />
								</div>
							})	
						}
					</div>
					<div className="right">
						{
							this.state.fourConR.map(item=>{
								return <div key={item.advid}>
									<img src={item.image} />
								</div>
							})	
						}
					</div>
				</div>
				<div className="chaopin">
					<div>
						<img src={this.state.remaiL}/>
					</div>
					<a>
						<img src={this.state.chaopinR}/>
					</a>
				</div>
				<div className="con1">
					<img src={this.state.con2}/>
				</div>
				<div className="con1">
					<img src={this.state.con3}/>
				</div>
				<div className="con1">
					<img src={this.state.con4}/>
				</div>
				<div className="con1">
					<img src={this.state.con5}/>
				</div>
				<div className="con1">
					<img src={this.state.con6}/>
				</div>
				<div className="con1">
					<img src={this.state.con7}/>
				</div>
				<div className="con1">
					<img src={this.state.con8}/>
				</div>
				<div className="con1">
					<img src={this.state.con9}/>
				</div>
				<div className="con1">
					<img src={this.state.con10}/>
				</div>
				<div className="con1">
					<img src={this.state.con11}/>
				</div>
				<div className="con1">
					<img src={this.state.con12}/>
				</div>
				<div className="chaopin">
					<div>
						<img src={this.state.mengzhuaL}/>
					</div>
					<a>
						<img src={this.state.chaopinR}/>
					</a>
				</div>
				<div className="home_banner home_mengzhua">
					<ReactSwipe key={this.state.mengzhualist.length} className="carousel" swipeOptions={{auto:2000,continuous: true}}>
		                {
		                	this.state.mengzhualist.map(item=>
		                		<img key={item.advid} src={item.image}/>
		                	)
		                }
		            </ReactSwipe>
				</div>
				<div className="chaopin">
					<div>
						<img src={this.state.mengchong}/>
					</div>
					<a>
						<img src={this.state.chaopinR}/>
					</a>
				</div>
				<div className="video">
					<div className="video_head">
						<img src={this.state.meng}/>
					</div>
					<div className="videoContent">
						<p className="videoTitle">{this.state.mengchongsay.title}</p>
						<div className="down">
							<p className="left">
								<span>
									<img src={this.state.eyeIcon} />
								</span>
								{this.state.mengchongsay.visit}
							</p>
							<p className="right">
								<span></span>
								{this.state.mengchongsay.time}
							</p>
						</div>
					</div>
				</div>
				<div className="chaopin">
					<div>
						<img src={this.state.xiaojuchangL}/>
					</div>
					<a>
						<img src={this.state.chaopinR}/>
					</a>
				</div>
				<div className="video">
					<div className="video_head">
						<img src={this.state.juchang}/>
					</div>
					<div className="videoContent">
						<p className="videoTitle">{this.state.juchanglist.title}</p>
						<div className="down">
							<p className="left">
								<span>
									<img src={this.state.eyeIcon} />
								</span>
								{this.state.juchanglist.visit}
							</p>
							<p className="right">
								<span></span>
								{this.state.juchanglist.time}
							</p>
						</div>
					</div>
				</div>
				<div className="line">
					<img src={this.state.line} />
				</div>
				<div className="home_our">
					<div className="up">
						<ul>
							<li><a>触屏版</a></li>
							<li><a>手机客户端</a></li>
							<li><a>关于我们</a></li>
							<li><a>联系我们</a></li>
						</ul>
					</div>
					<div className="down">
						© wap.epet.com 版权：重庆易宠科技有限公司
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
		axios.get('/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1522646578494').then(res=>{
				console.log(res.data.data['3110'].content_images[1])
				this.setState({
					bannerlist:res.data.data['1'].value,
					newpeople:res.data.data['2438'].value[0].image,
					everyday:res.data.data['3'].goods,
					everyPic1:res.data.data['3'].surprise_icon.image,
					sessionEnd:res.data.data['3'].title,
					morePic:res.data.data['3'].right_image.image,
					fourConL:res.data.data['3110'].content_images[0],
					fourConR:res.data.data['3110'].content_images[1]
				})


		})
		axios.get('/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1522634568975').then(res=>{
			console.log(res.data.datas[6].content_images[1])
			this.setState({
				menulist:res.data.menus,
				iconlist:res.data.datas[2].menus,
				zoneRPic:res.data.datas[6].content_images[1],
				zoneLPic:res.data.datas[6].content_images[0],
				con1:res.data.datas[8].value[0].image,
				con2:res.data.datas[16].content_images[0][0].image,
				con3:res.data.datas[18].content_images[0][0].image,
				con4:res.data.datas[20].content_images[0][0].image,
				con5:res.data.datas[22].content_images[0][0].image,
				con6:res.data.datas[24].content_images[0][0].image,
				con7:res.data.datas[26].content_images[0][0].image,
				con8:res.data.datas[28].content_images[0][0].image,
				con9:res.data.datas[30].content_images[0][0].image,
				con10:res.data.datas[32].content_images[0][0].image,
				con11:res.data.datas[34].content_images[0][0].image,
				con12:res.data.datas[36].content_images[0][0].image,
				mengzhualist:res.data.datas[41].value,
				chaopinL:res.data.datas[10].value.left.img.image,
				chaopinR:res.data.datas[10].value.right.img.image,
				remaiL:res.data.datas[15].value.left.img.image,
				mengzhuaL:res.data.datas[40].value.left.img.image,
				xiaojuchangL:res.data.datas[46].value.left.img.image,
				mengchong:res.data.datas[43].value.left.img.image,
				video:res.data.datas[11].value[0].cover.image,
				meng:res.data.datas[44].value[0].cover.image,
				juchang:res.data.datas[47].value[0].cover.image,
				videoNews:res.data.datas[11].value[0],
				mengchongsay:res.data.datas[44].value[0],
				juchanglist:res.data.datas[47].value[0],
				eyeIcon:res.data.datas[11].value[0].visit_img.image,
				line:res.data.datas[49].content_images[0][0].image

			})
		})
		
		var dragNav = this.refs.dragNav;
		dragNav.ontouchstart = function(ev){
			var disX = ev.touches[0].clientX - this.offsetLeft;
			document.ontouchmove = function(ev){
				var L = ev.touches[0].clientX - disX;
					if(L>0){
						L = 0;
					}else if(L < -(dragNav.offsetWidth - dragNav.parentNode.offsetWidth)){
						L = -(dragNav.offsetWidth - dragNav.parentNode.offsetWidth)
					}

					dragNav.style.left = L + 'px';

				document.ontouchend = function(){
					document.ontouchmove = null;
					document.ontouchend = null;
				}
			}
		}
	}
}

export default Home