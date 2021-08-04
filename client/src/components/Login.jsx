import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	FormContainer,
	StyledForm,
	Logo,
	Special,
	InputContainer,
	LabelWrapper,
	Label,
	Input,
	Button,
	FormLink,
} from './styled-components/FormStyles';
import { toast } from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux';

import { setIsAuthenticated } from '../actions/auth-actions';
import { setUserInfo } from '../actions/userInfo-action';
import { incrementCount } from '../actions/itemCount-actions';

export default function Login() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const [inputs, setInputs] = useState({
		email: '',
		password: '',
	});

	const { email, password } = inputs;

	const onChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = { email, password };
			const response = await fetch(
				'http://localhost:4001/auth/login',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				}
			);

			const parseResponse = await response.json();
			if (parseResponse.token) {
				localStorage.setItem('token', parseResponse.token);

				setIsAuthenticated(dispatch, true);
				setInputs({
					email: '',
					password: '',
				});
				setUserInfo(dispatch);
				toast.success('Logged in successfully');
				incrementCount(dispatch, cart.length);
			} else {
				setIsAuthenticated(dispatch, false);
				toast.error(parseResponse);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<FormContainer>
				<StyledForm onSubmit={onSubmitForm}>
					<Link to='/' className='link'>
						<Logo>
							You<Special>Shop</Special>
						</Logo>
					</Link>
					<InputContainer>
						<LabelWrapper>
							<Label htmlFor='email'>Email</Label>
						</LabelWrapper>
						<Input
							type='email'
							name='email'
							value={email}
							onChange={(e) => onChange(e)}
						/>
						<LabelWrapper>
							<Label htmlFor='password'>Password</Label>
						</LabelWrapper>
						<Input
							type='password'
							name='password'
							value={password}
							onChange={(e) => onChange(e)}
						/>
						<Button type='submit'></Button>
						<Link to='/register' className='link'>
							<FormLink>Or, Sign up</FormLink>
						</Link>
					</InputContainer>
				</StyledForm>
			</FormContainer>
		</>
	);
}
