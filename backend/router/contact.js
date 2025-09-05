const express = require("express")
const contactController = require("../controller/contact")
const router = express.Router()

router.post("/create/contact", contactController.createContact)
router.get("/read/contact", contactController.readContact)
router.get("/readSingleContact/contact/:id", contactController.readSingleContact)
router.delete("/deleteContact/contact/:id", contactController.deleteContact)
router.put("/update/contact/:id", contactController.updateContact)

module.exports = router

