import Link from "next/link";
import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import NavbarModal from "./NavbarModal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };
  return (
    <>
      <NavbarModal
        className={`${showModal ? "block" : "hidden"}`}
        setShowModal={setShowModal}
      />
      <div className="flex justify-between px-10 items-center h-[50px] bg-[#040A1A] text-white">
        <h1 className="text-3xl font-semibold">Pickup</h1>
        <div className=" gap-3 hidden sm:flex">
          <Link href={"/"}>For Enterprise</Link>
          <Link href={"/"}>Delivery Partners</Link>
        </div>
        <Link href={"/"} className="hidden sm:block">
          Login
        </Link>
        <button onClick={showModalHandler} className="sm:hidden">
          <IoReorderThree size={30} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
