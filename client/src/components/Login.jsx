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

export default function Login() {
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

	// const onSubmitForm = async e => {
	//   e.preventDefault();
	//   try {
	//     const body = { email, password }
	//     const response = await fetch()
	//   } catch (err) {
	//     console.error(err)
	//   }
	// }

	return (
		<>
			<FormContainer>
				<StyledForm>
					<Link to='/' className='link'>
						<Logo>
							You<Special>Shop</Special>
						</Logo>
					</Link>
					<InputContainer>
						<LabelWrapper>
							<Label htmlFor='email'>Email</Label>
						</LabelWrapper>
						<Input name='email' type='email' />
						<LabelWrapper>
							<Label htmlFor='password'>Password</Label>
						</LabelWrapper>
						<Input name='password' type='password' />
						<Button type='submit'></Button>
						<Link to='/register'>
							<FormLink>Or, Sign up</FormLink>
						</Link>
					</InputContainer>
				</StyledForm>
			</FormContainer>
		</>
	);
}
