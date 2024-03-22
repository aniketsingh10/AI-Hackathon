import React, { useEffect, useState } from "react";
import { Badge } from "@tremor/react";
import Marquee from "react-fast-marquee";

export function HorizontalScroller() {
  const [indicesData, setIndicesData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make the API request
        const response = await fetch(
          "https://stock-portfolio-analysis-backend.onrender.com/scrapper/indices"
        );
        const data = await response.json();

        // Set the fetched data in the state
        setIndicesData(data.indices);
        //setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        //setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // The empty dependency array ensures that the useEffect runs only once when the component mounts
  //console.log(indicesData);

  return (
    <Marquee
      className=" bg-[rgba(59,130,246,0.2)]"
      pauseOnClick={true}
      gradient={true}
    >
      {indicesData?.map((item) => (
        <div key={item.name} className="flex mx-4 py-1">
          <div className=" px-2 py-1 text-primary font-bold text-base">
            {item.name}
          </div>
          <Badge
            className="my-1 px-2 rounded-lg text-xs"
            style={{
              backgroundColor:
                item.percentChange < 0
                  ? "rgba(255, 0, 0, 0.4)"
                  : "rgba(0, 255, 0, 0.4)",
            }}
          >
            {item.percentChange} %
          </Badge>
        </div>
      ))}
    </Marquee>
  );
}
