import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image1 from '../assets/about-1.jpg';
import Image2 from '../assets/about-4.jpg';
import Image3 from '../assets/about-3.jpg';
import Navigation from './Navigation';
import Footer from './Footer';

export default function About() {
	return (
		<>
			<Navigation />
			<div className='About'>
				<h1 className='p-2'>About Us</h1>
				<Carousel className='carousel'>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={Image1}
							alt='First slide'
						/>
						<Carousel.Caption className='carousel-caption'>
							<h3>Reinvent your wardrobe</h3>
							<p>
								We carry many popular brands, making it
								easier for you to change it up.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={Image2}
							alt='Second slide'
						/>
						<Carousel.Caption className='carousel-caption'>
							<h3>Focus on the things you love</h3>
							<p>
								Don't take time out of your busy schedule
								just to go shopping.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className='d-block w-100'
							src={Image3}
							alt='Third slide'
						/>
						<Carousel.Caption className='carousel-caption'>
							<h3>Find reasonably priced jewelry</h3>
							<p>
								Stop paying an arm and leg for jewelry. We
								carry many different types of jewlery at
								competitive prices.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
			<Footer />
		</>
	);
}
