import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Admin extends Component {
	state = {}
	render() {
		// //读取保存的user。如果不存在，直接跳到登录页面
		// const user = JSON.parse(localStorage.getItem('user_key') || '{}')
		// if(!user._id) {
		// 	return <Redirect to="/login" />
		// }

		return (
			<div>
				Admin 
      		</div>
		);
	}
}

export default Admin;