import React from "react";
import { LiaAngleDownSolid } from "react-icons/lia";

const FAQ = (props) => {
  const showAnswer = () => {
    if (props.isActive) {
      props.setActive(null);
    } else {
      props.setActive(props.index);
    }
  };
  return (
    <div className="flex justify-center items-center ">
      <div
        onClick={showAnswer}
        className="flex flex-col gap-5 w-[90%] md:w-[60%] py-5 border-b  cursor-pointer
      "
      >
        <div className="flex items-center justify-between gap-2 text-xl font-semibold ">
          {props.que}
          <LiaAngleDownSolid
            className={` transition-transform duration-200 ${
              props.isActive ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <div
          className={`${props.isActive ? "block" : "hidden"} flex flex-col `}
        >
          Get reliable and affordable logistics services from the Porter app by
          following these steps:
          <ol className="list-[numeric] list-inside flex flex-col ">
            <li className="">Sign in to the Porter app</li>
            <li>
              Choose the service you want - trucks, 2wheeler or intercity
              courier services
            </li>
            <li> Set your pick up and drop off location </li>
            <li>
              Browse through the list of available vehicles (Tata Ace, Pickup
              8ft, 2wheeler etc) and pick the one that suits your moving needs
            </li>
            <li>
              Enter a few additional details, apply coupons to get exciting
              discounts, and confirm your booking.
            </li>
            <li>
              Sit back and relax - our verified driver partners will do the
              rest.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
