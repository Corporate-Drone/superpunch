const express = require('express');
const router = express.Router({ mergeParams: true }); //access route params

const shopControllers = require('../controllers/shop-controllers')

router.get('/', shopControllers.getProducts);
router.get('/:id', shopControllers.getProduct);

module.exports = router;