const mongoose = require('mongoose');
const schema = mongoose.Schema;

const FormSchema  = new schema({
    Name: String,
    Contact: Number,
    Address: String,
    City: String,
    Landmark: String,
    Pincode: Number,
    State: String,
    Details: String
},{
    timestamps : true,
})

const JobsForm= mongoose.model('Jobs',FormSchema);
module.exports = JobsForm;