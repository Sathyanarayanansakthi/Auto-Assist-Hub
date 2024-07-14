const express = require('express');
const mongoose= require('mongoose');
const cors =  require('cors');
require('dotenv').config();

//routes for models
const JobsForm=require('./model/Jobs.model');
const VehicleEntry=require('./model/Garage.model');
const EmployeeEntry = require('./model/Employee.model');


// MongoDB connectivity
const app = express();
const url = process.env.ATLAS_URL;

mongoose.set('strictQuery',false);
mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(cors());
app.use(express.json());

app.listen(5000,()=>{
    console.log("Server started on port 5000 succesfully")
})


// Create data || save data in mongoDB

//Jobs Portal
app.post('/Jobs',(req,res)=>{
  const {Name,Contact,Address,City,Landmark,Pincode,State,Details}= req.body;
  const JobFormData=new JobsForm({Name,Contact,Address,City,Landmark,Pincode,State,Details});
  JobFormData.save()
    .then(savedData => {
      console.log('Data saved to Jobs database:', savedData);
      res.status(200).send({success: true, messege: "Data saves in Jobs database Successfully"});
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data to database');
    });
})

//Garage Portal Create vehical 
app.post('/addVehicle',(req,res)=>{
  const {InvoiceId, DateofEntry, CostomerName, CostomerNumber, VehicleNumber, VehicleModel, VIN, ServiceType, ExtimatedCost, MechanicAssigned}= req.body;

  const JobFormData=new VehicleEntry({InvoiceId, DateofEntry, CostomerName, CostomerNumber, VehicleNumber, VehicleModel, VIN, ServiceType, ExtimatedCost, MechanicAssigned});

  JobFormData.save()
    .then(savedData => {
      console.log('Data saved to vehicle database:', savedData);
      res.status(200).send({success: true, messege: "Data saves in vehicle database Successfully"});
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data to database');
    });
}) 

//Employee Portal Create Employee
app.post('/addEmployee',(req,res)=>{
  const {EmployeeId, EmployeeName, JoinDate, Position, DOB, EmployeeContact, Salary, Address}= req.body;

  const JobFormData=new EmployeeEntry({EmployeeId, EmployeeName, JoinDate, Position, DOB, EmployeeContact, Salary, Address});

  JobFormData.save()
    .then(savedData => {
      console.log('Data saved to employee database:', savedData);
      res.status(200).send({success: true, messege: "Data saves in employee database Successfully"});
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data to database');
    });
}) 

/* app.post('/addCar', (req, res) => {
  const carData = new VehicleEntry(req.body);
  console.log('Received car data:', carData);
  carData.save()
    .then(savedData => {
      console.log('Data saved to database:', savedData);
      res.status(200).send({success: true, messege: "Data saves in database Successfully"});
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving data to database');
    });
}); */

//Read data from the mongo DB
app.get("/JobsPortal",async(req,res)=>{
  const data= await JobsForm.find()
  res.json({success: true, data: data})
})

app.get("/GaragePortal",async(req,res)=>{
  const data= await VehicleEntry.find()
  res.json({success: true, data: data})
})
app.get("/EmployeePortal",async(req,res)=>{
  const data= await EmployeeEntry.find()
  res.json({success: true, data: data})
})


//delete Api
app.delete("/delete/:id",async(req,res)=>{
  const id =req.params.id
  const data =await VehicleEntry.deleteOne({_id : id})
  res.send({success: true, message:" data deleted successfully", data:data})
})
