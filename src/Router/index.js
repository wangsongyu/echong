import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import React from 'react'
import App from '../App.js'
import Home from '../Components/Home/index.js'
import Cart from '../Components/Cart/index.js'
import Classify from '../Components/Classify/index.js'
import My from '../Components/My/index.js'

const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/classify" component={Classify}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/my" component={My}/>
				<Redirect from="*" to="/home" />
			</Switch>
		</App>
	</Router>

)

export default router