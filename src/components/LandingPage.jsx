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
      <div className="h-screen bg-landing-bg bg-cover bg-center bg-black bg-opacity-80 bg-blend-overlay">
        <div className="flex items-center justify-around pt-2">
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

        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly py-32">
          <div className="w-full md:w-[35%]">
            <div className="w-[85%] mx-auto md:mx-0">
              <h1 className="text-white text-4xl md:text-5xl font-overpass font-bold">
                Reliable Service Every Time
              </h1>
              <p className="text-white font-normal mt-4">
                Nullam ac aliquam purus. Donec tempor, metus sed porttitor
                posuere, elit sapien rutrum elit, eget tincidunt nisl tortor nec
                metus. Donec tempor rhoncus convallis.
              </p>
            </div>

            <div className="flex flex-col md:flex-row mt-4 space-y-4 md:space-y-0 md:space-x-2">
              <input
                type="text"
                placeholder="Enter Delivery Address"
                className="rounded-lg w-full px-4 py-3 outline-none  "
              />
              <button className="bg-[#ff9966] text-white font-semibold  w-full md:w-auto px-12 py-3 rounded-lg  ">
                Go
              </button>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <img
              src={Landingimg}
              alt="page"
              className="w-80 h-auto mx-auto md:mx-0 rounded-3xl"
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default LandingPage;
