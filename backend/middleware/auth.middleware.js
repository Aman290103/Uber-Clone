const jwt = require('jsonwebtoken');
const BlacklistToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');
const userModel = require('../models/user.model');

module.exports.authCaptain = async (req, res, next) => {
   
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[ 1 ] ;
        
        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }
        
        // Check if token is blacklisted
        const isBlacklisted = await BlacklistToken.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Token is invalid' });
        }

        try{
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const captain = await captainModel.findById(decoded._id);

        req.captain=captain;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed', });
    }
};

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization.split(' ')[ 1 ];

        if (!token) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        // Check if token is blacklisted
        const isBlacklisted = await BlacklistToken.findOne({ token });
        if (isBlacklisted) {
            return res.status(401).json({ message: 'Token is invalid' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find user
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Attach user to request
        req.user = user;
        req.token = token;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Authentication failed', error: error.message });
    }
};
