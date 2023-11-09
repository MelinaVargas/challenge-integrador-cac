const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");

app.use(express.static("public"));

app.use("/", mainRoutes);
app.use("/", shopRoutes);

app.listen(4000, () =>
  console.log("Servidor corriendo en http://localhost:4000")
);
