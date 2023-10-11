import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.fieldname === "photo") {
            cb(null, path.resolve("public/assets/images/studentProfilePhoto"));
        }
    },
    filename: (req, file, cb) => {
        const extname = path.extname(file.originalname);
        let filename =
            file.originalname.replace(extname, "").split(" ").join("_").toLowerCase() +
            "_" +
            Date.now() +
            "_" +
            Math.floor(Math.random() * 1000000) +
            extname;
        cb(null, filename);
    },
});

export const studentProfilePhotoUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/png"
        ) {
            cb(null, true);
        } else {
            cb(Error(`Invalid file type: ${file.mimetype} . Use (JPG,PNG,JPEG)`));
        }
    },
    limits: {
        fileSize: 1024 * 1024, //1 mb
    },
}).single("photo");
