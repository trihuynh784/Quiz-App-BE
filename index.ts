import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import * as database from "./config/database";
import clientRoute from "./routes/client/index.route";

dotenv.config();

const app: Express = express();
const port: number | string = process.env.PORT || 3000;

// Connect to database
database.connect();

// Body Parser
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

// CORS
app.use(cors());

// Routes
clientRoute(app);

app.listen(port, () => {
  console.log("App listen on port", port);
});
