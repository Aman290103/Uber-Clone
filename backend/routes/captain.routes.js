const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/register',[
      body('fullname.firstname').notEmpty().withMessage('First name is required'),
      body('fullname.lastname').notEmpty().withMessage('Last name is required'),
      body('email').isEmail().withMessage('Invalid email format'),
      body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
      body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
      body('vehicle.plate').notEmpty().withMessage('Vehicle number is required'),
      body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 characters long'),
      body('phoneNumber').notEmpty().isLength({min:10}).withMessage('Phone number is required'),
      body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
], 
      captainController.registerCaptain
);

router.post('/login',[
      body('email').isEmail().withMessage('Invalid Email'),
      body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],
      captainController.loginCaptain
);

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;