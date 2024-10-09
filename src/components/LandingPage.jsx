import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import Landingimg from "../assets/Landingsvg.svg";

const LandingPage = () => {
  return (
    <>
      {/* <div className="container mx-auto"> */}
      <div className="min-h-screen bg-landing-bg bg-cover bg-center bg-black bg-opacity-80 bg-blend-overlay ">
        <div className=" flex items-center justify-between md:justify-around pt-2 px-4 md:px-0">
          <h1 className="flex items-center gap-2 text-3xl font-bold text-white">
            <BsBoxSeam className="text-green-600 solid" />
            Delivery
          </h1>
          <ul className="flex gap-3 text-medium text-white">
            <li>
              <GiHamburgerMenu />
            </li>
            <li>
              <IoNotifications />
            </li>
            <li>
              <FaUserAlt />
            </li>
          </ul>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center justify-around py-16 md:py-32">
          <div className=" w-full md:w-[55%] lg:w-[35%]">
            <div className=" mx-auto md:mx-0">
              <h1 className="text-white text-3xl mt-8 md:text-5xl text-center md:text-left font-overpass font-bold">
                Reliable Service Every Time
              </h1>
              <p className="text-white font-normal text-center md:text-left mt-4">
                Nullam ac aliquam purus. Donec tempor, metus sed porttitor
                posuere, elit sapien rutrum elit, eget tincidunt nisl tortor nec
                metus. Donec tempor rhoncus convallis.
              </p>
            </div>

            <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 px-4 md:px-0 md:space-x-2">
              <input
                type="text"
                placeholder="Enter Delivery Address"
                className="rounded-lg w-full px-4 py-3 outline-none wrap "
              />
              <button className="bg-[#ff9966] text-white md:text-base text-xl font-semibold  w-full md:w-auto px-12 py-3 rounded  ">
                Go
              </button>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <img
              src={Landingimg}
              alt="page"
              className="w-[80%] md:w-72 lg:w-96 mx-auto md:mx-0 rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default LandingPage;
