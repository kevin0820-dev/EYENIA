const routers = require("express").Router();

module.exports = (client) => {
  // const profileRoutes = require("./profile")(client, router)
  const experienceRoutes = require("./experience")(client);
  const groupExperienceRoutes = require("./groupExperience")(client);
  const voteRoutes = require("./vote")(client);
  const commentRoutes = require("./comment")(client);
  const saveRoutes = require("./save")(client);
  const notificationRoutes = require("./notification")(client);
  const messageRoutes = require("./message")(client);
  const interestRoutes = require("./interests")(client);
  const teltonikaRoutes = require("./teltonika")(client);

  routers.use("/experience", experienceRoutes);
  routers.use("/group-experience", groupExperienceRoutes);
  routers.use("/vote", voteRoutes);
  routers.use("/comment", commentRoutes);
  routers.use("/save", saveRoutes);
  routers.use("/notification", notificationRoutes);
  routers.use("/message", messageRoutes);
  routers.use("/interest", interestRoutes);
  routers.use("/teltonika", teltonikaRoutes);

  return routers;
};
