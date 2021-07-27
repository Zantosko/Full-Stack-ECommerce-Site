import React from 'react';
import ErrorImage from '../assets/404-image.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';

export default function ErrorPage() {
	return (
		<>
			<Navigation />
			<div className='ErrorPage'>
				<div className='container d-flex justify-content-center align-items-center flex-column mb-4'>
					<img
						src={ErrorImage}
						alt=''
						className='error-img'
					/>
					<Link to='/'>
						<Button className='error-btn'>
							Return Home
						</Button>
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}
