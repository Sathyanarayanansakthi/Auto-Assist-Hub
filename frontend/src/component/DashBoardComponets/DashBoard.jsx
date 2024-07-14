import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { GiMechanicGarage } from "react-icons/gi";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { GiProfit } from "react-icons/gi";

import axios from "axios";

const DashBoard = () => {
  const[jobCount,setJobsCount]=useState(0);
  const[vehicleCount,setVehicleCount]=useState(0);


  const navigate = useNavigate();
  const garageName = "My Garage";
  const accountantPage = "My Finance";
  const EmployeeName = "Employee Portal";
  const jobName = "Job Portal";

  axios.defaults.baseURL = "http://localhost:5000/";

  //Fetching data from Jobs Collection
  const fetchJobEntries = () => {
    axios
      .get("http://localhost:5000/JobsPortal")
      .then((response) => {
        const count=response.data.data.length;
        console.log("Total Count of jobs Available is: "+count);
        setJobsCount(count);
      })
      .catch((error) => console.error("Error fetching job entries:", error));
  };

  useEffect(() => {
    fetchJobEntries();
  }, []);

  //Fetching data from Jobs Collection
  const fetchGarageEntries = () => {
    axios
      .get("http://localhost:5000/GaragePortal")
      .then((response) => {
        const count=response.data.data.length;
        console.log("Total Count of jobs Available is: "+count);
        setVehicleCount(count);
      })
      .catch((error) => console.error("Error fetching job entries:", error));
  };

  useEffect(() => {
    fetchGarageEntries();
  }, []);


  return(
    <React.Fragment>
      <div className="min-h-screen-minus-140">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
              <div className="text-white rounded bg-gray-800">
                <div className=" p-6  rounded-lg  select-none">
                  <div className="flex">
                      <GiMechanicGarage className="text-3xl font-bold"/>
                      <h5 className="pl-2 mb-2 text-2xl">Garage</h5>
                  </div>
                  <div className="flex pt-5 pb-7">
                      <h1 className="text-4xl font-bold">{vehicleCount} </h1>
                      <p className="text-4sm pl-5 pt-3 font-regular">Vehicle Totally</p>
                  </div>
                  <button to="/OnlineBooking" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg" onClick={()=>navigate(`/AdminPortal/Garage?name=${encodeURIComponent(garageName)}`)}>
                      Create or Manage Vehicle
                  </button>
                </div>
              </div>
              <div className="text-white rounded bg-gray-800">
                <div className=" p-6  rounded-lg  select-none">
                  <div className="flex">
                      <MdOutlineDesktopWindows className="text-3xl font-bold"/>
                      <h5 className="pl-2 mb-2 text-2xl">Job Portal</h5>
                  </div>
                  <div className="flex pt-5 pb-7">
                      <h1 className="text-4xl font-bold">{jobCount}</h1>
                      <p className="text-4sm pl-5 pt-3  font-regular">Jobs Available</p>
                  </div>
                
                  <button to="/AgencyBooking" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg" onClick={()=>navigate(`/AdminPortal/JobPortal?001=${encodeURIComponent(jobName)}`)}>
                      Get Deal Done
                  </button>
                </div>
              </div>
              <div className="text-white rounded bg-gray-800">
                <div className=" p-6  rounded-lg  select-none">
                  <div className="flex">
                      <LuNetwork className="text-4xl font-bold"/>
                      <h5 className="pl-2 mb-2 text-2xl">Employee</h5>
                  </div>
                  <div className="flex pt-5 pb-7">
                      <h1 className="text-4xl font-bold">15</h1>
                      <p className="text-4sm pl-5 pt-3"> Employee Present</p>
                  </div>
                
                  <button to='/OwnBooking' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg" onClick={()=>navigate(`/AdminPortal/Employee?001=${encodeURIComponent(EmployeeName)}`)}>
                      Manage Employee
                  </button>
                </div>
              </div>
              <div className="text-white rounded bg-gray-800">
                <div className=" p-6  rounded-lg  select-none">
                  <div className="flex">
                      <GiProfit className="text-3xl font-bold"/>
                      <h5 className="pl-2 mb-2 text-2xl">Profit</h5>
                  </div>
                  <div className="flex pt-5 pb-7">
                      <h1 className="text-4xl font-bold">56906 </h1>
                      <p className="text-4sm pl-5 pt-3"> Collected Totally</p>
                  </div>

                  <button to='/ParcelBooking' className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg" onClick={()=>navigate(`/AdminPortal/Account?name=${encodeURIComponent(accountantPage)}`)}>
                      Create or Manage Record
                  </button>
                </div>
              </div>
        </div>

        
        <div className="select-none text-center pb-2 md:pb-2 md:pt-10 md:pb-2">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            Get Costomers Effortlessly {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Auto-Assist Hub
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Attract customers with our job portal and manage your business seamlessly with a powerful dashboard. Monitor your business growth effortlessly.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default DashBoard

