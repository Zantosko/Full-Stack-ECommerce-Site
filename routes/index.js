const router = require('express').Router();
const authorization = require('../middleware/authorization');
const { User, Profile } = require('../models');

router.get('/', authorization, async (req, res) => {
	const user = await User.findOne({
		where: {
			id: req.user,
		},
	});

	res.json(user);
});
