const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const BlacklistToken = require('../models/blacklistToken.model');
const { validationResult } = require('express-validator');


module.exports.registerUser = async (req,res,next)=>{
      try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                  return res.status(400).json({errors: errors.array() });
            }

            console.log("Request body:", req.body);
            
            const{fullname, email, password} = req.body;
            
            if (!fullname || !fullname.firstname) {
                  return res.status(400).json({message: 'First name is required'});
            }

            if (!email) {
                  return res.status(400).json({message: 'Email is required'});
            }

            const hashedPassword = await userModel.hashPassword(password);

            const isUserAlreadyExist = await userModel.findOne({email});

            if(isUserAlreadyExist){
                  return res.status(400).json({message: 'User already exists'});
            }
            
            const user = await userService.createUser({
                  firstname: fullname.firstname,
                  lastname: fullname.lastname ,
                  email,
                  password: hashedPassword
            });

            const token = user.generateAuthToken();

            res.status(200).json({ token, user});
      } catch (error) {
            console.error("Registration error:", error);
            res.status(500).json({message: 'Registration failed', error: error.message});
      }
}

module.exports.loginUser = async (req, res, next)=>{
      const {email, password} = req.body;

      const user = await userModel.findOne({email}).select('+password');

      if(!user){
            return res.status(401).json({message: 'Invalid email or password'});
      }

      const isMatch = await user.comparePassword(password);

      if(!isMatch){
            return res.status(401).json({message: 'Invalid email or password'});
      }

      const token = user.generateAuthToken();

      res.cookie('token',token);

      res.status(200).json({ token, user});

}

module.exports.getUserProfile = async(req, res, next)=>{
      const user = await userModel.findById(req.user._id);

      res.status(200).json({ user});
}

module.exports.logoutUser = async(req, res, next)=>{
       res.clearCookie('token')
            // Get token from request
            const token = req.cookies.token ||  req.headers.authorization.split(' ')[1];
            
            
                  // Add token to blacklist
                  await BlacklistToken.create({ token });
                  
                 
            
            
            res.status(200).json({ message: 'Logged out successfully' });
        
            
}