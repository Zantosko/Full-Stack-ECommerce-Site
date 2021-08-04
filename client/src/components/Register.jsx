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

export default function Register() {
	const dispatch = useDispatch();

	const [inputs, setInputs] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		rePassword: '',
	});

	const {
		firstName,
		lastName,
		email,
		password,
		rePassword,
	} = inputs;

	const onChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmitForm = async (e) => {
		e.preventDefault();
		try {
			const body = {
				firstName,
				lastName,
				email,
				password,
				rePassword,
			};
			const response = await fetch(
				'http://localhost:4001/auth/register',
				{
					method: 'POST',
					headers: {
						'Content-type': 'application/json',
					},
					body: JSON.stringify(body),
				}
			);
			const parseRes = await response.json();

			if (parseRes.jwtToken) {
				localStorage.setItem('token', parseRes.jwtToken);
				setIsAuthenticated(dispatch, true);
				setInputs({
					firstName: '',
					lastName: '',
					email: '',
					password: '',
					rePassword: '',
				});
				toast.success('Registered Successfully');
			} else {
				setIsAuthenticated(dispatch, false);
				toast.error(parseRes);
			}
		} catch (err) {
			console.error(err.message);
		}
	};
	return (
		<>
			<FormContainer>
				<StyledForm register onSubmit={onSubmitForm}>
					<Link to='/' className='link'>
						<Logo>
							You<Special>Shop</Special>
						</Logo>
					</Link>
					<InputContainer>
						<LabelWrapper>
							<Label htmlFor='firstName'>First Name</Label>
						</LabelWrapper>
						<Input
							type='text'
							name='firstName'
							value={firstName}
							onChange={(e) => onChange(e)}
						/>
						<LabelWrapper>
							<Label htmlFor='lastName'>Last Name</Label>
						</LabelWrapper>
						<Input
							type='text'
							name='lastName'
							value={lastName}
							onChange={(e) => onChange(e)}
						/>
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
						<LabelWrapper>
							<Label htmlFor='rePassword'>
								Re-type Password
							</Label>
						</LabelWrapper>
						<Input
							type='password'
							name='rePassword'
							value={rePassword}
							onChange={(e) => onChange(e)}
						/>
						<Button type='submit'></Button>
						<Link to='/login' className='link'>
							<FormLink>Or, Sign in</FormLink>
						</Link>
					</InputContainer>
				</StyledForm>
			</FormContainer>
		</>
	);
}
