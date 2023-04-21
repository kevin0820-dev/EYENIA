module.exports = (client, router) => {
  const upload = require("./../lib/s3")
  const profile = require("../controllers/profile")
  const { update, verify, show  } = profile(client)

  router.post("/login-verify", verify)
  router.put("/", upload.single("avatar"), update)
  router.get("/", show)

  return router;
}
