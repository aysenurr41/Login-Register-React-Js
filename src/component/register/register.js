
import { Link } from "react-router-dom";
import '../login/login.css'

import {
	Button,
	Col,
	Form,
	Input,
	message
} from 'antd';
import React, { useState } from 'react';

const Register = () => {
	
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: ''
	});

	

	const onFinish = (e) => {
		e.preventDefault();
		message.success('Register successful');
		console.log('Received values of form: ', user);
		setUser({
			...user,
			username: '',
			email: '',
			password: ''
		})
	};


	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
			<Col xs={24} md={12} >
				<Form
					className='form'
					name="register"
					layout='vertical'
				>
					<Form.Item
						name="username"
						label="Username"
						rules={[
							{
								type: 'username',
								message: 'The input is not valid Username!',
							},
							{
								required: true,
								message: 'Please input your Username!',
							},
						]}
					>
						<Input value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
					</Form.Item>
					<Form.Item
						name="email"
						label="E-mail"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}
					>
						<Input onChange={(e) => setUser({ ...user, email: e.target.value })} />
					</Form.Item>

					<Form.Item
						name="password"
						label="Password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
						hasFeedback
					>
						<Input.Password />
					</Form.Item>

					<Form.Item
						name="confirm"
						label="Confirm Password"
						dependencies={['password']}
						hasFeedback
						rules={[
							{
								required: true,
								message: 'Please confirm your password!',
							},
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue('password') === value) {
										return Promise.resolve();
									}

									return Promise.reject(new Error('The two passwords that you entered do not match!'));
								},
							}),
						]}
					>
						<Input.Password onChange={(e) => setUser({ ...user, password: e.target.value })} />
					</Form.Item>


					<Form.Item >
					<Link  to={"/login"}>
						<Button type="primary" className='btn'  onClick={onFinish}>
							Register
						</Button>
						</Link>
					</Form.Item>

				</Form>
			</Col>
		</div>
	);
};

export default Register;