module.exports = function (req, res, next) {
	const {
		firstName,
		lastName,
		email,
		password,
		rePassword,
	} = req.body;

	function validEmail(userEmail) {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
			userEmail
		);
	}

	if (req.path === '/register') {
		if (
			![
				firstName,
				lastName,
				email,
				password,
				rePassword,
			].every(Boolean)
		) {
			return res.status(401).json('Missing Credentials');
		} else if (!validEmail(email)) {
			return res.status(401).json('Invalid Email');
		} else if (password !== rePassword) {
			return res.status(401).json('Passwords Do Not Match');
		}
	} else if (req.path === '/login') {
		if (![email, password].every(Boolean)) {
			return res.status(401).json('Missing Credentials');
		}
	}

	next();
};
