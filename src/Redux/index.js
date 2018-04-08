import {createStore} from 'redux';

const reducer = (oldstate = 'yonghu',data)=>{
	console.log(data)
	return data
}

const store = createStore(reducer);

export default store;
















