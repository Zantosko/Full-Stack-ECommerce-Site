import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import ItemDetails from './ItemDetails';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import Login from './Login';

const Main = () => {
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
			<Route exact path='/login' component={Login}></Route>
			<Route exact path='/cart' component={Cart}></Route>
			<Route path='/' component={ErrorPage}></Route>
		</Switch>
	);
};

export default Main;
