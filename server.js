//load dependencies
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import { _404ErrorHandler, applicationErrorHandler } from "./contollers/errorHandler.js";
import publicRouter from "./routes/publicRouter.js";
import studentRouter from "./routes/studentRouter.js";
import { createConnectionToMongoDB } from "./config/configMongodb.js";
dotenv.config();
//Load environment variables
const PORT = process.env.PORT || 6060;

//initialize express application
const app = express();

//add support middleware
app.use(express.static(path.resolve("public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//<!-- ==========  Start From Here ========== -->//
//use public router
app.use(publicRouter);
//use student router
app.use("/students", studentRouter);
//<!-- ==========  End From Here ========== -->//

//add error handlers
app.use(_404ErrorHandler);
app.use(applicationErrorHandler);
//server listen on port
app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT} `.bgGreen.blue.bold);
    createConnectionToMongoDB();
});
