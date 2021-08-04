const router = require('express').Router();
const { User, Cart } = require('../models');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const validInfo = require('../middleware/validInfo');
const authorization = require('../middleware/authorization');

//* Register Route
router.post('/register', validInfo, async (req, res) => {
	try {
		// Destructure request body
		const {
			firstName,
			lastName,
			email,
			password,
			rePassword,

			userId,
		} = req.body;

		// Check if email already exists in DB
		const user = await User.findAll({
			where: {
				email: email,
			},
		});

		if (user.length > 0) {
			return res
				.status(401)
				.json('That email has already been used');
		}

		// Bcrypt the password and re-typed password
		const saltRound = 10;
		const salt = await bcrypt.genSalt(saltRound);

		const [bcryptPassword, bcryptRePassword] =
			await Promise.all([
				bcrypt.hash(password, salt),
				bcrypt.hash(rePassword, salt),
			]);

		const newUser = await User.create({
			firstName,
			lastName,
			email,
			password: bcryptPassword,
			rePassword: bcryptRePassword,
		});

		// Generate JWT token
		const token = jwtGenerator(newUser.id);

		res.json({ token });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//* Login Route
router.post('/login', validInfo, async (req, res) => {
	try {
		// Destructure request body
		const { email, password } = req.body;

		// Check if user doesn't exists
		const user = await User.findAll({
			where: {
				email: email,
			},
		});

		if (user.length === 0) {
			return res
				.status(401)
				.json('Password or Email is incorrect');
		}

		// Check if incoming password is the same as the DB password
		const validPassword = await bcrypt.compare(
			password,
			user[0].password
		);

		if (!validPassword) {
			return res
				.status(401)
				.json('Password or Email is incorrect');
		}

		// Return user a JWT token
		const token = jwtGenerator(user[0].id);

		res.json({ token });
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.get(
	'/is-verified',
	authorization,
	async (req, res) => {
		try {
			res.json(true);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

module.exports = router;
