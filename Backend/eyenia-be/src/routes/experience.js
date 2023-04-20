const express = require("express")
const router = express.Router()
module.exports = (client) => {
  const expreience = require("../controllers/experience")
  const { create, show, all, createPlan } = expreience(client)

  router.post("/", create)
  router.get("/", show)
  router.get("/:id", all)
  router.post("/plan", createPlan)

  return router
}
 