module.exports = (client) => {
  const create = async (req, res) => {
    try {
      const { name, place } = req.body

      const groupExperience = await client.groupexperience.create({
        data: {
          name,
          place,
          users: {
            connect: {
              id: req.user.id,
            },
          },
        },
      })

      res.status(200).json({ message: "Group Experience Saved", groupExperience })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const update = async (req, res) => {
    try {
      const { id, ...experiences } = req.body

      const groupExperience = await client.groupexperience.update({
        where: {
          id: req.params.id,
        },
        data: {
          experiences: {
            create: {
              post: experiences.post,
              name: experiences.name,
              place: experiences.place,
              photos: {
                createMany: {
                  data: experiences.photos,
                },
              },
              markerPosition: {
                create: { ...experiences.markerPosition },
              },
            },
          },
        },
        include: { experiences: true },
      })

      res.status(200).json({ message: "Experiences Updated.", groupExperience })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const show = async (req, res) => {
    try {
      const groupExperiences = await client.groupexperience.findMany({
        where: {
          usersId: req.user.id,
        },
        include: {
          experiences: {
            select: {
              photos: {
                select: {
                  webPath: true,
                },
              },
            },
          },
        },
      })

      res.status(200).json({ groupExperiences })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  const showAll = async (req, res) => {
    try {
      const groupExperiences = await client.groupexperience.findMany({
        include: {
          experiences: {
            select: {
              photos: {
                select: {
                  webPath: true,
                }
              }
            }
          }
        }
      })

      res.status(200).json({ groupExperiences })
    } catch (err) {
      console.log(err)
      res.status(401).json({ message: "Something went wrong", err })
    }
  }

  return { create, update, show, showAll }
}
