import React, { Component } from 'react';
import './index.css'
import axios from 'axios'

class Detail extends Component{
	constructor(props) {
		super(props);
		this.state={
			swiper_img:[]
		}
		
	}
	render(){
		return <div id="detail">
		detail
		</div>
	}
	componentDidMount(){
		axios.get(`/v3/goods/detail/main.html?gid=${this.props.match.params.id}&extend_pam=buytype%3A%7Ctid%3A0&version=365&system=wap&isWeb=1&_=1522894272095`).then(res=>{
			
			this.setState({
				swiper_img:res.data.datas[0].photos
			},function(){
				console.log(this.state.swiper_img);
			
			})
		})
	}
}

export default Detail

