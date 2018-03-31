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
		return <div id="classify">
			<div className="home_foot">
				classify
				<ul>
					<li><NavLink to="/home" className="foot2_home" activeClassName="mark"></NavLink></li>
					<li><NavLink to="/classify" className="foot2_classify" activeClassName="mark"></NavLink></li>
					<li><NavLink to="/cart" className="foot_cart" activeClassName="mark"></NavLink></li>
					<li><NavLink to="/my" className="foot_my" activeClassName="mark"></NavLink></li>
				</ul>

			</div>
		</div>
	}
}

export default Classify

