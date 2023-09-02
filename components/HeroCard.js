import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoTriangleDown } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import Location from "./location";
import Vehical from "./vehical";
import Image from "next/image";

const HeroCard = (props) => {
  const [showLocation, setShowLocation] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  const [currentCity, setCurrentCity] = useState("");
  return (
    <>
      <Location
        className={`${showLocation ? "block" : "hidden"}`}
        setShowLocation={setShowLocation}
        setCurrentCity={setCurrentCity}
      />
      <Vehical
        className={`${showEstimate ? "block" : "hidden"}`}
        setShowEstimate={setShowEstimate}
      />
      <div className={" py-5 bg-white z-10 " + props.className}>
        <div
          className="flex items-center gap-1 mt-2 ml-2"
          onClick={() => {
            setShowLocation(true);
          }}
        >
          <FaLocationDot className="text-[#002BFF] text-2xl" />
          <p>City </p>
          <p className="font-bold underline decoration-dotted">{currentCity}</p>
          <GoTriangleDown className="text-[#002BFF] text-2xl" />
        </div>
        <div className="flex items-center flex-wrap w-[100%]  justify-center gap-10  ">
          <div className="w-[100px] p-2 ">
            <Image
              src={"/image4.png"}
              width={100}
              height={0}
              className="bg-[#F0F3FF] rounded-lg"
            />
            <p className="text-xs font-semibold mt-3">Two Wheelers</p>
          </div>
          <div className="w-[100px] p-2 ">
            <Image
              src={"/image16.png"}
              width={100}
              height={0}
              className="bg-[#F0F3FF] rounded-lg"
            />
            <p className="text-xs font-semibold mt-3">Trucks</p>
          </div>
          <div className="w-[100px] p-2 ">
            <Image
              src={"/image6.png"}
              width={100}
              height={0}
              className="bg-[#F0F3FF] rounded-lg"
            />
            <p className="text-xs font-semibold mt-3">Packers and Movers</p>
          </div>
          <div className="w-[100px] p-2 ">
            <Image
              src={"/image7.png"}
              width={100}
              height={0}
              className="bg-[#F0F3FF] rounded-lg"
            />
            <p className="text-xs font-semibold mt-3">Courier Service</p>
          </div>
          <div
            className="bg-[#0041F5] w-[100px] h-[140px] rounded-3xl p-4 flex flex-col gap-2"
            onClick={() => {
              setShowEstimate(true);
              console.log("working");
            }}
          >
            <h1 className=" text-white flex flex-col font-bold">
              Get an Estimate
            </h1>
            <p className="text-xs text-[#ffffffcc]">(takes ~2 mins)</p>
            <BsArrowRight className="text-white" size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCard;
