const router = require('express').Router();
const authorization = require('../middleware/authorization');
const { Cart } = require('../models');

router.post('/add-item', async (req, res) => {
	console.log(req.body);
	const {
		category,
		description,
		apiNum,
		image,
		price,
		title,
		userId,
	} = req.body;

	const newCart = await Cart.create({
		category,
		description,
		apiNum,
		image,
		price,
		title,
		userId,
	});
});

module.exports = router;
