import express, { Request, Response } from "express";
import cookieSession from "cookie-session";
import bodyParser from "body-parser";
import "./controllers/LoginController";
import "./controllers/RootController";
import { AppRouter } from "./AppRouter";

// ES5 codes
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["himarco"] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
