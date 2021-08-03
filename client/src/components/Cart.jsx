import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { removeItemFromCart } from '../actions/cart-actions';
import EmptyCart from '../assets/empty-cart.png';
import Footer from './Footer';
import Navigation from './Navigation';
import { toast } from 'react-toastify';

export default function Cart() {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const removeItem = (index) => {
		removeItemFromCart(dispatch, index);
		toast.error('Item removed from cart');
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
											onClick={() => removeItem(index)}
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
