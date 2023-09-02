import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-[100%] h-[100vhpx] bg-[#040a1a] text-white">
      <h1 className="text-3xl text-center font-bold pt-10">
        And thanks to you, we are growing each & <br /> every day!
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-10 py-20">
        <div className="w-[250px] text-3xl font-bold text-center">
          19+ <br /> <span className="text-[#333333ff]">Cities</span>
        </div>
        <div className="w-[250px] text-3xl font-bold text-center">
          5 Lakh+ <br />
          <span className="text-[#333333ff]">Driver Partners</span>
        </div>
        <div className="w-[250px] text-3xl font-bold text-center">
          1 Crore+
          <br /> <span className="text-[#333333ff]">Customers</span>
        </div>
        <div className="w-[250px] text-3xl font-bold text-center">
          10 Crore+
          <br /> <span className="text-[#333333ff]">Trips</span>
        </div>
      </div>
      <div className=" w-[100%] h-[500px] flex flex-col justify-center items-center gap-20">
        <Image src={"/image5.png"} width={400} height={0} />
        <p className="text-center">
          We are serving in Delhi NCR, Bengaluru, Mumbai, Hyderabad, Ahmedabad,
          Jaipur, Pune, Kolkata, Surat, Chennai, Coimbatore, Indore, <br />
          Nagpur, Chandigarh, Lucknow, Vadodara, Ludhiana, Kochi, and Nashik.
        </p>
      </div>
      <div className="flex items-center gap-2 justify-center text-2xl font-semibold mt-[100px]">
        <Image
          src={"/image8.png"}
          width={50}
          height={0}
          className="w-[50px] h-[7px]"
        />
        <p>SOME WORDS FROM OUR HAPPY CUSTOMERS</p>
        <Image
          src={"/image8.png"}
          width={100}
          height={0}
          className="w-[50px] h-[7px]"
        />
      </div>
      <div className="w-[100%] flex flex-col md:flex-row justify-center items-center p-10 gap-5 lg:gap-20">
        {[1, 2, 3].map(() => {
          return (
            <div className="w-[300px] border bg-[#FFFFFF11] p-10 flex flex-col gap-4 rounded-3xl border-none">
              <div className="flex gap-5">
                <Image src={"/image9.png"} width={60} height={0} />
                <div>
                  <h1 className="font-bold">Vinay</h1>
                  <p className="text-[#FFFFFF55]">Nagpur</p>
                </div>
              </div>
              <p>
                “Way better than naaka waalas. Have shifted all my logistics
                needs to Porter and I can now safely focus on my business
                growth. Amazing service!”
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Landing;
