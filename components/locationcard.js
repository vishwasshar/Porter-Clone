import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Locationcard = (props) => {
  return (
    <div
      className={`font-bold w-[130px] text-center relative `}
      onClick={() => {
        props.setSelectedCity(props.index);
        props.setShowLocation(false);
      }}
    >
      <AiOutlineCheckCircle
        className={`text-green-600 absolute right-0  ${
          props.isSelected ? "block" : "hidden"
        }`}
        size={30}
      />
      <Image src={props.img} width={130} height={0} />
      {props.name}
    </div>
  );
};

export default Locationcard;
