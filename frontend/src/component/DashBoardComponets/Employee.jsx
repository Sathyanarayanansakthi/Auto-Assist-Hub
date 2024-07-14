import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Model from 'react-modal'
import { MdClose } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Employee = () => {
  const [visible, setVisible] = useState(false);
  
  const[EmployeeId,setEmployeeId]=useState("");
  const[EmployeeName,setEmployeeName]=useState("");
  const[JoinDate,setJoinDate]=useState("");
  const[Position,setPosition]=useState("");
  const[DOB,setDOB]=useState("");
  const[EmployeeContact,setEmployeeContact]=useState("");
  const[Salary,setSalary]=useState("");
  const[Address,setAddress]=useState("");
  
  const [employee, setEmployeeEntries] = useState("");

  const EmployeePosition = ['Manager','Assistant Manager', 'Senior Mechanic', 'Junior Mechanic', 'Intern','Accountant','Owner'];
  const EmployeeSalary = ['UnPaid','60,000','50000', '40000', '30000', '28000','25000','20000'];

  const handleEmployeeIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleEmployeeNameChange = (e) => {
    setEmployeeName(e.target.value);
  };

  const handleJoinDateChange = (e) => {
    setJoinDate(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleDOBChange = (e) => {
    setDOB(e.target.value);
  };

  const handleEmployeeContactChange = (e) => {
    setEmployeeContact(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/addEmployee', {EmployeeId, EmployeeName, JoinDate, Position, DOB, EmployeeContact, Salary, Address})
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

const fetchEntries = () => {
    axios
      .get("http://localhost:5000/EmployeePortal")
      .then((response) => {
        setEmployeeEntries(response.data.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <React.Fragment>
      <div>
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
                  Employee Management
                </a>
              </li>
            </ul>
            <div className="flex items-center">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                type="submit"
              >
                Manage Employee
              </button>
              <button
                onClick={() => setVisible(true)}
                className="bg-blue-500 ml-4 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                type="submit"
              >
                Add Employee
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
              <label className="block text-gray-700">Employee ID</label>
              <input
                type="text"
                name="invoiceId"
                onChange={handleEmployeeIdChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Employee Name</label>
              <input
                type="text"
                name="invoiceId"
                onChange={handleEmployeeNameChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Employee Contact</label>
              <input
                type="text"
                name="invoiceId"
                onChange={handleEmployeeContactChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="issue-details"
                className="block text-sm font-medium text-gray-700"
              >
                Employee Address
              </label>
              <textarea
                id="issue-details"
                rows="4"
                className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Describe the issue in detail"
                required onChange={handleAddressChange
                }
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Employee DOB</label>
              <input
                type="date"
                name="dateOfEntry"
                onChange={handleDOBChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          
            <div>
              <label className="block text-gray-700">Service Type</label>
              <select
                name="serviceType"
                onChange={handlePositionChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>Select a service</option>
                {EmployeePosition.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Employee Joining Date</label>
              <input
                type="date"
                name="dateOfEntry"
                onChange={handleJoinDateChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700">Salary</label>
              <select
                name="mechanicAssigned"
                onChange={handleSalaryChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>Salary</option>
                {EmployeeSalary.map((mechanic) => (
                  <option key={mechanic} value={mechanic}>{mechanic}</option>
                ))}
              </select>
            </div>
            <div>
              <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-md">Submit</button>
            </div>
          </form>
        </Model>
        
        <div className="mt-4 grid grid-cols-1 mb-4 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {employee.length > 0 ? (
          employee.map((e) => (
            <div key={e._id} className="text-white rounded bg-gray-800">
              <div className="p-6 rounded-lg select-none">
                  <div className="flex mb-5">
                      <FaUserCircle className="text-3xl font-bold" />
                      <h5 className="pl-2 mb-2 text-2xl">{e.EmployeeName}</h5>
                  </div>
                  <div className="flex pb-3">
                      <p className="font-bold">Position:</p>
                      <p className="pl-2 mb-2">{e.Position}</p>
                  </div>
                  <div className="flex pt-2 pb-3">
                      <p className="font-bold">Contact Number:</p>
                      <p className="font-bold text-sm pl-5 font-regular">
                        {e.EmployeeContact} 
                      </p>
                  </div>
                  <div className="flex pt-2 pb-7">
                      <p className="font-bold">Address</p>
                      <p className="text-sm pl-5 font-regular">
                        {e.Address}
                      </p>
                  </div>
                  <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg"
                  >
                      Manage Data
                  </button>
              </div>
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
      </div>
    </React.Fragment>
  )
}

export default Employee
