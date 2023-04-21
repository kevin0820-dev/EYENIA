const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { ConnectAppInstance } = require("twilio/lib/rest/api/v2010/account/connectApp")
const { message } = require("../lib/twillio")

module.exports = (client) => {
  const login = async (req, res) => {
    try {
      const { email, password } = req.body
      if (!(email && password)) {
        res.status(400).send("All input required")
      }
      
      const user = await client.users.findUnique({ where: { email } })

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user.id.toString() }, process.env.TOKEN_SECRET, { expiresIn: "2h" })
        req.user = user;

        res.status(200).json({ token })
      } else {
        res.status(400).json({ message: "Invalid Credentials" })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const signup = async (req, res) => {
    try {
      const { email, password } = req.body
      if (!(email && password)) {
        res.status(400).json({ message: "All Input is required" })
      }

      const body = req.body
      if (req.file) {
        body.avatar = req.file.location
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10)

      const user = await client.users.create({
        data: {
          ...body,
          ...(body.date_of_birth !== undefined && { date_of_birth: new Date(body.date_of_birth) }),
          ...(body.agree !== undefined && { agree: body.agree !== "" ? true : false }),
          ...(body.interests !== undefined && {
            interests: {
              create: body.interests,
            },
            password: hashedPassword,
          }),
        },
      })

      const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, { expiresIn: "2h" })

      res.status(200).json({ token })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const verify = async (req, res) => {
    try {
      const { email, password } = req.body

      const oldUser = await client.users.findUnique({ where: { email } })

      if (oldUser) {
        return res.status(409).send("User already exist.")
      }

      res.status(200).json({ message: "Account is available." })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const preSignup = async (req, res) => {
    try {
      const { phone } = req.body
      if (!phone) {
        res.status(400).json({ message: "Phone number is required" })
      }

      const otp = Math.floor(1000 + Math.random() * 9000).toString()
      const otpResponse = await message(otp, "+639051860378")

      if (!otpResponse) {
        res.status(403).json({ message: "Sorry Something went wrong" })
      }

      const token = jwt.sign({ otp, phone }, process.env.TOKEN_SECRET, { expiresIn: "2h" })

      res.status(200).json({ token })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const verifyPreSignup = async (req, res) => {
    try {
      const { token } = req.query
      const { otp: otpPOST } = req.body
      if (!otpPOST) {
        res.status(400).json({ message: "No code was found" })
      }

      const { otp, phone } = jwt.verify(token, process.env.TOKEN_SECRET, { algorithm: "HS56" })

      if (otp !== otp.toString()) {
        res.status(401).json({ message: "OTP is invalid" })
      }

      const user = await client.users.create({ data: { phone, otp: "" } })
      const newToken = jwt.sign({ otp, phone, id: user.id }, process.env.TOKEN_SECRET, { expiresIn: "2h" })

      res.status(200).json({ message: "Successfully verified.", token: newToken })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const validateToken = async(req, res) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token || token === null || token === undefined) {
      return res.status(403).send("A token is required for authentication")
    }

    try {
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET)
      req.user = decoded
      res.status(200).send("Token Valid")
    } catch (err) {
      res.status(401).send("Invalid Token")
    }
  }

  const getUsers = async (req, res) => {
    try {
      const users = await client.users.findMany({
        where: {
          username: {
            contains: req.params.filter
          }
        }
      })

      res.status(200).send({ data: users })
    } catch (err) {
      console.log(err)
      res.status(400).send({ message: "Something went wrong" })
    }
  }

  return { login, signup, verify, preSignup, verifyPreSignup, validateToken, getUsers }
}
