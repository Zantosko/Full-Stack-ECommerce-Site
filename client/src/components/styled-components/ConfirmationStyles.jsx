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
	height: 700px;
	width: 500px;
	padding: 2rem 1.5rem;
	box-shadow: 0.1em 0.1em 1em rgba(0, 0, 0, 0.4);
	border-radius: 5px;
`;

export const Logo = styled.h1`
	margin-bottom: 2rem;
	color: #fff;
	font-size: 3rem;
	font-weight: bolder;
`;

export const Special = styled.span`
	color: #b5e5cf;
`;

export const Special2 = styled.span`
	color: #fff;
`;

export const Message = styled.h2`
	color: #fff;
	margin-bottom: 3rem;
`;

export const DetailTitle = styled.h1`
	color: #b5e5cf;
	font-size: 2.5rem;
	font-weight: bolder;
`;

export const Details = styled.div`
	height: 40%;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
`;

export const Labels = styled.h4`
	color: #b5e5cf;
`;

export const Button = styled.button`
	margin-top: 0.5rem;
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
