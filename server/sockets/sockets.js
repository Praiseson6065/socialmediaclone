const { checkUsername } = require("../handlers/userHandlers");
const User = require("../models/user");

const SetupSockets = (io) => {

  io.on("connection", (socket) => {
    socket.on("checkusername", async  (data) => {
      const { username } = data;
      let userStatus = false;
      
        const user = await checkUsername(username);
        console.log(user)
        user !==null ? userStatus =true : userStatus = false ;
      
      // try {
      //   const user = await checkUsername(username);
      //   console.log(user);
      //   socket.emit("usernameCheckResult", { user });
      // } catch (error) {
      //   console.error(error);
        
      // }
    });
  });
};

module.exports = SetupSockets;  
