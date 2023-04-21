const jwt = require("jsonwebtoken")

module.exports = (client) => {
  const verify = async (req, res) => {
    try {
      const { otp } = req.body
      if (!otp) {
        res.status(400).json({ message: "No code was found" })
      }

      const user = await client.users.findMany({ where: { otp } }, { take: 1 })

      if (user.length === 0) {
        return res.status(409).send("User not found")
      }

      const updatedUser = await client.users.update({
        where: {
          id: user[0].id,
        },
        data: {
          otp: null,
        },
      })

      const token = jwt.sign({ id: updatedUser.id.toString() }, process.env.TOKEN_SECRET, { expiresIn: "2h" })

      res.status(200).json({ message: "Successfully verified.", ...updatedUser, token })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const update = async (req, res) => {
    try {
      const body = req.body
      if (req.file) {
        body.avatar = req.file.location
      }
      const user = await client.users.create({
        data: {
          ...body,
          ...(body.date_of_birth !== undefined && { date_of_birth: new Date(body.date_of_birth) }),
          ...(body.agree !== undefined && { agree: body.agree !== "" ? true : false }),
          ...(body.interests !== undefined && {
            interests: {
              create: body.interests,
            },
          }),
        },
      })

      const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: "2h" })

      res.status(200).json({ token })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Sorry, something went wrong", err })
    }
  }

  const show = async (req, res) => {
    try {
      const accessToken = req.headers["x-access-token"]
      const decode = jwt.verify(accessToken, process.env.TOKEN_SECRET)

      const user = await client.users.findUnique({
        where: { id: decode.id },
      })

      res.status(200).json({ user })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Sorry, something went wrong", err })
    }
  }

  return { update, verify, show }
}
