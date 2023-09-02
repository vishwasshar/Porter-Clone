import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LiaAngleRightSolid } from "react-icons/lia";
import Vehical2 from "./vehical2";
const Vehical = (props) => {
  const [showForm, setShowForm] = useState(null);

  return (
    <>
      <Vehical2 showForm={showForm} setShowForm={setShowForm} />
      <div
        className={
          "w-[100%] h-full flex justify-center fixed top-0 left-0 z-30 backdrop-blur-sm " +
          props.className
        }
      >
        <div className="w-[100%] md:w-[70%] border border-black rounded-3xl overflow-hidden flex flex-col sm:flex-row relative md:my-5 ">
          <button
            className="w-[100%] flex justify-end px-10 text-2xl absolute  top-5 right-2"
            onClick={() => {
              props.setShowEstimate(false);
            }}
          >
            <AiOutlineClose />
          </button>
          <div className="w-[100%] sm:w-[30%] pl-10 pt-14 bg-white">
            <h1 className="text-5xl font-semibold"> Get an Estimate</h1>
            <p>
              Please fill in the details, so we can provide you with the best of
              our services
            </p>
          </div>
          <div className="w-[100%] sm:w-[70%] py-10 bg-[#F0F3FF] flex flex-col items-center gap-5 justify-center h-full">
            <button
              className="flex items-center justify-around font-semibold border border-black bg-white rounded-2xl w-[50%] px-4"
              onClick={() => {
                setShowForm(1);
              }}
            >
              <Image src={"/image4.png"} width={100} height={0} />
              <h1 className="">Two Wheelers</h1>
              <LiaAngleRightSolid />
            </button>
            <button
              className="flex items-center justify-around font-semibold border border-black bg-white rounded-2xl w-[50%] px-4"
              onClick={() => {
                setShowForm(2);
              }}
            >
              <Image src={"/image16.png"} width={100} height={0} />
              <h1 className="">Trucks</h1>
              <LiaAngleRightSolid className="" />
            </button>
            <button
              className="flex items-center justify-around font-semibold border border-black bg-white rounded-2xl w-[50%] px-4"
              onClick={() => {
                setShowForm(3);
              }}
            >
              <Image src={"/image6.png"} width={100} height={0} />
              <h1 className="">Packers and movers</h1>
              <LiaAngleRightSolid className="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vehical;
