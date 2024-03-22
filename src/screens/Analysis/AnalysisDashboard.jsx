import React from "react";
import Iframe from "react-iframe";

export function AnalysisDashboard({ searchTerm }) {
  return (
    <div className="mb-20">
      <div className="max-w-[80%]  w-full  mx-auto text-center flex flex-col justify-center pt-10 ">
        <p className="md:text-2xl text-xl font-bold pb-4">
          Company :-{" "}
          <span
            className="capitalize"
            style={{
              color: "rgb(59 130 246)",
            }}
          >
            {searchTerm || "INFY"}
          </span>
        </p>

        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <Iframe
              url={`https://trendlyne.com/web-widget/swot-widget/Poppins/${
                searchTerm || "INFY"
              }/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`}
              width="100%"
              height="350px"
              id="myId"
              className="myClassname"
              display="initial"
              frameBorder="0"
              allowFullScreen
            />
          </div>

          <div className="lg:w-1/2">
            <Iframe
              url={`https://trendlyne.com/web-widget/qvt-widget/Poppins/${
                searchTerm || "INFY"
              }/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`}
              width="100%"
              height="350px"
              id="qvtWidget"
              className="trendlyne-iframe"
              display="initial"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* <div>
          <Iframe
            url="https://trendlyne.com/web-widget/technical-widget/Poppins/INFY/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E"
            width="100%"
            height="500px"
            id="technicalWidget"
            className="trendlyne-iframe"
            display="initial"
            position="relative"
            frameBorder="0"
            allowFullScreen
          />
        </div> */}

        <div className=" lg:w-1/2 max-w-[80%] w-full  mx-auto text-center flex flex-col justify-center px-4 mt-4">
          <Iframe
            url={`https://trendlyne.com/web-widget/checklist-widget/Poppins/${
              searchTerm || "INFY"
            }/?posCol=00A25B&primaryCol=006AFF&negCol=EB3B00&neuCol=F7941E`}
            width="100%"
            height="520px"
            id="checklistWidget"
            display="initial"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
