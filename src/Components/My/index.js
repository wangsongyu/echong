import React, { Component } from 'react';


class My extends Component{
	constructor(props) {
		super(props);
		this.state={
			username:'my'
		}
		
	}
	render(){
		return <div>
		<p>{this.state.username}</p>
		</div>
	}
	componentWillMount(){
		this.setState({
			username:document.cookie.split('=')[1]
		})
	}
	
}

export default My