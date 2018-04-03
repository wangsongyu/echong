import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import React from 'react'
import App from '../App.js'
import Home from '../Components/Home/index.js'
import Cart from '../Components/Cart/index.js'
import Classify from '../Components/Classify/index.js'
import Sort from '../Components/Classify/Sort/index.js'
import Brands from '../Components/Classify/Brands/index.js'
import My from '../Components/My/index.js'
import Login from '../Components/Login/index.js'
import Register from '../Components/Register/index.js'
import RegInfo from '../Components/RegInfo/index.js'
import checkSession from '../Components/Login/auth.js'

const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/classify" render={()=>
					<Classify>
						<Switch>
							<Route path="/classify/sort" component={Sort}/>
							<Route path="/classify/brands" component={Brands}/>
							<Redirect from="/" to="/classify/sort"/>
						</Switch>
					</Classify>
				}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/my" render={(props)=>{
			
					return checkSession.getLoginStatus()?<My/>:<Login {...props}/>
				}}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
				<Route path="/reginfo" component={RegInfo}/>
				<Redirect from="*" to="/home" />
			</Switch>
		</App>
	</Router>

)

export default router