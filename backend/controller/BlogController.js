const blogModel = require("../models/BlogModel")

// create 
const createBlog = async (req, res) => {
    const newData = blogModel({
        Image: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        minidescription: req.body.minidescription
    })
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

// readsing
const ReadBlog = async (req,res) => {
    const newData = await blogModel.find()
    if(newData){
        res.send(newData)
    }
}

// 

const ReadSingleBlog = async (req,res) => {
    const newData = await blogModel.find(
        {_id: req.params.id}
    )
    if(newData){
        res.send(newData)
    }
}
// Update Data 
const UpdateProject = async (req, res) => {
    const updateData = await projectModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                Image: req.file ? req.file.filename : undefined,
                title: req.body.title,
                description: req.body.description,
                minidescription: req.body.minidescription
            }
        }
    );

    if (updateData) {
        res.send("Updated..")
    }
}

// delete
const deleteBlog = async (req,res) => {
    const deletData = await blogModel.deleteOne({_id: req.params.id})
    if(deletData){
        res.send("succes delete")
    }
}
module.exports = {createBlog, ReadBlog,ReadSingleBlog, deleteBlog, UpdateProject}