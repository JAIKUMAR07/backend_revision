const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.getIndex);
router.get('/homes', storeController.getHomes);
router.get('/bookings', storeController.getBookings);
router.get('/favourites', storeController.getFavouriteList);

module.exports = router;  // Export the router directly, not as an object
