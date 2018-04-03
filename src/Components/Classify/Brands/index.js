import React,{Component} from 'react'
import axios from 'axios'
import './index.css'

class Brands extends Component{
	constructor(props) {
		super(props);
		this.state={
			dataTitle:[]
		}
		
	}
	render(){
		return( 
			<div id="Brands">


			</div>	
			

			)

	}
	componentDidMount(){
		axios.get('/v3/brand/list/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1522719978312').then(res=>{
			console.log(res.data.brand)
			this.setState({
				dataTitle:res.data.brand
			})
		})
	}
}

export default Brands