const express = require("express")
const router = express.Router()
module.exports = (client) => {
  const groupExperience = require("../controllers/groupExperience")
  const { create, update, show, showAll } = groupExperience(client)

  router.post("/", create)
  router.put("/:id", update)
  router.get("/", show)
  router.get("/all", showAll)

  return router
}
