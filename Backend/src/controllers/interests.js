module.exports = (client) => {
  const getInterests = async (req,res) => {
    try {
      const filteredInterests = await client.interests.findMany({
        where: {
          name: {
            contains: req.params.filter
          }
        }
      })

      const result = filteredInterests.filter((element, index, arr) => index === arr.findIndex((t) => (t.name === element.name)))

      res.status(200).send({ data: result })
    } catch(err) {
      console.log(err)
      res.status(400).send({ message: "Something went wrong" })
    }
  }

  return { getInterests }
}