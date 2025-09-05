const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    Image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
     minidescription: {
        type: String,
        required: true
    },
 
})
module.exports = mongoose.model("Blog", blogSchema)