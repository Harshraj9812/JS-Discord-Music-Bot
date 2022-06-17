const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Bot is Running !")
})
const port = process.env.PORT || 3000;
function keepAlive() {
  server.listen(port, () => {
    console.log("Server is Ready .")
  })
}

module.exports = keepAlive