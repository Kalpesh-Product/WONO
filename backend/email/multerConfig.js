// multerConfig.js
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configure multer to save files locally
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = './uploads';

        // Check if the 'uploads' directory exists, if not, create it
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath); // Local folder where files will be saved
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Save file with a timestamp
    }
});

const upload = multer({ storage });

module.exports = { upload };