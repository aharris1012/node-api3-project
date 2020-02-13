const express = require("express");
const userRouter = require("./users/userRouter");
const server = express();

const logger =(req,res, next) =>{
console.log (`${req.method } to ${req.path}`);
next();
}
server.use(logger);

server.use(express.json());



server.use("/api/users", userRouter);


server.get("/", (req, res) =>{
res.send("hello you reached the server");
})
module.exports = server;