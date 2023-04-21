module.exports = (client) => {
  const create = async (req, res) => {
    try {
      const { commentId, userId } = req.body

      await client.save.create({
        data: {
          commentId,
          userId    
        },
      })

      res.status(200).json({ message: "Saved successfully" })
    } catch(err) {
      console.log(err)

      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  return { create }
}