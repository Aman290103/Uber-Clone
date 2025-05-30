const captainModel = require('../models/captain.model');

module.exports.createCaptain = async({
      firstname, lastname, email, password, color, plate, capacity, vehicleType, phoneNumber
}) => {
      if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType || !phoneNumber){
            throw new Error('All fields are required');
      }

      const captain = captainModel.create({
            fullname: {
                  firstname,
                  lastname
            },
            email,
            password,
            phoneNumber,
            vehicle:{
                  color,
                  plate,
                  capacity,
                  vehicleType
            }
      });

      return captain;
}