//load dependencies
import express from "express";

//make public Router
const publicRouter = express.Router();

publicRouter.route("/").all((req, res) => {
    res.status(200).json({
        status: "200",
        message: "Application Front Page",
    });
});

export default publicRouter;
