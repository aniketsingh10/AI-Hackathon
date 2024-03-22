import React, { useState, useEffect } from "react";
import { TEChart } from "tw-elements-react";

const useAsyncEffect = (apiUrl, setData, errorMessage, maxRetries = 3) => {
  useEffect(() => {
    let retryCount = 0;

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setData(data.nifty);
      } catch (error) {
        //console.error(`Error fetching ${errorMessage} data:`, error);
        if (retryCount < maxRetries) {
          retryCount++;
          retryFetch();
        }
      }
    };

    const retryFetch = () => {
      setTimeout(() => {
        fetchData();
      }, 1000);
    };

    fetchData();
  }, [apiUrl, setData, errorMessage, maxRetries]);
};

const Cards = () => {
  const [niftyData, setNiftyData] = useState([]);
  const [sensexData, setSensexData] = useState([]);
  const [bankData, setBankData] = useState([]);
  const [itData, setITData] = useState([]);
  const [finData, setFinData] = useState([]);
  const [fmcgData, setFmcgData] = useState([]);

  useAsyncEffect(
    "https://stock-portfolio-analysis-backend.onrender.com/scrapper/nse",
    setNiftyData,
    "Nifty"
  );
  useAsyncEffect(
    "https://stock-portfolio-analysis-backend.onrender.com/scrapper/bse",
    setSensexData,
    "Sensex BSE"
  );
  useAsyncEffect(
    "https://stock-portfolio-analysis-backend.onrender.com/scrapper/bank",
    setBankData,
    "Nifty Bank"
  );
  useAsyncEffect(
    "https://stock-portfolio-analysis-backend.onrender.com/scrapper/it",
    setITData,
    "Nifty IT"
  );
  useAsyncEffect(
    "https://stock-portfolio-analysis-backend.onrender.com/scrapper/finance",
    setFinData,
    "Nifty Finance"
  );
  useAsyncEffect(
    "https://stock-portfolio-analysis-backend.onrender.com/scrapper/fmcg",
    setFmcgData,
    "Nifty FMCG"
  );

  // function to convert date
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { month: "short", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="w-full my-[4rem]">
      <p className="mb-3 text-3xl font-bold leading-[1.2] text-primary dark:text-white sm:text-4xl md:text-[40px] text-center">
        Market Indices
      </p>
      <p className="text-base text-body-color dark:text-dark-6 text-center mb-4">
        We provide comprehensive oversight, strategic alignment, and real-time
        analytics to optimize the performance and health of your project
        portfolio.
      </p>

      <div className="max-w-[90%] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-8 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty 50</p>
          <TEChart
            type="line"
            data={{
              labels: niftyData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty 50",
                  data: niftyData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Sensex</p>
          <TEChart
            type="line"
            data={{
              labels: sensexData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Sensex",
                  data: sensexData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty Bank</p>
          <TEChart
            type="line"
            data={{
              labels: bankData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty Bank",
                  data: bankData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
      </div>
      <div className="max-w-[90%] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-8 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty IT</p>
          <TEChart
            type="line"
            data={{
              labels: itData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty IT",
                  data: itData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty Finance</p>
          <TEChart
            type="line"
            data={{
              labels: finData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty Finance",
                  data: finData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
          <p className="text-lg font-bold text-primary">Nifty FMCG</p>
          <TEChart
            type="line"
            data={{
              labels: fmcgData.map((item) => formatDate(item.date)),
              datasets: [
                {
                  label: "Nifty FMCG",
                  data: fmcgData.map((item) => item.Nifty),
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
