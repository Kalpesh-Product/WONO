// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         const uploadPath = path.join(__dirname, '..', 'tmp');

        
//         if (!fs.existsSync(uploadPath)) {
//             fs.mkdirSync(uploadPath, { recursive: true });
//         }

//         cb(null, uploadPath); 
//     },
//     filename: function (req, file, cb) {
      
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         cb(null, uniqueSuffix + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage });

// module.exports = { upload };



const multer = require('multer');

// Configure multer for file uploads (without local storage)
const upload = multer({
    storage: multer.memoryStorage(), // Store in memory instead
});

module.exports = { upload };

