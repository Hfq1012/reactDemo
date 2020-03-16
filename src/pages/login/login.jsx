import React, {Component} from 'react';
import { Form,Icon, Input, Button, Checkbox, message } from 'antd';
import { reqLogin } from '../../api/index';
import logo from '../../static/images/logo.png';
import './login.less';


class Login extends Component {
	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields(async(err, {username,password}) => {
			// if(!err) {
			// 	const result = await reqLogin(username,password)
			// 	if(result.status===0) {
			//	    message.success('登录成功')
			// 		this.props.history.replace('/')
			// 	} else {
			// 		message.error(result.msg)
			// 	}
			// } else {
			// 	alert('验证失败')
			// }
			if(!err) {
				if (username === 'admin' && password  === 'admin') {
					message.success('登录成功')
					this.props.history.replace('/')
				}
			} else {
				message.error("验证失败")
			}
		})
	}
	render() { 
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="login">
				<div className="login-box">
					<div className="login-logo">
						<img src={logo} alt="logo" />
					</div>
					<Form
						onSubmit= {this.handleSubmit}
						className="login-form"
					>
						<Form.Item>
							{getFieldDecorator('username',{
								rules:[
									{ required: true, message: '请输入用户名！' },
									{ min: 4, message: '用户名不能小于4位！' },
									{ max: 12, message: '用户名不能大于12位！' },
									{ pattern: /[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成！' }
								]
							})(
								<Input prefix={<Icon type="user" />} placeholder="用户名" />
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('password',{
								rules:[
									{ required: true, message: '请输入密码！' },
									{ min: 4, message: '密码不能小于4位！' },
									{ max: 12, message: '密码不能大于12位！' },
									{ pattern: /[a-zA-Z0-9_]+$/, message: '密码必须是英文、数字或下划线组成！' }
								]
							})(
								<Input
									prefix={<Icon type="lock" />}
									type="password"
									placeholder="密码"
								/>
							)}
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit" className="login-form-button">
								登录
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}
}

const WrapperForm = Form.create()(Login)
 
export default WrapperForm;
