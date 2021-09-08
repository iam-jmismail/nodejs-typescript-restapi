import express, { Application } from "express";
import routes from "./routes";
import dotenv from "dotenv";

import db from "./models/index";
dotenv.config();

const app: Application = express();
const PORT: number = 3000;

// Connect to Database
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err:Error) => {
    console.log("Database Connection Error:", err);
  });

// Middleware
app.use(express.json());

// Routes
app.use("/", routes);

app.listen(PORT, () => console.log(`Sever running on PORT ${PORT}`));
