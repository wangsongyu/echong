
const checkSession = {

	loginStatus:false,
	getLoginStatus:function(){
		return this.loginStatus;
	},
	setLoginStatus:function(status){
		this.loginStatus = status
	}
}

export default checkSession;