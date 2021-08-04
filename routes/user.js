const router = require('express').Router();
const authorization = require('../middleware/authorization');
const { Cart } = require('../models');

router.post('/add-item', async (req, res) => {
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

	res.send('true');
});

router.get('/add-item', authorization, async (req, res) => {
	const items = await Cart.findAll({
		where: {
			userId: req.user,
		},
	});

	res.json(items);
});

router.delete(
	'/remove-item',
	authorization,
	async (req, res) => {
		const { id } = req.body;

		await Cart.destroy({
			where: {
				id,
			},
		});

		const items = await Cart.findAll({
			where: {
				userId: req.user,
			},
		});

		res.json(items);
	}
);

router.delete(
	'/clear-cart',
	authorization,
	async (req, res) => {
		await Cart.destroy({
			where: {
				userId: req.user,
			},
		});

		const items = await Cart.findAll({
			where: {
				userId: req.user,
			},
		});

		res.json(items);
	}
);

module.exports = router;
