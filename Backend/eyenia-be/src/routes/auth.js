module.exports = (client, router) => {
  const auth = require("../controllers/users")
  const { login, signup, verify, preSignup, verifyPreSignup, validateToken, getUsers } = auth(client)

  router.post("/login", login)
  router.post("/signup", signup)
  router.post("/pre-signup", preSignup)
  router.post("/verify-pre-signup", verifyPreSignup)
  router.post("/verify", verify)
  router.post("/validate-token", validateToken )
  router.get("/:filter", getUsers)

  return router
}
