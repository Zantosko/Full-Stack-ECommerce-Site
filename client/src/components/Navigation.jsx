import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	Special,
	Cart,
	ItemCounter,
	Hide,
} from './styled-components/NavigationStyles';

import { useSelector, useDispatch } from 'react-redux';

import { setIsAuthenticated } from '../actions/auth-actions';
import {
	decrementCount,
	incrementCount,
} from '../actions/itemCount-actions';
import { addItemToCart } from '../actions/cart-actions';

export default function Navigation() {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(
		(state) => state.isAuthenticated
	);
	const itemCount = useSelector((state) => state.itemCount);
	const cart = useSelector((state) => state.cart);
	const history = useHistory();

	const logout = (e) => {
		e.preventDefault();
		decrementCount(dispatch);

		localStorage.removeItem('token');
		setIsAuthenticated(dispatch, false);
		history.push('/');
		toast.success('Logged out successfully');
	};

	return (
		<div>
			<Navbar
				collapseOnSelect
				expand='md'
				bg='dark'
				variant='dark'
			>
				<Link to='/'>
					<Navbar.Brand href='#home' className='brand'>
						You<span className='special'>Shop</span>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Link to='/' className='link'>
							<p href='' className='mr-3 mt-3'>
								Home
							</p>
						</Link>
						<Link to='/about' className='link'>
							<p href='' className='mr-3 mt-3'>
								About
							</p>
						</Link>
						<Link to='/products' className='link'>
							<p href='' className='mr-3 mt-3'>
								Products
							</p>
						</Link>
					</Nav>
					{isAuthenticated === false ? (
						<Link to='/login' className='link'>
							<p href='' className='mr-3 mt-3'>
								Login
							</p>
						</Link>
					) : (
						<Special onClick={(e) => logout(e)}>
							Logout
						</Special>
					)}
					<Link to='/cart' className='link'>
						<Cart href='' className='mr-3 mt-3'>
							Cart{' '}
							<i class='fa-lg fas fa-shopping-cart ml-1'></i>
							{itemCount.count < 1 ? (
								<Hide />
							) : (
								<ItemCounter>{itemCount.count}</ItemCounter>
							)}
						</Cart>
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
