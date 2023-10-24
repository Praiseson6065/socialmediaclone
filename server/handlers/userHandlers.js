const User = require('../models/user')



const CreateUser =(req,res) =>{
    User.create(req.body);
    res.send({"msg" : "Created "});
}



const checkUsername = async (req,res) =>{
  let username = req.body.username;
  const user = await User.find({ username : username});
  const isAvailable = !(user!==null && user.length>0);
  return res.send({ isAvailable});

};



module.exports = {CreateUser,checkUsername};

