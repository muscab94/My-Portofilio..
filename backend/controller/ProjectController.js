const projectModel = require("../models/ProjectModel");


// Post Api
const createProject = async (req, res) => {
    const newData = projectModel({
        image: req.file.filename,
        title: req.body.title,
        description: req.body.description,
        minidescription: req.body.minidescription
    });

    const savedData = await newData.save();

    if (savedData) {
        res.send(savedData);
    }
};

// Read Api

const readProject = async (req, res) => {
    const getData = await projectModel.find();

    if (getData) {
        res.send(getData);
    }
};

// Read Single Api

const readOneProject = async (req, res) => {
    const getOneData = await projectModel.find(
        { _id: req.params.id }
    );

    if (getOneData) {
        res.send(getOneData);
    }
}

// Update Data 
const UpdateProject = async (req, res) => {
    const updateData = await projectModel.updateOne(
        { _id: req.params.id },
        {
            $set: {
                image: req.file ? req.file.filename : undefined,
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

// Delete Data
const deleteProject = async (req, res) => {
    const deleteData = await projectModel.deleteOne(
        { _id: req.params.id }
    );

    if (deleteData) {
        res.send("Deleted..")
    }
}

module.exports = {createProject,readProject,readOneProject,UpdateProject,deleteProject}