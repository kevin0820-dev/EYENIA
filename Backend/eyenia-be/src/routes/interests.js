const express = require("express")
const router = express.Router()

module.exports = (client) => {
  const interest = require("../controllers/interests")
  const { getInterests } = interest(client)

  router.get("/:filter", getInterests)

  return router
}