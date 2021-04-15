const MainServer = require('express');
require("./db/connection");
const userRoute = require("./route")
const server = MainServer();



server.use(MainServer.json());
server.use(userRoute);

server.listen("3000", "127.0.0.1", () => 
{
    try {
        console.log("Server is running on 3000");

    } catch (e) {
        console.log("Something went wrong....");
    }
})