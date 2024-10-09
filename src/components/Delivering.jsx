import React from "react";
import Food from "../assets/Food&Drinks.svg";
import Package from "../assets/Packegsvg.svg";
import Groceries from "../assets/Groceriessvg.svg";

const Delivering = () => {
  return (
    <div className=" h-screen ">
      <div className="flex flex-col items-center justify-center h-72">
        <h1 className="text-gray-700 text-4xl font-bold">
          We Deliver Everything
        </h1>
        <p className="text-gray-500 mt-4 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper.
        </p>
      </div>
      <div className="flex items-center justify-center gap-16 w-full mt-12">
        <div className="w-[22%] flex flex-col items-center rounded-xl bg-[#ebebe0] relative hover:shadow-lg">
          <img src={Food} alt="" className="absolute w-36 top-[-120px] " />
          <h1 className="text-gray-700 text-2xl font-bold mt-20">
            Food And Drinks
          </h1>
          <p className="text-center px-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>
          <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-6 mb-12 ">
            Learn more
          </button>
        </div>
        <div className="w-[22%]  flex flex-col items-center rounded-xl bg-[#ebebe0] relative hover:shadow-lg">
          <img src={Package} alt="" className="absolute w-36 top-[-70px]" />
          <h1 className="text-gray-700 text-2xl font-bold mt-20">Packages</h1>
          <p className="text-center px-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>
          <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-6 mb-12 ">
            Learn more
          </button>
        </div>
        <div className="w-[22%]  flex flex-col items-center rounded-xl bg-[#ebebe0] relative hover:shadow-lg">
          <img src={Groceries} alt="" className="absolute w-36 top-[-100px] " />
          <h1 className="text-gray-700 text-2xl font-bold mt-20">Groceries</h1>
          <p className="text-center px-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>
          <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-6 mb-12 ">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivering;
