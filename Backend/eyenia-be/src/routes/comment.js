const express = require("express")
const router = express.Router()

module.exports = (client) => {
  const comment = require("../controllers/comment")
  const { create, showByExperience } = comment(client)

  router.post("/", create)
  router.get("/:id", showByExperience)

  return router
}