import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin: 5rem;
`;

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	background-color: #212629;
	height: ${(props) =>
		props.register ? '760px' : '550px'};
	width: 400px;
	padding: 2rem 1.5rem;
	box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.4);
	border-radius: 5px;
`;

export const Logo = styled.h1`
	color: #fff;
	font-size: 3rem;
	font-weight: bolder;
`;

export const Special = styled.span`
	color: #b5e5cf;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 60%;
	width: 100%;
`;

export const LabelWrapper = styled.div`
	width: 75%;
	margin-bottom: 0.1rem;
	padding-bottom: 0.2rem;
	text-align: left;
`;

export const Label = styled.label`
	color: #b5e5cf;
	font-size: 17px;
	font-weight: bold;
`;

export const Input = styled.input`
	margin-bottom: 2.5rem;
	padding: 0.3rem 0.7rem;
	width: 80%;
	border: none;
	border-radius: 4px;

	&:focus {
		outline-color: #82d0ad;
	}
`;

export const Button = styled.input`
	margin-top: 2rem;
	padding: 0.5rem 2rem;
	font-size: 16px;
	border: none;
	border-radius: 4px;
	background-color: #b5e5cf;
	transition: all 0.3s ease;

	&:hover {
		background-color: #fff;
	}
`;
