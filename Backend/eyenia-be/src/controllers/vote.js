module.exports = (client) => {
  const create = async (req, res) => {
    try {
      const { experienceId, userId } = req.body
      await client.vote.create({
        data: {
          experienceId,
          userId
        },
      })

      res.status(200).json({ message: "Voted successfully" })
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  return { create }
}