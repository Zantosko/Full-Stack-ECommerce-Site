import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../actions/product-actions';
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Products() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	useEffect(() => {
		if (products.length === 0) getProducts(dispatch);
	}, []);

	return (
		<>
			<Navigation />
			<div className='Products m-5 d-flex justify-content-center'>
				<div className='card-grid'>
					{products[0] != null ? (
						products[0].map((product) => (
							<Item product={product} />
						))
					) : (
						<Spinner animation='border' role='status'>
							<span className='sr-only'>Loading...</span>
						</Spinner>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}
