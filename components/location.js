import Image from "next/image";
import React, { useEffect, useState } from "react";
import Locationcard from "./locationcard";
import { AiOutlineClose } from "react-icons/ai";

const Location = (props) => {
  const [seletedCity, setSelectedCity] = useState(0);

  const Locationdata = [
    {
      url: "/image10.png",
      name: "Ahmedabad",
    },
    {
      url: "/image15.png",
      name: "Banglore",
    },
    {
      url: "/image11.png",
      name: "Chandigarh",
    },
    {
      url: "/image12.png",
      name: "Chennai",
    },
    {
      url: "/image13.png",
      name: "Coimbtore",
    },
    {
      url: "/image14.png",
      name: "Delhi",
    },
    {
      url: "/image10.png",
      name: "Ahmedabad",
    },
    {
      url: "/image15.png",
      name: "Banglore",
    },
    {
      url: "/image11.png",
      name: "Chandigarh",
    },
    {
      url: "/image12.png",
      name: "Chennai",
    },
    {
      url: "/image13.png",
      name: "Coimbtore",
    },
    {
      url: "/image14.png",
      name: "Delhi",
    },
    {
      url: "/image10.png",
      name: "Ahmedabad",
    },
    {
      url: "/image15.png",
      name: "Banglore",
    },
    {
      url: "/image11.png",
      name: "Chandigarh",
    },
    {
      url: "/image12.png",
      name: "Chennai",
    },
    {
      url: "/image13.png",
      name: "Coimbtore",
    },
    {
      url: "/image14.png",
      name: "Delhi",
    },
  ];

  useEffect(() => {
    props.setCurrentCity(Locationdata[seletedCity].name);
  }, [seletedCity]);
  return (
    <div
      className={
        "w-[100%] flex justify-center items-center h-[100%] z-30 backdrop-blur-sm fixed top-0 left-0 " +
        props.className
      }
    >
      <div className="rounded-3xl flex flex-wrap gap-10 items-center justify-center w-[100%] md:w-[70%] h-[90%] shadow-md shadow-black bg-[#F0F3FF] px-5 py-10 overflow-scroll ">
        <h1 className="flex items-center justify-between w-[100%] text-center text-2xl font-semibold">
          Choose Your City
          <button
            onClick={() => {
              props.setShowLocation(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </h1>
        {Locationdata.map((data, index) => {
          return (
            <Locationcard
              img={data.url}
              name={data.name}
              isSelected={index == seletedCity}
              setSelectedCity={setSelectedCity}
              index={index}
              setShowLocation={props.setShowLocation}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Location;
