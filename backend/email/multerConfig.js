const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configure multer to save files locally
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, '..', 'tmp'); // Ensure proper folder structure

        // Check if the 'uploads' directory exists, if not, create it
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath); // Local folder where files will be saved
    },
    filename: function (req, file, cb) {
        // Save file with a timestamp and original extension
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

module.exports = { upload };
