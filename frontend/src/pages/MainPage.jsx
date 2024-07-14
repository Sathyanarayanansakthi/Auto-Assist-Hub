import React from "react";
import { Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import DashBoard from "../component/DashBoardComponets/DashBoard";
import JobPortal from "../component/DashBoardComponets/JobPortal";
import Garage from "../component/DashBoardComponets/Garage";
import Employee from "../component/DashBoardComponets/Employee";
import Account from "../component/DashBoardComponets/Account";

const AdminDashBoard = () => {
  const navigate = useNavigate();
  const garageName = "My Garage";
  const EmployeeName = "Employee Portal";
  const AccountantName = "Accountant Portal";
  const Job = "Job Portal";

  return (
    <React.Fragment>
      <div className="min-h-screen flex flex-col h-screen">
        <header>
        <Navbar />
        </header>

        <div className="flex-1 flex flex-col sm:flex-row overflow-y-hidden">
          <main className="flex-1 overflow-y-auto mx-4">
            <Routes>
              <Route  path="/DashBoard" element={<DashBoard/>}/>
              <Route path="/JobPortal" element={<JobPortal/>}></Route>
              <Route path="/Garage" element={<Garage/>}></Route>
              <Route path="/Employee" element={<Employee/>}></Route>
              <Route path="/Account" element={<Account/>}></Route>
            </Routes>
          </main>

          <nav className="order-first sm:w-40">
            <div className='min-h-screen bg-gray-800 text-white select-none'>
              <div className="pt-10 flex flex-col">
                <h1 onClick={()=>navigate("DashBoard")} className='active py-4 hover:bg-gray-900'>DashBoard</h1>

                <h1 onClick={()=>navigate(`/AdminPortal/JobPortal?name=${encodeURIComponent(Job)}`)}  className='active py-4 hover:bg-gray-900'>Job Portal </h1>

                <h1 onClick={()=>navigate(`/AdminPortal/Garage?name=${encodeURIComponent(garageName)}`)} className='active py-4 hover:bg-gray-900'>Garage</h1>

                <h1 onClick={()=>navigate(`/AdminPortal/Employee?001=${encodeURIComponent(EmployeeName)}`)} className='active py-4 hover:bg-gray-900'>Employee</h1>

                <h1 onClick={()=>navigate(`/AdminPortal/Account?001=${encodeURIComponent(AccountantName)}`)} className='active py-4 hover:bg-gray-900'>Accounts</h1>
              </div>
            </div>
          </nav>
        </div>

        <footer className="bg-gray-100"><Footer /></footer>
      </div>
     </React.Fragment>
  );
};

export default AdminDashBoard;
