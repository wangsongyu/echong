import React, { Component } from 'react';
import store from '../../Redux'

class My extends Component{
	constructor(props) {
		super(props);
		
	}
	render(){
		return <div>
		<p>my</p>
		</div>
	}
	componentDidMount(){
		console.log('11111111111111')
		store.subscribe(() =>{
			console.log("接收了消息",store.getState())
		})
	}
}

export default My