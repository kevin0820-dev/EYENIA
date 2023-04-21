const express = require("express");
const router = express.Router();

module.exports = (client) => {
  const interest = require("../controllers/interests");
  const { getDeviceInfo } = interest(client);

  router.get("/:imei", getDeviceInfo);

  return router;
};
