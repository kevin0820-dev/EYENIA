module.exports = (client) => {
  const getDeviceInfo = async (req, res) => {
    try {
      const deviceImei = req.params.imei;

      const result = deviceImei;

      res.status(200).send({ data: result });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: "Something went wrong" });
    }
  };

  return { getDeviceInfo };
};
