import { Student } from "../models/StudentModel.js";

//this function will create a new student and store it in the Mongodb database
export const createNewStudent = async (req, res) => {
    const photo = req.file.filename;
    const data = await Student.create({ ...req.body, photo });

    await res.status(201).json({
        status: "201",
        message: "Student created successfully",
        data,
    });
};
