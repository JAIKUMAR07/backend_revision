const express = require("express");
const router = express.Router();
const hostController = require("../controllers/hostController");

router.get("/add-home", hostController.getAddHome);
router.post("/add-home", hostController.postAddHome);
router.get("/host-home-list", hostController.getHostHomes);

module.exports = router; // Export the router directly, not as an object
