const mongoose = require('mongoose');
const schema = mongoose.Schema;

const FormSchema=new schema({
    EmployeeId:Number,
    EmployeeName:String,
    JoinDate: Date,
    Position: String,
    DOB: String,
    EmployeeContact: String,
    Salary: String,
    Address:String,
},{
    timestamps:true
})

const EmployeeEntry=mongoose.model('EmployeeDB',FormSchema);
module.exports=EmployeeEntry;
