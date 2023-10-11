//load dependencies
import express from "express";
import { createNewStudent } from "../contollers/studentRouteController.js";
import { studentProfilePhotoUpload } from "../utilities/multer.js";

//create student routers
const studentRouter = express.Router();

//make student routes
studentRouter.post("/", studentProfilePhotoUpload, createNewStudent);

export default studentRouter;
