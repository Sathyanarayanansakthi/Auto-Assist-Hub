import React from "react";

import { GiProfit } from "react-icons/gi";
import { GiExpense } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";


const Account = () => {
  return (
    <React.Fragment>
      <div className="min-h-screen-minus-140">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
          <div className="text-white rounded bg-gray-800">
            <div className=" p-6  rounded-lg  select-none">
              <div className="flex">
                <GiProfit className="text-3xl font-bold" />
                <h5 className="pl-2 mb-2 text-2xl">Revenue</h5>
              </div>
              <div className="flex pt-5 pb-7">
                <h1 className="text-4xl font-bold">56,896 </h1>
                <p className="text-4sm pl-5 pt-3 text-Green font-regular">
                  Total Revenue
                </p>
              </div>
              <button
                to="/OnlineBooking"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg"
              >
                Manage Income
              </button>
            </div>
          </div>

          <div className="text-white rounded bg-gray-800">
            <div className=" p-6  rounded-lg  select-none">
              <div className="flex">
                <GiExpense className="text-3xl font-bold" />
                <h5 className="pl-2 mb-2 text-2xl">Expense</h5>
              </div>
              <div className="flex pt-5 pb-7">
                <h1 className="text-4xl font-bold">2834</h1>
                <p className="text-4sm pl-5 pt-3 text-Green font-regular">
                  Total Expense
                </p>
              </div>

              <button
                to="/AgencyBooking"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg"
              >
                Manage Expense
              </button>
            </div>
          </div>

          <div className="text-white rounded bg-gray-800">
            <div className=" p-6  rounded-lg  select-none">
              <div className="flex">
                <MdOutlinePendingActions className="text-3xl font-bold" />
                <h5 className="pl-2 mb-2 text-2xl">Ledger Balance</h5>
              </div>
              <div className="flex pt-5 pb-7">
                <h1 className="text-4xl font-bold">28348</h1>
                <p className="text-4sm pl-5 pt-3 text-Green font-regular">
                  Total Balance Amount
                </p>
              </div>

              <button
                to="/AgencyBooking"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg"
              >
                Manage Ledgers
              </button>
            </div>
          </div>

          <div className="text-white rounded bg-gray-800">
            <div className=" p-6  rounded-lg  select-none">
              <div className="flex">
                <RiBillLine className="text-3xl font-bold" />
                <h5 className="pl-2 mb-2 text-2xl">Bills Cost</h5>
              </div>
              <div className="flex pt-5 pb-7">
                <h1 className="text-4xl font-bold">28348</h1>
                <p className="text-4sm pl-5 pt-3 text-Green font-regular">
                  Total Amount
                </p>
              </div>

              <button
                to="/AgencyBooking"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg"
              >
                Manage Bills & Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Account;
