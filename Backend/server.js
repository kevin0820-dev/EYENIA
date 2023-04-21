;(async () => {
  const { PrismaClient } = require("@prisma/client")
  const client = new PrismaClient()

  const makeApp = require("./app")
  const app = await makeApp(client)

  app.listen(process.env.PORT, () => {
    console.log("App runs at ", process.env.PORT)
  })
})()
