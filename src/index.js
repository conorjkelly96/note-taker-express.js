const express = require("express");
const path = require("path");
const { Router } = require("express");
const routes = require("./routes");
// const apiRoutes = require("./routes/apiRoutes");
// const viewRoutes = require("./routes/viewRoutes");

const PORT = process.env.PORT || 3000;

const app = express();

const router = Router();

// router.use("/api", apiRoutes);
// router.use("/", viewRoutes);

// healthcheck routing to check all services are running
app.get("/healthcheck", (req, res) => {
  res.json({ message: "All working fine!" });
});

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.use(routes);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
