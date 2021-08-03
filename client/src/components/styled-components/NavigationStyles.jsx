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
`;

export const HideCounter = styled.div`
	display: none;
`;
