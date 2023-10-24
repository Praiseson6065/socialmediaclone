const express = require("express");
const connectDB = require("./database/database.js");
const SetupRoutes = require("./routes/routes.js");
const socketio = require("socket.io");
const http = require("http");
const SetupSockets = require("./sockets/sockets.js");
const User = require("./models/user.js");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const PORT = 5000;
connectDB();
SetupRoutes(app);
// SetupSockets(io);

// server.listen(PORT, () => {
//   console.log("Server Running on :", PORT);
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
