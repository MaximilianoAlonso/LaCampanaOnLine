
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/userImage'); // Ruta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
      const nameImage = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + nameImage + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });
  
  module.exports = { upload };