const express = require("express");

const PORT = process.env.SERVER_PORT || 5000;

const server = express();

server.get("/", (request, response) => {
    response
        .status(200)
        .json({});
});

//TODO: Add error handling for catch all
server.all("*", () => {});

server.listen(PORT, () => {
    console.log(`Server is running and listening on port: ${PORT}`);
});