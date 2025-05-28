const userModel = require('../models/user.model');
const BlacklistToken = require('../models/blacklistToken.model');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req,res,next) => {
      const token = req.cookies?.token || (req.headers.authorization ? req.headers.authorization.split(' ')[ 1 ] : null);
      if(!token){
            return res.status(401).json({message: 'Unauthorized'});
      }

      

      try{
            // Check if token is blacklisted
            const blacklistedToken = await BlacklistToken.findOne({ token });
            if (blacklistedToken) {
                  return res.status(401).json({message: 'Token revoked'});
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await userModel.findById(decoded._id)
            if(!user){
                  return res.status(401).json({message: 'Unauthorized'});
            }
            req.user = user;
            req.token = token; // Store token for logout functionality
            return next();

      }
      catch(err){
            return res.status(401).json({message: 'Unauthorized'});
      }
}