const multer = require('multer');
const path = require('path');

const storagePostsImage = multer.diskStorage({
    // Configuración de destino: dónde se almacenarán los archivos
    destination: function (req, file, callback) {
        callback(null, 'public/images/Posts'); // Directorio para almacenar imágenes de productos
    },
    // Configuración de nombre de archivo
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_post_${path.extname(file.originalname)}`);
        // El nombre del archivo se genera utilizando la marca de tiempo para evitar conflictos y conserva la extensión original del archivo
    }
});

const configUploadPostImage = multer({
    storage: storagePostsImage, // Configuración de almacenamiento de imágenes de productos
    fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
            req.fileValidationError = "Solo se permite imágenes";
            return cb(null, false, req.fileValidationError);
        }
        cb(null, true);
        // Filtrar los tipos de archivo permitidos: jpg, jpeg, png, gif, webp
    },
}).fields([{ name: "imageOne", maxCount: 1 },{ name: "imageTwo", maxCount: 1 },{ name: "imageThree", maxCount: 1 }]);
// Se definen tres campos de carga: "imageOne", "imageTwo" y "imageThree", todos con un máximo de 1 imagen

const uploadPostsImage = (req, res, next) => {
    const upload = configUploadPostImage; // Usar el nombre correcto del middleware

    upload(req, res, function (error) {
        if (error) {
            req.fileValidationError = "Error en la carga de imágenes";
        }
        next(); // Pasar al siguiente middleware después de manejar la carga de imágenes
    });
};

module.exports = {
    uploadPostsImage
};
