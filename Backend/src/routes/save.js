const express = require("express")
const router = express.Router()

module.exports = (client) => {
  const save = require("../controllers/save")
  const { create } = save(client)

  router.post("/", create)

  return router
}