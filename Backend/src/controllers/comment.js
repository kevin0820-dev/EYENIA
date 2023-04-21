module.exports = (client) => {
  const create = async (req, res) => {
    try {
      const { content, experienceId, userId} = req.body

      await client.comment.create({
        data: {
          content,
          experienceId,
          userId
        },
      })

      res.status(200).json({ message: "Comment created successfully!" })
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const showByExperience = async (req, res) => {
    try {
      const comments = await client.comment.findMany({
        where: {
          experienceId: req.params.id,
        },
      })

      res.status(200).json({ comments })
    } catch(err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  return { create, showByExperience }
}