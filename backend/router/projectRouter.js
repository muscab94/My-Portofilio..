const express = require("express");
const projectController = require("../controller/ProjectController");
const blogImage = require("../middleware/blogImage");

const router = express.Router();

router.post("/create/Project", blogImage.single("img"), projectController.createProject);
router.get("/read/Project", projectController.readProject);
router.get("/readOne/Project/:id", projectController.readOneProject);
router.put("/update/Project/:id", blogImage.single("img"), projectController.UpdateProject);
router.delete("/delete/Project/:id", projectController.deleteProject);

module.exports = router