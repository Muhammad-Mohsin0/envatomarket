import React from "react";
import callimg from "../assets/call.jpg";

const CallUs = () => {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row  items-center justify-evenly">
      <div>
        <img
          src={callimg}
          alt="call"
          className="w-[80%] md:w-96 mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-[30%] my-14 text-center md:text-left ">
        <h1 className="text-gray-700 text-3xl lg:text-4xl font-overpass font-bold">
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
