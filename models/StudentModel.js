//load dependencies
import mongoose from "mongoose";

//create student data scheema
const studentDataSchema = mongoose.Schema({
    name: {
        type: "String",
        required: true,
        trim: true,
    },
    email: {
        type: "String",
        required: true,
        unique: true,
        trim: true,
    },
    cell: {
        type: "String",
        required: true,
        unique: true,
        trim: true,
    },
    gender: {
        type: "String",
        required: true,
        trim: true,
        enum: ["male", "female"],
    },
    photo: {
        type: "String",
        required: true,
        trim: true,
        default: "avater.png",
    },
    course: {
        type: "String",
        required: true,
        trim: true,
    },
    address: {
        type: "String",
        required: true,
        trim: true,
    },
    fatherName: {
        type: "String",
        trim: true,
    },
    motherName: {
        type: "String",
        trim: true,
    },
    dob: {
        type: "String",
        trim: true,
    },
    about: {
        type: "String",
    },
    status: {
        type: "Boolean",
        default: true,
    },
});

export const Student = mongoose.model("student", studentDataSchema);
