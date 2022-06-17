const express = require("express");

const server = express()

server.get("/", (req, res) => {
  res.send("Bot is Running !");
});

// Added for Vercel Deployment for Serverless functions
server.listen(5000, () => {
  console.log("Running on Port 5000.");
});

// const port = process.env.PORT || 3000;
// function keepAlive() {
//   server.listen(port, () => {
//     console.log("Server is Ready .")
//   })
// }

module.exports = keepAlive;