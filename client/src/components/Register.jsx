import React from 'react';
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

export default function Register() {
	return (
		<>
			<FormContainer>
				<StyledForm register>
					<Link to='/' className='link'>
						<Logo>
							You<Special>Shop</Special>
						</Logo>
					</Link>
					<InputContainer>
						<LabelWrapper>
							<Label htmlFor='firstName'>First Name</Label>
						</LabelWrapper>
						<Input type='text' />
						<LabelWrapper>
							<Label htmlFor='lastName'>Last Name</Label>
						</LabelWrapper>
						<Input type='text' />
						<LabelWrapper>
							<Label htmlFor='email'>Email</Label>
						</LabelWrapper>
						<Input type='email' />
						<LabelWrapper>
							<Label htmlFor='password'>Password</Label>
						</LabelWrapper>
						<Input type='password' />
						<LabelWrapper>
							<Label htmlFor='password'>
								Re-type Password
							</Label>
						</LabelWrapper>
						<Input type='password' />
						<Button type='submit'></Button>
						<Link to='/login'>
							<FormLink>Or, Sign in</FormLink>
						</Link>
					</InputContainer>
				</StyledForm>
			</FormContainer>
		</>
	);
}
