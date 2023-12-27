import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 text-right bg-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/Profile.svg" alt="" className="ml-auto mr-8 py-3"/>
    </nav>
  );
};

export default Navbar;
