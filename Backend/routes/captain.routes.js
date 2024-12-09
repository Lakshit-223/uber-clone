const express = require("express");
const router = express.router();
const { body } = require("express-validator");
const captainController = require('../controllers/captain.controller');



router.post("register", [
  body('email').isEmail().withMessage('Invalid email'),
  body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 characters long'),
  body('vehicle.color').isLength({min:3}).withMessage('vehicle color must be at least 3 characters long'),
  body('vehicle.plate').isLength({min:3}).withMessage('vehicle plate must be at least 3 characters long'),
  body('vehicle.capacity').isLength({min:3}).withMessage('vehicle capacity must be at least 3 characters long'),
  body('vehicle.vehicleType').isLength({min:3}).withMessage('vehicle type must be at least 3 characters long'),
],
  captainController.registerCaptain
);

module.exports = router;
