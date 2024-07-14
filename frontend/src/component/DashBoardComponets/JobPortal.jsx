import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FaUserCircle } from "react-icons/fa";

const JobPortal = () => {
  const[Jobs,setJobs] = useState("")

  axios.defaults.baseURL = "http://localhost:5000/";

  //Fetching data from Jobs Collection
  const fetchEntries = () => {
    axios
      .get("http://localhost:5000/JobsPortal")
      .then((response) => {
        setJobs(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchEntries();
  }, []);


  return (
    <React.Fragment>
      <div className="select-none text-center pb-2 md:pb-2 md:pt-10 md:pb-2 mb-4">
        <h1
          className="text-5xl md:text-2xl font-extrabold leading-tighter tracking-tighter mb-4"
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


        
      <div className="mt-4 grid grid-cols-1 mb-4 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {Jobs.length > 0 ? (
          Jobs.map((job) => (
            <div key={job._id} className="text-white rounded bg-gray-800">
              <div className="p-6 rounded-lg select-none">
                  <div className="flex">
                      <FaUserCircle className="text-3xl font-bold" />
                      <h5 className="pl-2 mb-2 text-2xl">{job.Name}</h5>
                  </div>
                  <div className="flex pb-3">
                      <p className="font-bold">Issue:</p>
                      <p className="pl-2 mb-2">{job.Details}</p>
                  </div>
                  <div className="flex pt-2 pb-3">
                      <p className="font-bold">Contact Number:</p>
                      <p className="font-bold text-sm pl-5 font-regular">
                        {job.Contact} 
                      </p>
                  </div>
                  <div className="flex pt-2 pb-7">
                      <p className="font-bold">Address</p>
                      <p className="text-sm pl-5 font-regular">
                        {job.Address} - {job.Pincode}
                      </p>
                  </div>
                  <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg"
                  >
                      Get detailed Address
                  </button>
              </div>
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
        
    </React.Fragment>
  )
}

export default JobPortal