const mongoose = require('mongoose');
const schema = mongoose.Schema;

const FormSchema=new schema({
    InvoiceId:Number,
    DateofEntry: Date,
    CostomerName: String,
    CostomerNumber: String,
    VehicleNumber: String,
    VehicleModel: String,
    VIN:String,
    ServiceType:String,
    EstimatedCost:Number,
    MechanicAssigned:String
},{
    timestamps:true
})

const VehicleEntry=mongoose.model('VehicalDB',FormSchema);
module.exports=VehicleEntry;
