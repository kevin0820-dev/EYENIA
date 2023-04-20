const express = require("express")
const router = express.Router()

module.exports = (client) => {
  const message = require("../controllers/message")
  const { create, show, update, remove } = message(client)

  router.post("/", create)
  router.get("/", show)
  router.put("/:id", update)
  router.delete("/:id", remove)

  return router
}