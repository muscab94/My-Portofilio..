const contactModel = require("../models/contactModel")

// create
const createContact = async (req, res) => {
    const newData =  contactModel(req.body)
    const saveData = await newData.save()
    if(saveData){
        res.send(saveData)
    }
}

// read all

const readContact = async (req,res) => {
   const readData = await contactModel.find()
   if(readData){
    res.send(readData)
   }
}

// readSingle
const readSingleContact = async (req,res) => {
   const readSingleData = await contactModel.find({_id: req.params.id})
   if(readSingleData){
    res.send(readSingleData)
   }
}
// delete
const deleteContact = async (req,res) => {
    const deleteData = await contactModel.deleteOne({_id: req.params.id})
    if(deleteData){
        res.send("success delete")
    }
}

// update
const updateContact = async (req,res) => {
  const updateData = await contactModel.updateOne(
    {_id: req.params.id},
    {$set: req.body}
  )

  if(updateData){
    res.send("succes Update")
  }
}


module.exports = {createContact, readContact,readSingleContact, deleteContact,updateContact}