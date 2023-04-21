const { message } = require("../lib/twillio")

module.exports = (client) => {
  const create = async (req, res) => {
    try {
      const { senderId, receiverId, text } = req.body
      await client.message.create({
        data: {
          senderId,
          receiverId,
          text
        }
      })

      res.status(200).json({ message: "Message sent successfully" })
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong" })
    }
  }

  const show = async (req, res) => {
    try {
      const messages = await client.message.findMany({
        where: {
          receiverId: req.user.id
        }
      })

      res.status(200).json({ messages })
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong" })
    }
  }

  const update = async (req, res) => {
    try {
      const updatedMessage = await client.message.update({
        where: {
          id: req.params.id
        },
        data: {
          is_read: true
        }
      })

      res.status(200).json({ message: "Message updated successfully", data: updatedMessage})
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong" })
    }
  }

  const remove = async (req, res) => {
    try {
      await client.message.delete({
        where: {
          id: req.params.id
        }
      })

      res.status(200).json({ message: "Message removed successfully" })
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong" })
    }
  }

  return { create, show, update, remove }
}