import React from "react";
import { Header } from "../../components/Header/Header";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

export function Dashboard() {
  return (
    <div className="flex-1 text-center">
      <Header />

      {/* <div className="max-w-[800px]  w-full  mx-auto text-center flex flex-col justify-center pt-10">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          PMS Dashboard
        </p>
        <p
          className=" font-bold p-2 text-xl"
          style={{
            color: "rgb(59 130 246)",
          }}
        >
          The modern stock screener that helps you to pick better stocks.
        </p>
      </div> */}

      <div className="flex flex-col flex-1 relative mt-2">
        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
