import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import ItemDetails from './ItemDetails';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import Login from './Login';
import Register from './Register';

// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { setIsAuthenticated } from '../actions/auth-actions';

const Main = () => {
	const isAuthenticated = useSelector(
		(state) => state.isAuthenticated
	);
	const dispatch = useDispatch();

	const isAuth = async () => {
		try {
			const response = await fetch('/auth/is-verified', {
				method: 'GET',
				headers: { token: localStorage.token },
			});

			const parseResponse = await response.json();

			parseResponse === true
				? setIsAuthenticated(dispatch, true)
				: setIsAuthenticated(dispatch, false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		isAuth();
	}, []);

	return (
		<Switch>
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/about' component={About}></Route>
			<Route
				exact
				path='/products'
				component={Products}
			></Route>
			<Route
				exact
				path='/products/:id'
				component={ItemDetails}
			></Route>
			<Route
				exact
				path='/login'
				render={(props) =>
					isAuthenticated === false ? (
						<Login {...props} />
					) : (
						<Redirect to='/' />
					)
				}
			/>
			<Route
				exact
				path='/register'
				component={Register}
			></Route>
			<Route exact path='/cart' component={Cart} />
			<Route path='*' component={ErrorPage} />
		</Switch>
	);
};

export default Main;
