const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req,res,next) =>{

      
      const {fullname , email, password, vehicle , phoneNumber} = req.body;
     
      const errors = validationResult(req);
      if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array() })
      }
      const isCaptainAlreadyRegistered = await captainModel.findOne({email});

      if(isCaptainAlreadyRegistered){
            return res.status(400).json({message: 'Captain already registered'});
      }     

      const hashedPassword = await captainModel.hashPassword(password);

      const captain = await captainService.createCaptain({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password: hashedPassword,
            phoneNumber,
            color:vehicle.color,
            plate:vehicle.plate,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType,
            
      });

      const token = captain.generateAuthToken();

      res.status(201).json({token, captain});

}

module.exports.loginCaptain = async (req, res, next)=>{
      const {email, password} = req.body;

      const captain = await captainModel.findOne({email}).select('+password');
     
      if(!captain){
            return res.status(401).json({message: 'Invalid email or password'});
      }

      const isMatch = await captain.comparePassword(password);

      if(!isMatch){
            return res.status(401).json({message: 'Invalid email or password'});
      }

      const token = captain.generateAuthToken();

      res.cookie('token',token);

      res.status(200).json({ token, captain});

}

module.exports.getCaptainProfile = async(req, res, next)=>{
    res.status(200).json({ captain: req.captain});
}

module.exports.logoutCaptain = async(req, res, next)=>{
      
            // Get token from request
            const token = req.cookies.token ||  req.headers.authorization?.split(' ')[1];
            
            
                  // Add token to blacklist
                  await BlacklistToken.create({ token });
                  
                  res.clearCookie('token');
            
            
            res.status(200).json({ message: 'Logged out successfully' });

}