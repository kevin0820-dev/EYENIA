const express = require("express")
const router = express.Router()

module.exports = (client) => {
  const vote = require("../controllers/vote")
  const { create } = vote(client)

  router.post("/", create)

  return router
}