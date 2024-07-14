import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Model from "react-modal"; 
import { MdClose } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { IoPencil } from "react-icons/io5";

const Garage = () => {
  const [visible, setVisible] = useState(false);
  
  const[InvoiceId,setInvoiceId]=useState("");
  const[DateofEntry,setDateOfEntry]=useState("");
  const[CostomerName,setCustomerName]=useState("");
  const[CostomerNumber,setCustomerNumber]=useState("");
  const[VehicleNumber,setVehicleNumber]=useState("");
  const[VehicleModel,setVehicleModel]=useState("");
  const[VIN,setVin]=useState("");
  const[ServiceType,setServiceType]=useState("");
  const[EstimatedCost,setEstimatedCost]=useState("");
  const[MechanicAssigned,setMechanicAssigned]=useState("Not Assigned");

  const [entries, setEntries] = useState([]);

  const serviceTypes = ['Regular Maintance','Oil Change', 'Brake Replacement', 'Tire Rotation', 'Battery Check'];
  const mechanics = ['Not Assigned','Predeep', 'Kesavan', 'Satheesh raj', 'Kumarasan'];

  const handleInvoiceIdChange = (e) => {
    setInvoiceId(e.target.value);
  };

  const handleDateOfEntryChange = (e) => {
    setDateOfEntry(e.target.value);
  };

  const handleCustomerNameChange = (e) => {
    setCustomerName(e.target.value);
  };

  const handleCustomerNumberChange = (e) => {
    setCustomerNumber(e.target.value);
  };

  const handleVehicleNumberChange = (e) => {
    setVehicleNumber(e.target.value);
  };

  const handleVehicleModelChange = (e) => {
    setVehicleModel(e.target.value);
  };

  const handleVinChange = (e) => {
    setVin(e.target.value);
  };

  const handleServiceTypeChange = (e) => {
    setServiceType(e.target.value);
  };

  const handleEstimatedCostChange = (e) => {
    setEstimatedCost(e.target.value);
  };

  const handleMechanicAssignedChange = (e) => {
    setMechanicAssigned(e.target.value);
  };



  // Send the form data to server.js
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/addVehicle', {InvoiceId, DateofEntry, CostomerName, CostomerNumber, VehicleNumber, VehicleModel, VIN, ServiceType, EstimatedCost, MechanicAssigned})
      .then(response => {
        console.log('Data sent successfully:', response.data);
        alert('Form is submitted Successfully')
        setVisible(false) 
        fetchEntries();
      })
      .catch(error => {
        console.error('There was an error sending the data:', error);
      });
  };

  //Fetching data from server port localhost 5000/GaragePortal (Vehicledb Collection)
  const fetchEntries = () => {
    axios
      .get("http://localhost:5000/GaragePortal")
      .then((response) => {
        setEntries(response.data.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Delete Entry
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete("/delete/" + id);

      if (response.data.success) {
        fetchEntries();
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <React.Fragment>
      <nav className="EntryNav mt-4 select-none bg-gray-800 px-2 py-2">
        <div className=" flex justify-between items-center">
          <div className="flex justify-center">
            <div className="w-64 ">
              <div className="relative h-10 w-full min-w-[200px] ">
                <input
                  type="email"
                  placeholder="Search"
                  className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:outline-0  disabled:border-0"
                />
              </div>
            </div>
          </div>
          <ul className="flex justify-center space-x-8">
            <li to>
              <a
                href="#"
                className="text-white sm:text-xs lg:text-lg"
              >
                Garage Management
              </a>
            </li>
          </ul>
          <div className="flex items-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              type="submit"
            >
              Import CVS
            </button>
            <button
              onClick={() => setVisible(true)}
              className="bg-blue-500 ml-4 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              type="submit"
            >
              Add Entries
            </button>
          </div>
        </div>
      </nav>


      <Model isOpen={visible}>
        <button
          className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
          onClick={() => setVisible(false)}
        >
          <MdClose />
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Invoice ID</label>
            <input
              type="text"
              name="invoiceId"
              onChange={handleInvoiceIdChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Date of Entry</label>
            <input
              type="date"
              name="dateOfEntry"
              onChange={handleDateOfEntryChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Customer Name</label>
            <input
              type="text"
              name="customerName"
              onChange={handleCustomerNameChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Customer Contact Number</label>
            <input
              type="text"
              name="customerNumber"
              onChange={handleCustomerNumberChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              onChange={handleVehicleNumberChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Vehicle Model</label>
            <input
              type="text"
              name="vehicleModel"
              onChange={handleVehicleModelChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">VIN</label>
            <input
              type="text"
              name="vin"
              onChange={handleVinChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Service Type</label>
            <select
              name="serviceType"
              onChange={handleServiceTypeChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>Select a service</option>
              {serviceTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Estimated Cost</label>
            <input
              type="text"
              name="estimatedCost"
              onChange={handleEstimatedCostChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-gray-700">Mechanic Assigned</label>
            <select
              name="mechanicAssigned"
              onChange={handleMechanicAssignedChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>Select a mechanic</option>
              {mechanics.map((mechanic) => (
                <option key={mechanic} value={mechanic}>{mechanic}</option>
              ))}
            </select>
          </div>
          <div>
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md">Submit</button>
          </div>
        </form>
      </Model>
      
      <div className="tabel">
        <table className="table-auto w-full text-sm text-left rtl:text-right bg-gray-800  text-white mt-3 rounded-sm">
          <thead className=''>
            <tr className="class">
              <th>Invoice ID</th>
              <th>Customer Name</th>
              <th>Contact No.</th>
              <th>Vehicle No.</th>
              <th>Model</th>
              <th>Payment Status</th>
              <th>Cost</th>
              <th>Mechanic</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry._id}>
                {" "}
                {/* Use index as the key */}
                <td>{entry.InvoiceId}</td>
                <td>{entry.CostomerName}</td>
                <td>{entry.CostomerNumber}</td>
                <td>{entry.VehicleNumber}</td>
                <td>{entry.VehicleModel}</td>
                <td>null</td>
                <td>{entry.EstimatedCost}</td>
                <td>{entry.MechanicAssigned}</td>
                <td>
                  <div className="flex">
                    <button>
                      <IoPencil className="mx-2 editBTN cursor-not-allowed" />
                    </button>
                    <button onClick={() => handleDelete(entry._id)}>
                      <MdDeleteSweep className="mx-2 deleteBTN cursor-pointer" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </React.Fragment>
  )
}

export default Garage