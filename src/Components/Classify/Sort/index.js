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
			titlelist:[]
		}
		
	}
	render(){
		return <div id="Sort">
			<div className="SortAside">
				<ul className="asideList">
					<li><NavLink to="/classify/sort" activeClassName="sortCss">为您推荐</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">E宠国际</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">驱虫祛毛</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">外出清洁</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗主粮</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗零食</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗玩具</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗清洁</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗保健</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗医疗</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗生活</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗牵引</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗美容</NavLink></li>
					<li><NavLink to="/classify/sort" activeClassName="sortCss">狗狗服饰</NavLink></li>
				</ul>
			</div>
			<div className="SortZone">

			</div>
		</div>
	}
	componentDidMount() {
		axios.get('/v3/goods/category/main.html?pet_type=dog&version=358&system=wap&isWeb=1&_=1522754943772').then(res=>{
			console.log(res.data.categorys)
			this.setState({
				titlelist:res.data.categorys
			})
		})
	}
}

export default Sort