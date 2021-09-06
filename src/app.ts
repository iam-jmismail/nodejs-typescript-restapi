import express, { Application } from "express";
import routes from "./routes";
import dotenv from "dotenv";

const app: Application = express();
const PORT: number = 3000;
dotenv.config();

// Middleware
app.use(express.json());

// Routes
app.use("/", routes);

app.listen(PORT, () => console.log(`Sever running on PORT ${PORT}`));
