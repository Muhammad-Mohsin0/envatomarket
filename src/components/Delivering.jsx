import React from "react";
import Food from "../assets/Food&Drinks.svg";
import Package from "../assets/Packegsvg.svg";
import Groceries from "../assets/Groceriessvg.svg";

const Delivering = () => {
  return (
    <div className=" h-screen mb-20">
      <div className="flex flex-col items-center justify-center h-56">
        <h1 className="text-gray-700 text-4xl font-bold">
          We Deliver Everything
        </h1>
        <p className="text-gray-500 mt-4 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper.
        </p>
      </div>
      <div className="flex items-center justify-center gap-16 w-full mt-10 ">
        <div className="w-[22%] flex flex-col items-center rounded-xl bg-[#ebebe0] relative hover:shadow-lg py-6">
          <img src={Food} alt="" className="absolute w-36 top-[-110px] " />
          <h1 className="text-gray-700 text-2xl text-center font-bold mt-20">
            Food & Drinks
          </h1>
          <p className="text-center px-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>
          <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-4 ">
            Learn more
          </button>
        </div>
        <div className="w-[22%]  flex flex-col items-center rounded-xl bg-[#ebebe0] relative hover:shadow-lg py-6">
          <img src={Package} alt="" className="absolute w-36 top-[-70px]" />
          <h1 className="text-gray-700 text-2xl text-center font-bold mt-20">
            Packages
          </h1>
          <p className="text-center px-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>
          <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-4 ">
            Learn more
          </button>
        </div>
        <div className="w-[22%]  flex flex-col items-center rounded-xl bg-[#ebebe0] relative hover:shadow-lg py-6">
          <img src={Groceries} alt="" className="absolute w-36 top-[-100px] " />
          <h1 className="text-gray-700 text-2xl text-center font-bold mt-20">
            Groceries
          </h1>
          <p className="text-center px-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>
          <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-4 ">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivering;
