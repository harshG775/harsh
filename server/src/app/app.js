import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import userAuthRouter from "../routes/userAuth.router.js";
import homePageRouter from "../routes/CMS/home.router.js";
// import verifyToken from "../middlewares/verifyAccessToken.js";
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// custom middlewares
// app.use(verifyToken);

/* routers */
// auth
app.use("/api/v1/auth", userAuthRouter);

// cms
app.use("/api/v1/cms/home", homePageRouter);

export default app;
