import React, { Component } from 'react';
import './index.css'
import axios from 'axios'


class Zhuliang extends Component{
	constructor(props) {
		super(props);
		this.state={
			title:'',
			banner:'',
			goods_tab:[],
			mdCHN:[],
			mdImport:[],
			taste:[],
			price:[],
			box_banner:[],
			leftImg:'',
			rightImg1:'',
			rightImg2:'',
			choice_title:'',
			banner_sgl:'',
			banner_sgl2:'',
			drag_swiper:[],
			drag_swiper2:[],
			all_df:[]
		}
		
	}
	render(){
		return <div id="homeNav">
			<header>
				<div className="back">
					<span></span>
				</div>
				<div className="title">{this.state.title}</div>
				<div className="top_nav">
					<span></span>
				</div>
			</header>
			<div className="banner">
				<img src={this.state.banner}/>
			</div>
			<ul className="goods_tab" ref="goods_tab">
				{
					this.state.goods_tab.map((item,index)=>{
						return <li key={index}>
							<img src={item.image}/>
						</li>
					})
				}
			</ul>
			<div className="goods_tab_classify" ref="goods_tab_classify">
				<ul className="tab_active">
					{
						this.state.mdCHN.map((item,index)=>{
							return <li key={index}>
								<img src={item.image}/>
							</li>
						})
					}
				</ul>
				<ul>
					{
						this.state.mdImport.map((item,index)=>{
							return <li key={index}>
								<img src={item.image}/>
							</li>
						})
					}

				</ul>
				<ul>
					{
						this.state.taste.map((item,index)=>{
							return <li key={index}>
								<img src={item.image}/>
							</li>
						})
					}

				</ul>
				<ul>
					{
						this.state.price.map((item,index)=>{
							return <li key={index}>
								<img src={item.image}/>
							</li>
						})
					}

				</ul>
			</div>
			<ul className="box_banner">
				<li>
					<img src={this.state.leftImg}/>
				</li>
				<li>
					<img src={this.state.rightImg1}/>
					<img src={this.state.rightImg2}/>
				</li>
			</ul>
			<div className="choice_title">
				<img src={this.state.choice_title}/>
			</div>
			<div className="banner_sgl">
				<img src={this.state.banner_sgl}/>
			</div>
			<div className="drag_swiper">
				<ul ref="drag_swiper">
					{
						this.state.drag_swiper.map((item,index)=>{
							return <li key={index}>
								<img src={item.small_image.image}/>
								<p>{item.subject}</p>
							</li>
						})
					}
				</ul>
			</div>
			<div className="banner_sgl2">
				<img src={this.state.banner_sgl2}/>
			</div>
			<div className="drag_swiper">
				<ul ref="drag_swiper2">
					{
						this.state.drag_swiper2.map((item,index)=>{
							return <li key={index}>
								<img src={item.small_image.image}/>
								<p>{item.subject}</p>
							</li>
						})
					}
				</ul>
			</div>
			<div className="goods_list_nav">
				<ul ref="goods_list_nav">
					<li><a href="javascript:;" className="current_active">全部</a></li>
					<li><a href="javascript:;">进口狗粮</a></li>
					<li><a href="javascript:;">国产狗粮</a></li>
					<li><a href="javascript:;">处方狗粮</a></li>
					<li><a href="javascript:;">冻干狗粮</a></li>
					
				</ul>
			</div>
			<ul className="all_df">
				{
					this.state.all_df.map((item,index)=>{

					return	<li key={index} onClick={this.handleClick.bind(this,item)}>
							<div className="goods_img">
								<img src={item.photo}/>
							</div>
							<div className="goods_info">
								<h4>{item.subject}</h4>
								<div className="gongyi">
									<img src={item.activityLabels.length==0?'':item.activityLabels[0].image}/>
								</div>
								<div className="goods_price">
								<span className="sale_price"><b>¥</b>{item.sale_price}</span>
									<span className="dprice">{item.dprice}</span>
								</div>
								<p>
									<span>{item.comments}</span>
									<span>{item.sold}</span>
								</p>
							</div>
						</li>
					})
				}
			</ul>
		</div>
	}
	componentDidMount(){
		axios.get("/v3/index/main.html?pet_type=dog&version=358&is_single=1&menu_param=123&system=wap&isWeb=1&_=1522756135665").then(res=>{
			// console.log(res.data);
			// console.log(res.data.datas[1].data.categorys)
			this.setState({
				title:res.data.page_title,
				banner:res.data.datas[0].value[0].image,
				goods_tab:res.data.datas[1].data.categorys,
				mdCHN:res.data.datas[1].data.categorys[0].small_cate.menus,
				mdImport:res.data.datas[1].data.categorys[1].small_cate.menus,
				taste:res.data.datas[1].data.categorys[2].small_cate.menus,
				price:res.data.datas[1].data.categorys[3].small_cate.menus,
				box_banner:res.data.datas[3].content_images,
				leftImg:res.data.datas[3].content_images[0][0].image,
				rightImg1:res.data.datas[3].content_images[1][0].image,
				rightImg2:res.data.datas[3].content_images[1][1].image,
				choice_title:res.data.datas[4].value.center.img.image,
				banner_sgl:res.data.datas[5].data.advAndGoods[0].big_image.image,
				banner_sgl2:res.data.datas[5].data.advAndGoods[1].big_image.image,
				drag_swiper:res.data.datas[5].data.advAndGoods[0].goods,
				drag_swiper2:res.data.datas[5].data.advAndGoods[1].goods,
				all_df:res.data.datas[6].list

			},function(){
				console.log(this.state.all_df[0].activityLabels[0].img)
				var goods_tab_ul = this.refs.goods_tab; 
				var goods_tab_li = goods_tab_ul.getElementsByTagName('img');
				var imglist = this.state.goods_tab;

				var goods_tab_classify = this.refs.goods_tab_classify;
				var goods_tab_classify_ul = goods_tab_classify.getElementsByTagName("ul");
				
				var goods_list_nav = this.refs.goods_list_nav;
				var goods_list_nav_a = goods_list_nav.getElementsByTagName('a');
				console.log(goods_list_nav_a)


				//分类标题点击切换
				for(var i=0;i<goods_tab_li.length;i++){
						goods_tab_li[i].index = i;
						goods_tab_li[0].setAttribute('src', imglist[0].image_choose)
						goods_tab_li[i].onclick=function(){
							for(var i=0; i<goods_tab_li.length;i++){
								goods_tab_li[i].setAttribute('src',imglist[i].image);
								goods_tab_classify_ul[i].className = '';
							}
							this.setAttribute('src', imglist[this.index].image_choose);
							goods_tab_classify_ul[this.index].className = 'tab_active';
					}
				}

				for(var i=0; i<goods_list_nav_a.length;i++){
					goods_list_nav_a[i].index = i;
					goods_list_nav_a[i].onclick = function(){
						for(var i=0;i<goods_list_nav_a.length;i++){
							goods_list_nav_a[i].className = ''
						}

						this.className = "current_active"
					}
				}

			})
			
		})

		function dragSwiper(dragNav){

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
		dragSwiper(this.refs.drag_swiper);
		dragSwiper(this.refs.drag_swiper2);
		dragSwiper(this.refs.goods_list_nav);

	}
	handleClick(item){
		this.props.history.push(`/detail/${item.gid}`)
			
	}
}

export default Zhuliang

