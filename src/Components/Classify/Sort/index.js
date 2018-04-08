import {
	NavLink
} from 'react-router-dom'
import React,{Component} from 'react'
import axios from 'axios'
import './index.css'

class Sort extends Component{
	constructor(props) {
		super(props);
		this.state={
			title0:[],
			title0Pic:[],
			title1:[],
			title1Pic:[],
			title2:[],
			title2Pic:[],
			title3:[],
			title3Pic:[],
			title4:[],
			title4Pic:[],
			title5:[],
			title5Pic:[],
			title6:[],
			title6Pic:[],
			title7:[],
			title7Pic:[],
			title8:[],
			title8Pic:[],
			title9:[],
			title9Pic:[],
			title10:[],
			title10Pic:[],
			title11:[],
			title11Pic:[],
			title12:[],
			title12Pic:[],
			title13:[],
			title13Pic:[],
			title14:[],
			title14Pic:[]
		}
		
	}
	render(){
		return <div id="Sort">
			<div className="SortAside">
				<ul className="asideList" ref="list">
					<li><NavLink to="/classify/sort" activeClassName="sortCss">为您推荐</NavLink></li>
					<li><NavLink to="/classify/sort">E宠国际</NavLink></li>
					<li><NavLink to="/classify/sort">驱虫祛毛</NavLink></li>
					<li><NavLink to="/classify/sort">外出清洁</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗主粮</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗零食</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗玩具</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗清洁</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗保健</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗医疗</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗生活</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗牵引</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗美容</NavLink></li>
					<li><NavLink to="/classify/sort">狗狗服饰</NavLink></li>
					<li></li>
					<li></li>
				</ul>
			</div>
			<div className="SortZone" ref="zonecontent">
				<div className="zone tuijian">
					<div className="zone_head">
						<h3>{this.state.title1}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title1Pic?this.state.title1Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone guoji">
					<div className="zone_head">
						<h3>{this.state.title0}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title0Pic?this.state.title0Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone quchong">
					<div className="zone_head">
						<h3>{this.state.title2}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title2Pic?this.state.title2Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone waichu">
					<div className="zone_head">
						<h3>{this.state.title3}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title3Pic?this.state.title3Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				
				<div className="zone zhuliang">
					<div className="zone_head">
						<h3>{this.state.title5}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title5Pic?this.state.title5Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone lingshi">
					<div className="zone_head">
						<h3>{this.state.title6}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title6Pic?this.state.title6Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone wanju">
					<div className="zone_head">
						<h3>{this.state.title7}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title7Pic?this.state.title7Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone qingjie">
					<div className="zone_head">
						<h3>{this.state.title8}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title8Pic?this.state.title8Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone baojian">
					<div className="zone_head">
						<h3>{this.state.title9}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title9Pic?this.state.title9Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone huli">
					<div className="zone_head">
						<h3>{this.state.title10}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title10Pic?this.state.title10Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone shenghuo">
					<div className="zone_head">
						<h3>{this.state.title11}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title11Pic?this.state.title11Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone qianyin">
					<div className="zone_head">
						<h3>{this.state.title12}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title12Pic?this.state.title12Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone meirong">
					<div className="zone_head">
						<h3>{this.state.title13}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title13Pic?this.state.title13Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
				<div className="zone fushi">
					<div className="zone_head">
						<h3>{this.state.title14}</h3>
						<span></span>
					</div>
					<div className="zone_content">
						<ul>
							{
								this.state.title14Pic?this.state.title14Pic.map(item=>{
									return <li key={item.id_param}>
										<img src={item.photo} />
											<p>{item.name}</p>
									</li>
								}):null
							}
						</ul>
					</div>
				</div>
			</div>

		</div>
	}
	componentDidMount() {
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=4315&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1522819165603').then(res=>{
			this.setState({
				title0:res.data.cate_list[0].title,
				title0Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=88888&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1522804746684').then(res=>{
			this.setState({
				title1:res.data.cate_list[0].title,
				title1Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=4335&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1522818950380').then(res=>{
			this.setState({
				title2:res.data.cate_list[0].title,
				title2Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=4334&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1522819083313').then(res=>{
			this.setState({
				title3:res.data.cate_list[0].title,
				title3Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=4315&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1522819165603').then(res=>{
			this.setState({
				title4:res.data.cate_list[0].title,
				title4Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=5&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523170945802').then(res=>{
			this.setState({
				title5:res.data.cate_list[0].title,
				title5Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=6&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171293349').then(res=>{
			this.setState({
				title6:res.data.cate_list[0].title,
				title6Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=53&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171398408').then(res=>{
			this.setState({
				title7:res.data.cate_list[0].title,
				title7Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=4315&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171513690').then(res=>{
			this.setState({
				title8:res.data.cate_list[0].title,
				title8Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=48&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171555876').then(res=>{
			this.setState({
				title9:res.data.cate_list[0].title,
				title9Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=49&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171670933').then(res=>{
			this.setState({
				title10:res.data.cate_list[0].title,
				title10Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=54&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171700078').then(res=>{
			this.setState({
				title11:res.data.cate_list[0].title,
				title11Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=2652&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171869637').then(res=>{
			this.setState({
				title12:res.data.cate_list[0].title,
				title12Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=2651&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171886587').then(res=>{
			this.setState({
				title13:res.data.cate_list[0].title,
				title13Pic:res.data.cate_list[0].list
			})
		})
		axios.get('/v3/goods/category/main.html?do=getChildren&owner=55&pet_type=dog&issite=true&version=358&system=wap&isWeb=1&_=1523171971497').then(res=>{
			this.setState({
				title14:res.data.cate_list[0].title,
				title14Pic:res.data.cate_list[0].list
			})
		})

		
		var list = this.refs.list;
		var listli = list.children;
		var allContent = this.refs.zonecontent;
		var content = allContent.children;
		var disY;
		console.log(listli)

		list.ontouchstart=function(ev){                           
			var disY = ev.touches[0].clientY-list.offsetTop;
			list.ontouchmove=function(ev){
				var T = ev.touches[0].clientY-disY;
				if(T>0){
					T = 0;
				}else if(T<-(list.offsetHeight-list.parentNode.offsetHeight)){
					T = -(list.offsetHeight-list.parentNode.offsetHeight)
				}
				list.style.top = T + 'px'
				return false;
			}
			list.ontouchend=function(){
				list.ontouchmove = null;
				list.ontouchend = null;
				return false;
			}
		}
		
		
	}
	

	
}

export default Sort