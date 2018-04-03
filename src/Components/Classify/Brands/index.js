import React,{Component} from 'react'
import axios from 'axios'
import './index.css'

class Brands extends Component{
	constructor(props) {
		super(props);
		this.state={
			con0:null,
			con1:null,
			con2:null,
			con3:null,
			con4:null,
			con5:null,
			con6:null,
			con7:null,
			con8:null
		}
		
	}
	render(){
		return( 
			<div id="Brands">
				<div className="brand_box">
					<div className="brand_title">
					{
						this.state.con0?
						<div className="title_all">
							<span className="span_l"></span>
							<p>{this.state.con0.title}</p>
							<span className="span_r"></span>
						</div>:null
						

						
					}					
					</div>
					<div className="brand_content">
						<ul className="image_list">
							{
								this.state.con0?this.state.con0.list.map(item=>{

									return  <li>
												<div>
													<img src={item.logo} />
												</div>
												<p>{item.name}</p>
												<span>{item.address}</span>
											</li>
								}):null
							}	
						</ul>
					</div>
				</div>

			</div>	
			

		)

	}
	componentDidMount(){
		axios.get('/v3/brand/list/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1522719978312').then(res=>{
			console.log(res.data.brand[0].title)
			this.setState({
				con0:res.data.brand[0],
				con1:res.data.brand[1],
				con2:res.data.brand[2],
				con3:res.data.brand[3],
				con4:res.data.brand[4],
				con5:res.data.brand[5],
				con6:res.data.brand[6],
				con7:res.data.brand[7],
				con8:res.data.brand[8]
			})
			
		})
	}
}

export default Brands
