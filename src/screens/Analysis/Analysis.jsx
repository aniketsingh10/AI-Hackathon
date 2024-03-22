import React, { useState } from "react";
import CheckConnection from "../../components/Connection/Offline";
import { Header } from "../../components/Header/Header";
import { AnalysisDashboard } from "./AnalysisDashboard";
var data = require("../../assets/data/list.json");
export function Analysis() {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    //api
    setValue(searchTerm);
    console.log("search", searchTerm);
  };

  return (
    <div>
      <Header />
      <CheckConnection>
        <div>
          <div className="max-w-[800px]  w-full  mx-auto text-center flex flex-col justify-center pt-10">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              PMS Stock Analysis
            </p>
            <p
              className=" font-bold p-2 text-xl"
              style={{
                color: "rgb(59 130 246)",
              }}
            >
              The modern stock screener that helps you to pick better stocks.
            </p>
          </div>
        </div>

        <div className="p-10 max-w-[1000px] mx-auto ">
          <div>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={value}
                onChange={onChange}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 font-bold"
                placeholder="Enter the Company Name"
                required
              />
              <button
                type="submit"
                onClick={() => onSearch(value)}
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{
                  backgroundColor: "rgb(59 130 246)",
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div>
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.company_name.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 5)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.company_name)}
                  key={item.company_name}
                  className="flex px-2 py-3  m-0.5 pl-8 rounded-md font-bold"
                  style={{
                    backgroundColor: "rgba(59 ,130 ,246,0.5)",
                  }}
                >
                  {item.company_name}
                </div>
              ))}
          </div>
        </div>

        <AnalysisDashboard searchTerm={value} />
      </CheckConnection>
    </div>
  );
}
