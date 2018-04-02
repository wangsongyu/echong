import { createStore } from 'redux'

const reducer = (oldstate="用户名",data)=>{

	console.log(data)
	return data.payload;
}



const store = createStore(reducer);

export default store;




