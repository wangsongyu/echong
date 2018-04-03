import {
	NavLink
} from 'react-router-dom'
import React, { Component } from 'react';
import './index.css'

class Classify extends Component{
	constructor(props) {
		super(props);
		
	} 
	render(){
		return( 
			<div id="classify">
				<div className="classify_head">
					<div className="left"><p><NavLink to="/classify/sort" activeClassName="classify_mark">分类</NavLink></p></div>
					<div className="right"><p><NavLink to="/classify/brands" activeClassName="classify_mark">品牌</NavLink></p><span></span></div>
				</div>
				{this.props.children}
				<div className="home_foot classify_foot">
					<ul>
						<li><NavLink to="/home" className="foot2_home" activeClassName="mark"></NavLink></li>
						<li><NavLink to="/classify" className="foot2_classify" activeClassName="mark"></NavLink></li>
						<li><NavLink to="/cart" className="foot_cart" activeClassName="mark"></NavLink></li>
						<li><NavLink to="/my" className="foot_my" activeClassName="mark"></NavLink></li>
					</ul>
				</div>
			</div>

		)
	}
}

export default Classify

