import multer from "multer";

const IMAGE_MIME_TYPES = ["image/jpeg", "image/png", "image/webp"];
// max file size = 5MB
const MAX_SIZE = 5 * 1024 * 1024;

const storage = multer.memoryStorage();

// file filtering
const fileFilter = (req, file, cb) => {
  if (IMAGE_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .png, .webp image formats are allowed"));
  }
};

// Multer instance
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_SIZE,
    files: 10,
  },
});

export default upload;
