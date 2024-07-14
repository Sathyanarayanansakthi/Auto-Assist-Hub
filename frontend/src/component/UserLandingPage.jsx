import React, { useState } from "react";
import Model from "react-modal";
import Axios from "axios";
//Icons
import { MdClose } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";

const UserLandingPage = () => {

  const [visible, setVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Coimbatore");
  const [searchQuery, setSearchQuery] = useState("");

  const [Name,setName]=useState("");
  const [Contact,setContact]=useState("");
  const [Address,setAddress]=useState("");
  const [City,setCity]=useState("");
  const [Landmark,setLandmark]=useState("");
  const [Pincode,setPincode]=useState("");
  const [State,setState]=useState("Tamil Nadu");
  const [Details,setDetails]=useState(""); 

  const handleDropdownChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Searching for:", searchQuery, "in", selectedLocation);
  };




  // getting values from form and storing
  const handleUserName= (e) => {
    setName(e.target.value);
  };
  const handleContact= (e) => {
    setContact(e.target.value);
  };
  const handleAddress= (e) => {
    setAddress(e.target.value);
  };
  const handleCity= (e) => {
    setCity(e.target.value);
  };
  const handleLandmark= (e) => {
    setLandmark(e.target.value);
  };
  const handlePincode= (e) => {
    setPincode(e.target.value);
  };
  const handleState= (e) => {
    setState(e.target.value);
  };
  const handleDetails= (e) => {
    setDetails(e.target.value);
  };

  /*Handling Submit Action */

  const handleAddEntry = (e) => {
    e.preventDefault();
    /* console.log(`Name: ${Name}, Contact: ${Contact}, Address: ${Address},City: ${City}, Landmark: ${Landmark}, Pincode: ${Pincode}, State: ${State}, Details: ${Details}`); */
    
    Axios.post('http://localhost:5000/Jobs',{Name,Contact,Address,City,Landmark,Pincode,State,Details}).then((res) => {
      console.log(res)
      alert('Form is submitted Successfully')
      setVisible(false)
   })
    .catch(err=>console.log(err))
  }; 

  // to shake the input field if not filled



  return (
    <React.Fragment>
      <div className="select-none flex min-h-screen justify-center bg-gray-100 ">
        <div className="text-center pb-12 md:pb-16 md:pt-4 md:pb-10">
          <h1
            className="text-5xl md:text-4xl font-extrabold leading-tighter tracking-tighter md:text-2xl mb-4 mt-14"
            data-aos="zoom-y-out"
          >
            Get your vehicle.dr right now just by few clicks{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              <br />
              in Auto-Assist Hub
            </span>
          </h1>
          <div className="max-w-3xl mx-auto">
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <select
                value={selectedLocation}
                onChange={handleDropdownChange}
                className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-4"
              >
                <option>Coimbatore</option>
                <option>Annur</option>
                <option>Mettupalayam</option>
                <option>Karamadai</option>
                <option>Godalur</option>
                <option>Karumathampatti</option>
                <option>Pollachi</option>
                <option>Valparai</option>
              </select>

              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder="Search..."
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 flex-1 mr-4"
              />

              <button
                onClick={handleSearch}
                className="bg-red-500 text-white py-2 px-4 mr-4 rounded hover:bg-red-600 focus:outline-none"
              >
                Search
              </button>
              <button
                className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={() => setVisible(true)}
              >
                Rise Ticket
              </button>
            </div>
          </div>
        </div>

        <Model isOpen={visible}>
          <button
            className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-500"
            onClick={() => setVisible(false)}
          >
            <MdClose />
          </button>
          <h1>Rise Your ticket</h1>
          <div className="select-none text-center pb-12 md:pb-16 md:pt-40 md:pb-20">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Assist yourself with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Auto-Assist Hub
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Get your vehical checkUp in online just by few clicks and our
                crew will take care of your vehical
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none font-button flex"
                    type="button"
                  >
                    Login <GiCoffeeCup className="ml-2 text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
              <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6">
                  Report Vehicle Issue
                </h2>
                <form onSubmit={handleAddEntry}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your name"
                      onChange={handleUserName}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="contact-number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      id="contact-number"
                      className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your contact number"
                      onChange={handleContact}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your address"
                      onChange={handleAddress}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your city"
                      onChange={handleCity}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="landmark"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Landmark
                    </label>
                    <input
                      type="text"
                      id="landmark"
                      className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter a nearby landmark"
                      onChange={handleLandmark}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="pincode"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter your area's pincode"
                      onChange={handlePincode}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State
                    </label>
                      <select type="text" id="paymentStatus" className="InputSelect rounded-sm appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4" onChange={handleState}  required>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Andra Pradesh">Andra Pradesh</option>
                        <option value="Telugana">Telugana</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Pondicherry">Pondicherry</option>
                      </select>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="issue-details"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Detail about the Issue
                    </label>
                    <textarea
                      id="issue-details"
                      rows="4"
                      className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Describe the issue in detail"
                      required onChange={handleDetails}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium text-sm hover:bg-green-700 "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Model>
      </div>
    </React.Fragment>
  );
};

export default UserLandingPage;
