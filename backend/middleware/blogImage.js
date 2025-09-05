
const multer = require("multer")

const storeImage = multer.diskStorage({
    destination: (rq,file,cb) => {
     cb(null, "document")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const blogImage = multer({
    storage: storeImage
})

module.exports = blogImage

