import React from "react";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#040A1A] text-white static bottom-0">
      <div className="flex  flex-col md:flex-row items-center md:items-start justify-around pt-10 gap-10 md:gap-0">
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h1 className="text-4xl font-bold">Pickup</h1>
          <div className="flex flex-col text-xl items-center md:items-start">
            <a>Send anything,</a>
            <a>anywhere,</a>
            <a>anytime</a>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h1 className="text-xl font-bold ">Company</h1>
          <div className="flex flex-col items-center md:items-start">
            <a>About us</a>
            <a>Offers</a>
            <a>Careers</a>
            <a>Blog</a>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h1 className="text-xl font-bold ">Quick Links</h1>
          <div className="flex flex-col items-center md:items-start">
            <a>City tempo</a>
            <a>For Enterprise</a>
            <a>Packers & Movers</a>
            <a>Courier</a>
            <a>Services</a>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h1 className="text-xl font-bold ">Support</h1>
          <div className="flex flex-col items-center md:items-start">
            <a>Contact Us</a>
            <a>Privicy Policy</a>
            <a>Terms of Service</a>
            <a>Insurance FAQs</a>
            <a>Driver Partner Terms & conditions</a>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image src={"/image2.png"} width={150} height={0} />
          <Image src={"/image3.png"} width={150} height={0} />
        </div>
      </div>
      <div className=" flex flex-col gap-4 py-5 items-center">
        <h1 className="font-bold">We are here</h1>
        <div className="flex justify-around items-center w-full flex-col md:flex-row">
          <p>Delhi NCR</p>
          <p>Hydrabad</p>
          <p>Bangalore</p>
          <p>Mumbai</p>
          <p>Vadodara</p>
        </div>
      </div>
      <div className="bg-[#08112C] w-[100%]  mt-7 flex px-24 items-center">
        <div className=" w-[100%] text-3xl gap-3 items-center justify-between  flex-col md:flex-col xl:flex py-5">
          <div className="flex gap-3">
            <AiOutlineInstagram />
            <BiLogoFacebookCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
            <AiFillTwitterCircle />
          </div>
          <div>
            <p className="text-sm ">
              2023 Pickup Logistics Solutions Pvt. Ltd. | CIN: 0000000000000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
