import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
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
					<Link to='/login' className='link'>
						<p href='' className='mr-3 mt-3'>
							Login
						</p>
					</Link>
					<Link to='/cart' className='link'>
						<p href='' className='mr-3 mt-3'>
							Cart{' '}
							<i class='fa-lg fas fa-shopping-cart ml-1'></i>
						</p>
					</Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
