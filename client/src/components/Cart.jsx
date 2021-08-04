import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EmptyCart from '../assets/empty-cart.png';
import Footer from './Footer';
import Navigation from './Navigation';
import { toast } from 'react-toastify';
import { Hide } from '../components/styled-components/NavigationStyles';

import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../actions/cart-actions';
import { decrementCount } from '../actions/itemCount-actions';

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const removeItem = (index) => {
		removeItemFromCart(dispatch, index);
		toast.error('Item removed from cart');
		const dbNumber = index + 1;
		console.log(dbNumber);
	};

	return (
		<>
			<Navigation />
			<div className='Cart'>
				<div className='m-5 d-flex justify-content-center'>
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
												removeItem(index);
												decrementCount(dispatch);
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
				{cart.length !== 0 ? (
					<Link to='products'>
						<Button variant='dark' className='cart-btn'>
							Complete Purchase
						</Button>
					</Link>
				) : (
					<Hide />
				)}
			</div>
			<Footer />
		</>
	);
}
