import React, { useState } from "react";

import HeroCard from "./HeroCard";

const Landing1 = () => {
  return (
    <>
      <div className="w-[100%] py-[15%] px-32 relative bg-[url('/image1.png')] bg-no-repeat bg-cover border border-black flex flex-col items-center md:items-start">
        <h1 className="text-white text-4xl ">Delivery hai?</h1>
        <h1 className="text-white text-5xl font-bold ">#HoJayega!</h1>
        <HeroCard className="absolute -bottom-[20%] left-[20%] rounded-xl hidden lg:block w-[60%]" />
      </div>
      <HeroCard className="flex lg:hidden flex-col items-center" />
      <div className="bg-[#F0F3FF] flex justify-center py-10 lg:pt-32 items-center">
        <p className="text-[#33333399] w-[85%] md:w-[35%] text-center text-lg">
          Moving a billion dreams ahead, one delivery at a time. Pursuing an
          unsaid promise to deliver anything, anywhere, anytime with the
          collaborative efforts of our driver - partners.
        </p>
      </div>
    </>
  );
};

export default Landing1;
