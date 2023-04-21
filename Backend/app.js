require("dotenv").config()

// const dbConfig = require('./config/database')
// const mongoose = require('mongoose')
// mongoose.connect(dbConfig.url);

module.exports = async (client) => {
  const authMiddleware = require("./src/middleware/auth")
  const express = require("express")
  const cors = require("cors")
  const helmet = require("helmet")
  const morgan = require("morgan")
  const app = express()
  const router = express.Router()

  await client.$connect()

  app.use(helmet())
  app.use(cors())
  app.use(morgan("dev"))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  const auth = require("./src/routes/auth")(client, router)
  app.use("/auth", auth)

  const privateRoutes = require('./src/routes')(client)
  app.use("/api", authMiddleware, privateRoutes)

  app.get("/ping", async (req, res) => {
    res.send("pong")
  })

  return app
}
