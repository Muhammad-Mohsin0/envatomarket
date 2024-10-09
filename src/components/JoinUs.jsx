import React from "react";
import Cycle from "../assets/delivery-cycle.png";
import Bike from "../assets/delivery-bike.png";
import Van from "../assets/delivery-van.png";

const JoinUs = () => {
  return (
    <>
      <div className="h-screen relative ">
        <div className="absolute inset-0 bg-white clip-path-inverse-ellipse "></div>
        <div className="absolute inset-0 clip-path-ellipse-20 ">
          <div className="absolute inset-0 bg-delivery-bg bg-cover bg-center bg-fixed"></div>
          <div className="absolute inset-0 bg-black opacity-50 "> </div>
        </div>
        <div className="flex items-center justify-center h-72 ">
          <h1 className="absolute text-white font-bold text-4xl ">
            Join The Crew
          </h1>
        </div>
        <div className="flex items-center justify-center gap-8 w-full mt-12">
          <div className="w-[25%] flex flex-wrap pl-6 items-center rounded-xl bg-[#253138] relative hover:shadow-lg ">
            <img
              src={Cycle}
              alt=""
              className="absolute w-28 top-[-90px] bg-[#e1ecb8] rounded-lg "
            />
            <h1 className="text-white text-2xl font-bold mt-20">Swift Biker</h1>
            <p className=" mt-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-8 mb-6">
              Join Us
            </button>
          </div>
          <div className="w-[25%]  flex flex-wrap pl-6 items-center rounded-xl bg-[#253138] relative hover:shadow-lg">
            <img
              src={Bike}
              alt=""
              className="absolute w-28 p-4 top-[-90px] bg-[#e1ecb8] rounded-lg"
            />
            <h1 className="text-white text-2xl font-bold mt-20">Bike Rider</h1>
            <p className="text-gray-300 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-8 mb-6 ">
              Join Us{" "}
            </button>
          </div>
          <div className="w-[25%]  flex flex-wrap pl-6 items-center rounded-xl bg-[#253138] relative hover:shadow-lg">
            <img
              src={Van}
              alt=""
              className="absolute w-28 bg-[#e1ecb8] rounded-lg top-[-90px]  p-2"
            />
            <h1 className="text-white text-2xl font-bold mt-20">
              Pickup Driver
            </h1>
            <p className="text-gray-300 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-8 mb-6 ">
              Join Us{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
