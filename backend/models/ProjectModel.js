const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    minidescription:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("project", projectSchema)
