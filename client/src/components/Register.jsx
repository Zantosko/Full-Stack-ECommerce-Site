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
} from './styled-components/FormStyles';

export default function Register() {
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
						<Input type='email' />
						<LabelWrapper>
							<Label htmlFor='password'>Password</Label>
						</LabelWrapper>
						<Input type='password' />
						<Button type='submit'></Button>
					</InputContainer>
				</StyledForm>
			</FormContainer>
		</>
	);
}
