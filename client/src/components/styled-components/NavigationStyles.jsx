import styled from 'styled-components';

export const Special = styled.span`
	color: #fff;
	margin-right: 1rem;

	&:hover {
		color: #b5e5cf;
		cursor: pointer;
	}
`;

export const Cart = styled.p`
	position: relative;
`;

export const ItemCounter = styled.div`
	height: 18px;
	width: 18px;
	border-radius: 50%;
	background-color: #d34444;
	position: absolute;
	margin-top: -10px;
	margin: -15px 0 0 3.3rem;
	font-size: 13px;
	color: #fff;

	@media (max-width: 770px) {
		margin-left: 23.8rem;
	}
	@media (max-width: 700px) {
		margin-left: 20rem;
	}
	@media (max-width: 650px) {
		margin-left: 19.5rem;
	}
	@media (max-width: 600px) {
		margin-left: 17.5rem;
	}
	@media (max-width: 550px) {
		margin-left: 17.5rem;
	}
	@media (max-width: 500px) {
		margin-left: 15.5rem;
	}
`;

export const Hide = styled.div`
	display: none;
`;
