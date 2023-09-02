import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
const Vehical2 = (props) => {
  const [showName, setShowName] = useState("");
  useEffect(() => {
    if (props.showForm == 1) {
      setShowName("Two Wheeler");
    } else if (props.showForm == 2) {
      setShowName("Truks");
    } else {
      setShowName("Packers and Movers");
    }
  });
  return (
    <div
      className={
        "w-[100%] h-[100%] flex justify-center fixed top-0 left-0 backdrop-blur-sm z-40 " +
        `${props.showForm == null ? "hidden" : "block"}`
      }
    >
      <div className="w-[100%] md:w-[70%] border border-black rounded-3xl overflow-hidden flex flex-col sm:flex-row  relative">
        <button
          className="w-[100%] flex justify-end px-10 text-2xl absolute top-5 right-2"
          onClick={() => {
            props.setShowForm(null);
          }}
        >
          <AiOutlineClose />
        </button>
        <div className="w-[100%] md:w-[30%] pl-10 pt-14 bg-white">
          <h1 className="text-5xl font-semibold">{showName}</h1>
          <p>
            Please fill in the details, so we can provide you with the best of
            our services
          </p>
        </div>
        <div className="w-[100%] md:w-[70%] bg-[#F0F3FF]  flex flex-col items-center gap-5 justify-center py-10">
          <div className="flex justify-between p-2 rounded-lg  w-[50%] bg-indigo-200">
            <h1>Two Wheelers</h1>
            <a href="/" className="text-[#0075FF]">
              Change
            </a>
          </div>
          <div className="w-[50%] bg-white flex flex-col p-2 gap-2 rounded-lg ">
            <label htmlFor="" className="text-xs">
              Pickup Address
            </label>
            <input type="text" placeholder="Enter Pickup Address" />
          </div>
          <div className="w-[50%] bg-white flex flex-col p-2 gap-2 rounded-lg ">
            <label htmlFor="" className="text-xs">
              Drop Address
            </label>
            <input type="text" placeholder="Enter Drop Address" />
          </div>
          <div className="w-[50%] bg-white flex flex-col p-2 gap-2 rounded-lg ">
            <label htmlFor="" className="text-xs">
              Phone Number
            </label>
            <input type="number" placeholder="Enter Your Phone Number" />
          </div>
          <div className="w-[50%] bg-white flex flex-col p-2 gap-2 rounded-lg ">
            <label htmlFor="" className="text-xs">
              Name
            </label>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className="flex w-[50%] items-center justify-between p-3 bg-[#D9D9D9] rounded-lg mt-10">
            Get Estimate <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehical2;
