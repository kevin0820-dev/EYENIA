module.exports = (client) => {
  const create = async (req, res) => {
    try {
      const { senderId, receiverId, type, content} = req.body

      await client.notification.create({
        data: {
          senderId,
          receiverId,
          type,
          content
        },
      })

      res.status(200).json({ message: "Notification created successfully" })
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong" })
    }
  }

  const update = async (req, res) => {
    try {
      const updatedData = await client.notification.update({
        where: {
          id: req.params.id
        },
        data: {
          is_read: true
        }
      })

      res.status(200).json({ message: "Notification updated successfully", data: updatedData })
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong" })
    }
  }

  const showAll = async (req, res) => {
    try {
      const notifications = await client.notification.findMany({})

      res.status(200).json({data: notifications})
    } catch(err) {
      console.log(err)

      res.status(401).json({ message: "Something went wrong" })
    }
  }

  return { create, update, showAll }
}
