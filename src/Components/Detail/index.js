import React, { Component } from 'react';
import './index.css'
import axios from 'axios'
import ReactSwipe from 'react-swipe';
import store from '../../Redux'



class Detail extends Component{
	constructor(props) {
		super(props);
		this.state={
			swiper_img:[],
			title_tabs:[],
			count_icon:'',
			goods_subject:'',
			goods_presbject:'',
			market_price:'',
			sale_price:''
		}
		
	}
	render(){
		return <div id="detail">
			<header>
				<div className="back">
					<span></span>
				</div>
				<div className="title">
					<ul>
						{
							this.state.title_tabs.map((item,index)=>{
								return <li key={index}>
									{item.name}
								</li>
							})
						}
					</ul>
				</div>
				<div className="top_nav">
					<span></span>
				</div>
			</header>

			{	
			// <ReactSwipe className="carousel" swipeOptions={{continuous: false}} key={this.state.swiper_img.length}>
   //           	{
   //           		this.state.swiper_img.map((item,index)=>{
   //           			return <img src={item.image} key={index}/>
   //           		})		
   //           	}
   //         </ReactSwipe>
         	}

         	<div className="swiper-container" ref="mySwiper" key={this.state.swiper_img.length}>
         	<span className="count_icon"><img src={this.state.count_icon}/></span>
         	    <div className="swiper-wrapper">
         	     {
         	     	this.state.swiper_img.map((item,index)=>{
         	     		return <div className="swiper-slide" key={index}>
         	     			<img src={item.image}/>
         	     		</div>
         	     	})
         	     }
         	  
         	    </div>  
         	    <div className="swiper-pagination"></div>
         	  </div>

         	  <div className="goods_info">
         	  	<h3>{this.state.goods_subject}</h3>
         	  	<p>{this.state.goods_presubject}</p>
         	  	<div className="goods_price">
         	  	<span><b>￥</b>{this.state.sale_price}</span>
         	  	<span><b>￥</b>{this.state.market_price}</span>
         	  	</div>
         	  </div>
         	  <ul className="add_cart">
         	 	 <li className="goods_collect">
         	 		 <a href="javascript:;"><i></i></a>
         	 	 	<p>收藏</p>
         	 	 </li>
         	 	 <li className="goods_cart_count">
         	 		 <a href="javascript:;"><i></i></a>
         	 	 	<p>购物车</p>
         	 	 </li>
         	 	 <li className="goods_addtocart">加入购物车</li>
         	  </ul>

		</div>
	}
	componentDidMount(){
		axios.get(`/v3/goods/detail/main.html?gid=${this.props.match.params.id}&extend_pam=buytype%3A%7Ctid%3A0&version=365&system=wap&isWeb=1&_=1522894272095`).then(res=>{
			
			this.setState({
				swiper_img:res.data.datas[0].photos,
				title_tabs:res.data.tabs,
				count_icon:res.data.datas[1].country.icon,
				goods_subject:res.data.datas[1].subject,
				goods_presubject:res.data.datas[1].presubject
			},function(){
				var swiper = new window.Swiper('.swiper-container', {
				     pagination: {
				       el: '.swiper-pagination',
				       type: 'fraction',
				     }
				    
				   });
			})
		})
		axios.get(`/v3/goods/detail/main.html?do=GetDynamic&gid=${this.props.match.params.id}&extend_pam=buytype%3A%7Ctid%3A0&version=365&system=wap&isWeb=1&_=1523169735366`).then(res=>{
			this.setState({
				market_price:res.data.market_price,
				sale_price:res.data.sale_price
			},function(){
				console.log(this.state.market_price,this.state.sale_price)
			})
		})
	}
	

	
}

export default Detail

