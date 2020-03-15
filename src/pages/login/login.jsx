import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import logo from '../../static/images/logo.png';
import './login.less';


const NormalLoginForm = () => {
	const onFinish = values => {
	  console.log('Received values of form: ', values);
	
	}
	const onFinishFailed = errorInfo => {
		alert('验证失败！请重新输入！')
	}

	return (
		<div className="login">
			<div className="login-box">
				<div className="login-logo">
					<img src={logo} alt="logo" />
				</div>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						name="username"
						rules={[
							{ required: true, message: '请输入用户名！' },
							{ min: 4, message: '用户名不能小于4位！' },
							{ max: 12, message: '用户名不能大于12位！' },
							{ pattern: /[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成！' }
						]}
					>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							({ getFieldValue }) => ({
								validator(rule, value) {
									if(!value) {
										return Promise.reject('请输入密码!')
									} else if(value.length<4) {
										return Promise.reject('密码不能小于4位！')
									} else if(value.length>12) {
										return Promise.reject('密码不能大于12位！')
									} else if(!/[a-zA-Z0-9_]+$/.test(value)) {
										return Promise.reject('密码必须是英文、数字或下划线组成！')
									} else {
										return Promise.resolve();
									}
								}
							})
						]}
					>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="密码"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox style={{color:'#fff'}}>记住密码</Checkbox>
						</Form.Item>
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

export default NormalLoginForm;