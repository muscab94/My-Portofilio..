const express = require("express")
const BlogControler = require("../controller/BlogController")
const blogImage = require("../middleware/blogImage")
const router = express.Router()


router.post("/create/Blog", blogImage.single("img"), BlogControler.createBlog)
router.get("/read/Blog", BlogControler.ReadBlog)
router.get("/ReadSingle/Blog/:id", BlogControler.ReadSingleBlog)
router.delete("/delete/Blog/:id", BlogControler.deleteBlog)
module.exports = router
