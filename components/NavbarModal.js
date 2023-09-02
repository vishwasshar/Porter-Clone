import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const NavbarModal = (props) => {
  const removeModalHandler = () => {
    props.setShowModal(false);
  };
  return (
    <div
      className={
        "h-[100vh] w-[100vw] z-30 bg-[#ffffff33] backdrop-blur-sm fixed " +
        props.className
      }
    >
      <div className="w-[80%] h-[100%] bg-black flex flex-col gap-5 items-center absolute right-0 text-white">
        <button className=" p-3 mb-10 self-end" onClick={removeModalHandler}>
          <AiOutlineClose />
        </button>

        <a href="#">Delivery Partners</a>
        <a href="#">For Enterprise</a>
        <a href="#">Login</a>
        <a href="#">Courier</a>
      </div>
    </div>
  );
};

export default NavbarModal;
