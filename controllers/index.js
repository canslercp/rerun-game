const router = require("express").Router();
const apiRoutes = require("./api");
const gameRoutes = require("./api/gameRoutes");

router.use("/api", apiRoutes);
router.use("/game", gameRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
