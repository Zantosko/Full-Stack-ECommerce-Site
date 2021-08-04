import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EmptyCart from '../assets/empty-cart.png';
import Footer from './Footer';
import Navigation from './Navigation';
import { toast } from 'react-toastify';
import { Hide } from '../components/styled-components/NavigationStyles';
import { OrderTotal } from '../components/styled-components/CartStyles';

import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../actions/cart-actions';
import {
	incrementCount,
	decrementCount,
} from '../actions/itemCount-actions';
import { setTotal } from '../actions/purchaseAmount-actions';

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const total = useSelector((state) => state.total);

	const removeItem = (item) => {
		removeItemFromCart(dispatch, item.id);
		toast.error('Item removed from cart');
	};

	const checkTotal = () => {
		let sum = 0;
		for (let item of cart) {
			sum += item.price;
		}
		sum.toFixed(2);
		setTotal(dispatch, sum);
	};

	useEffect(() => {
		incrementCount(dispatch, cart.length);
		checkTotal();
	}, [cart]);

	return (
		<>
			<Navigation />
			<div className='Cart'>
				<div className='m-5 d-flex justify-content-center flex-column'>
					{cart.length !== 0 ? (
						<div>
							<OrderTotal>Order Total: ${total}</OrderTotal>
							<Link to='/cart/confirmation'>
								<Button variant='dark' className='cart-btn'>
									Complete Purchase
								</Button>
							</Link>
						</div>
					) : (
						<Hide />
					)}
					<div className='card-grid'>
						{cart.length !== 0 ? (
							cart.map((item, index) => (
								<Card
									key={index}
									className='cart-card d-flex justify-content-center align-items-center'
								>
									<div className='card-img-container d-flex justify-content-center'>
										<Card.Img
											variant='top'
											src={item.image}
											className='card-img p-2'
										/>
									</div>
									<Card.Body className='card-body'>
										<Card.Title>{item.title}</Card.Title>
										<Card.Text>${item.price}</Card.Text>
										<Button
											variant='dark'
											onClick={() => {
												removeItem(item);
											}}
										>
											<i className='fas fa-times'></i>{' '}
											Remove Item
										</Button>
									</Card.Body>
								</Card>
							))
						) : (
							<img src={EmptyCart} alt='' />
						)}
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
