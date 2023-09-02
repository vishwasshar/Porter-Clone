import React, { useState } from "react";
import Landing2 from "../components/landing2";
import FAQ from "../components/faq";
import Landing1 from "@/components/landing1";
import Location from "@/components/location";
import Vehical from "@/components/vehical";
import Vehical2 from "@/components/vehical2";

const Index = () => {
  const [active, setActive] = useState(null);
  const faqData = [
    {
      que: "What is Pickup App?",
    },
    {
      que: "How do I use Pickup App?",
    },
    {
      que: "How do I book a tempo/mini truck/bike or intercity courier services online from the Porter app?",
    },
  ];

  return (
    <>
      <Landing1 />
      <Landing2 />
      <div className="flex flex-col gap-5 py-5 px-2">
        <h1 className="text-4xl font-semibold text-center">
          Frequently asked Questions
        </h1>
        <p className="text-center">
          Here are some of the top FAQs to support you. Please do feel free to
          reach out to us for any <br />
          questions that you might have had but are not answered by the
          following.
        </p>
        {faqData.map((item, i) => {
          return (
            <FAQ
              isActive={active == i}
              setActive={setActive}
              index={i}
              que={item.que}
            />
          );
        })}
      </div>
    </>
  );
};

export default Index;
