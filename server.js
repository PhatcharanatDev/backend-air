const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const controller = require("./app/controllers/place.controller");

// Example Data
const run = async () => {
  const tut1 = await controller.create({
    code: "2001101",
    name: "อาคาร 20 | ชั้น 1 | ห้อง 101",
  });
  const tut2 = await controller.create({
    code: "2002201",
    name: "อาคาร 20 | ชั้น 2 | ห้อง 201",
  });
  const tut3 = await controller.create({
    code: "2002202",
    name: "อาคาร 20 | ชั้น 2 | ห้อง 202",
  });
  const tut4 = await controller.create({
    code: "2002203",
    name: "อาคาร 20 | ชั้น 2 | ห้อง 203",
  });
};

const db = require("./app/models");
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Drop and re-sync db.");
    run();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

require("./app/routes/air.routes.js")(app);
require("./app/routes/checklist.routes.js")(app);
require("./app/routes/place.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
