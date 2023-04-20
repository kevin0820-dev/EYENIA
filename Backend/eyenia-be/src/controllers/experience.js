module.exports = (client) => {
  const create = async (req, res) => {
    try {
      const { place, experience, name, photos, markerPosition, post, quickTips } = req.body

      const newExperience = await client.experience.create({
        data: {
          place,
          experience,
          name,
          photos: { create: photos },
          markerPosition: {
            create: {
              // lat: markerPosition.lat,
              // lng: markerPosition.lng,
              // ...experience.markerPosition
            },
          },
          post,
          users: {
            connect: {
              id: req.user.id,
            },
          },
          quickTips: { create: quickTips },
        },
      })

      res.status(200).json({ message: "Experience Saved", id: newExperience.id })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const createPlan = async (req, res) => {
    try {
      const { place, experience, name, photos, markerPosition, post, quickTips } = req.body

      const newExperience = await client.experience.create({
        data: {
          place,
          experience,
          name,
          photos: { create: photos },
          markerPosition: {
            create: {
              // lat: markerPosition.lat,
              // lng: markerPosition.lng,
              // ...experience.markerPosition
            },
          },
          post,
          users: {
            connect: {
              id: req.user.id,
            },
          },
          quickTips: { create: quickTips },
          type: true,
        },
      })

      res.status(200).json({ message: "Experience Saved" })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const show = async (req, res) => {
    try {
      const experiences = await client.experience.findMany({
        where: {
          usersId: req.user.id,
        },
        include: {
          photos: true,
        },
      })

      res.status(200).json({ experiences })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const all = async (req, res) => {
    try {
      const experiences = await client.experience.findMany({
        where: {
          groupexperienceId: req.params.id,
          groupexperience: {
            usersId: req.user.id,
          },
        },
        include: {
          photos: true,
          markerPosition: true,
        },
      })

      res.status(200).json({ experiences })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  return { create, show, all, createPlan }
}
