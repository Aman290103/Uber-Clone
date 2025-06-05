const userModel = require('../models/user.model');


module.exports.createUser = async({
      firstname,lastname,email,password
})=>{
      if(!email || !password){
            throw new Error('Email and password are required');
      }

      try {
            const user = await userModel.create({
                  fullname: {
                        firstname: firstname || "",
                        lastname: lastname || ""
                  },
                  email,
                  password
            });
            
            return user;
      } catch (error) {
            console.error("Error creating user:", error);
            throw new Error(`Failed to create user: ${error.message}`);
      }
}