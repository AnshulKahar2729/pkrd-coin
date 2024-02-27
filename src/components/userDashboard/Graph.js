 import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

const Graph = () => {
  const [currency, setCurrency] = useState("usd");
  const [selectedOption, setSelectedOption] = useState("month");

  const [data,setData] = useState([]);
  const [labels,setLabels] = useState([]);


  const fetchData = async () => {
    try {
      const vsCurrency = currency.toLowerCase();
      const days =
        selectedOption === "today" ? 1 :
        selectedOption === "5D" ? 5 :
        selectedOption === "1M" ? 30 :
        selectedOption === "6M" ? 180 :
        selectedOption === "1Y" ? 365 :
        selectedOption === "5Y" ? 2000 :
         1;

      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/tether/market_chart`,
        {
          params: {
            vs_currency: vsCurrency,
            days: days,
          },
        }
      );



      const formattedData = response?.data?.prices?.map((info) => ({
        x: new Date(info[0]).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        y: info[1]/1,
      }));

      setData(formattedData)

      
      
    } catch (error) {
      console.error("Error fetching CoinGecko data:", error);
    }
  };



  useEffect(() => {
    fetchData();
  }, [currency, selectedOption,]);


  
  const removeDuplicates = () => {
    setLabels(
      data.filter((item, i) => (
        item.x !== data[i + 1]?.x
      ))
      );
    };
    
    
    useEffect(() => {
      removeDuplicates();
    }, [data]);
    
    console.log('Labels -- > ',labels)

  const chartOptions = {
    xaxis: {
      type: "date",
      labels: {
        formatter: function (val) {
          return val;
        },
      },
      title: {
        text:
          selectedOption === "month"
            ? "Date"
            : selectedOption === "5D"
            ? "Date"
            : "Date",
      },
    },
    yaxis: {
      title: {
        text: `Price (${currency.toUpperCase()})`,
      },
      labels: {
        formatter: function (val) {
          return val.toFixed(2);
        },
      },
    },
    theme: {
      mode: "light",
      palette: "palette1",
      monochrome: {
        enabled: true,
        color: "#29a744",
        shadeTo: "light",
        shadeIntensity: 0.65,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

 

const chartSeries = [
  {
    name: `Daily Price (${currency.toUpperCase()})`,
    data: labels?.map((value) => ({
      x: value.x,
      y: value.y,
    })),
  },
];

  const toggleCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency === "usd" ? "inr" : "usd"));
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleRefresh = () => {
    fetchData();
  };





  return (
    <div className="h-fit w-full pb-2 flex flex-col ">
      <div className="w-full flex flex-row text-black items-center justify-between">
        <div className="flex flex-row  text-black items-center justify-around">
          <div className="flex flex-row gap-2">
            <button onClick={handleOptionChange} className="border-r-2 px-2" value="today">1D</button>
            <button onClick={handleOptionChange} className="border-r-2 px-2" value="5D">5D</button>
            <button onClick={handleOptionChange} className="border-r-2 px-2" value="1M">1M</button>
            <button onClick={handleOptionChange} className="border-r-2 px-2" value="6M">6M</button>
            <button onClick={handleOptionChange} className="border-r-2 px-2" value="1Y">1Y</button>
            <button onClick={handleOptionChange} className="border-r-2 px-2" value="5Y">5Y</button>
            </div>
        </div>
        <button className="btn btn-secondary" onClick={toggleCurrency}>
          {currency === "usd" ? "USD" : "INR"}
        </button>
        <button className="btn btn-success" onClick={handleRefresh}>
          Refresh
        </button>
      </div>

      <div className=" border rounded-b-md bg-white ">
        <div className="max-w-full h-fit px-1 sm:px-4 shadow-lg">
          <div className="w-full h-full">
            <ReactApexChart
              height={"340px"}
              width={"100%"}
              options={chartOptions}
              series={chartSeries}
              type="area"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
