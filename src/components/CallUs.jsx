import React from "react";
import callimg from "../assets/call.jpg";

const CallUs = () => {
  return (
    <div className=" flex items-center justify-evenly">
      <div>
        <img src={callimg} alt="call" className="w-80 h-auto" />
      </div>
      <div className="w-[30%] my-36">
        <h1 className="text-gray-700 text-4xl font-overpass font-bold">
          Do you want a fast service? Just call us.
        </h1>
        <p className="mt-4 font-normal  text-gray-500">
          Aenean quis sagittis sem. Sed volutpat quam a imperdiet volutpat.
          Quisque maximus nibh elit, nec molestie erat tincidunt sit amet. Duis
          nec ante molestie, volutpat mi ac, convallis quam. Fusce laoreet
          bibendum luctus. Maecenas malesuada fermentum mi.
        </p>
        <button className="bg-[#ff9966] text-white font-semibold px-6 py-4 rounded-lg mt-4">
          Call Us
        </button>
      </div>
    </div>
  );
};

export default CallUs;
