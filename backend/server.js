const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const contactRouter = require("./router/contact")
const BlogRouter = require("./router/BlogRouter")
const ProjectRouter = require("./router/projectRouter")
const app = express()


app.use(express.json())

app.use(cors())


// connecting
mongoose.connect("mongodb://localhost:27017/portofilio").then(() => {
    console.log("connecting data...")
})

app.use(contactRouter)
app.use(BlogRouter)
app.use(ProjectRouter)
app.use("/allimages", express.static("document"))
app.listen(9000, () => console.log("server is runing..."))