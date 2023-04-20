const express = require("express")
const router = express.Router()

module.exports = (client) => {
  const notification = require("../controllers/notification")
  const { create, update, showAll } = notification(client)

  router.post("/", create)
  router.put("/:id", update)
  router.get("/", showAll)

  return router
}