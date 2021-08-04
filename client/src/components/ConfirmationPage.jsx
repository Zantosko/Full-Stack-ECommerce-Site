import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	FormContainer,
	StyledForm,
	Logo,
	Special,
	Message,
	DetailTitle,
	Details,
	Labels,
	Special2,
	Button,
} from './styled-components/ConfirmationStyles';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import { setTotal } from '../actions/purchaseAmount-actions';
import { clearCart } from '../actions/cart-actions';
import { decrementCount } from '../actions/itemCount-actions';

export default function ConfirmationPage() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const total = useSelector((state) => state.total);

	//? Local State Variables
	const [orderDate, setOrderDate] = useState('');

	useEffect(() => {
		let today = new Date();

		let date =
			today.getMonth() +
			1 +
			'/' +
			today.getDate() +
			'/' +
			today.getFullYear();

		let time = today.getHours() + ':' + today.getMinutes();

		let dateTime = date + ' at ' + time;

		setOrderDate(dateTime);
	}, []);

	const reset = () => {
		clearCart(dispatch);
		setTotal(dispatch, 0);
		decrementCount(dispatch);
	};

	return (
		<>
			<FormContainer>
				<StyledForm>
					<Link to='/' className='link'>
						<Logo>
							You<Special>Shop</Special>
						</Logo>
					</Link>
					<Message>Thank you for you purchase!</Message>
					<DetailTitle>Order Confirmation:</DetailTitle>
					<Details>
						<Labels>
							Date: <Special2>{orderDate}</Special2>
						</Labels>
						<Labels>
							Number of Items:{' '}
							<Special2>{cart.length}</Special2>
						</Labels>
						<Labels>
							Total Amount: <Special2>${total}</Special2>
						</Labels>
					</Details>
					<Link to='/' className='link'>
						<Button onClick={() => reset()}>
							Return Home
						</Button>
					</Link>
				</StyledForm>
			</FormContainer>
		</>
	);
}
