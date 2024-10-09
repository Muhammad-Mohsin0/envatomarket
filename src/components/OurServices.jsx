import React from "react";
import swift from "../assets/Swift Delivery.jpg";
import trusted from "../assets/Trusted Service.jpg";
import vaccinated from "../assets/Vaccinated Courier.jpg";
import safety from "../assets/Safety Protocol.jpg";

const OurServices = () => {
  return (
    <>
      <div className=" relative bg-[#253138] h-screen ">
        <div className="flex flex-col items-center justify-center text-white h-96">
          <p className="font-bold text-4xl text-center font-overpass sm:text-5xl lg:w-[44%] sm:w-[60%] ">
            Try Us and See How Good Our Services Are.
          </p>
          <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-6 mb-12 ">
            Learn more
          </button>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[80%] bg-white clip-path-custom-ellipse"></div>
        <div className="flex items-center justify-around absolute top-[70%] left-0 w-full px-8 transform -translate-y-1/2 mt-6">
          <div className="relative w-[20%]  flex flex-col items-center rounded-3xl bg-white">
            <img
              src={swift}
              alt=""
              className="w-60 h-auto  mb-[-30px] z-10  "
            />
            <h1 className="text-gray-700 text-3xl mt-12 font-semibold">
              Swift Delivery
            </h1>
            <p className=" p-4  text-center  text-gray-500 font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative w-[20%] flex flex-col items-center  rounded-3xl bg-white">
            <img
              src={trusted}
              alt=""
              className="w-60 h-auto  mb-[-30px] z-10"
            />
            <h1 className="text-gray-700 text-3xl mt-12 font-semibold">
              Trusted Service
            </h1>
            <p className=" p-4  text-center  text-gray-500 font-medium  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative w-[20%] flex flex-col items-center  rounded-3xl	 bg-white">
            <img
              src={vaccinated}
              alt=""
              className="w-60 h-auto  mb-[-30px] z-10"
            />{" "}
            <h1 className="text-gray-700 text-3xl mt-12 font-semibold">
              Vaccinated Courier
            </h1>
            <p className=" p-4  text-center  text-gray-500 font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative w-[20%] flex flex-col items-center  rounded-3xl bg-white">
            <img src={safety} alt="" className="w-60  mb-[-30px] z-10" />{" "}
            <h1 className="text-gray-700 text-3xl mt-12 font-semibold">
              Safety Protocol
            </h1>
            <p className=" p-4  text-center text-gray-500 font-medium ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
