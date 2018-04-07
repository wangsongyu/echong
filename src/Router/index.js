import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import React from 'react'
import App from '../App.js'
import Home from '../Components/Home/index.js'
import Zhuliang from '../Components/Zhuliang/index.js'
import Fushi from '../Components/Fushi/index.js'
import Baojian from '../Components/Baojian/index.js'
import Wanju from '../Components/Wanju/index.js'
import Waichu from '../Components/Waichu/index.js'
import Meirong from '../Components/Meirong/index.js'
import Cart from '../Components/Cart/index.js'
import Classify from '../Components/Classify/index.js'
import Sort from '../Components/Classify/Sort/index.js'
import Brands from '../Components/Classify/Brands/index.js'
import My from '../Components/My/index.js'
import Login from '../Components/Login/index.js'
import Register from '../Components/Register/index.js'
import Detail from '../Components/Detail/index.js'
import RegInfo from '../Components/RegInfo/index.js'
import checkSession from '../Components/Login/auth.js'

const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/zhuliang" component={Zhuliang}/>
				<Route path="/fushi" component={Fushi}/>
				<Route path="/baojian" component={Baojian}/>
				<Route path="/wanju" component={Wanju}/>
				<Route path="/waichu" component={Waichu}/>
				<Route path="/meirong" component={Meirong}/>
				
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
				<Route path="/detail/:id" component={Detail}/>
				<Route path="/reginfo" component={RegInfo}/>
				<Redirect from="*" to="/home" />
			</Switch>
		</App>
	</Router>

)

export default router