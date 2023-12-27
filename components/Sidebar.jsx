import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[241px] h-full bg-white">
      <div className="">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" className="py-4 mx-auto" alt="" />
      </div>
      <div className="flex flex-col justify-between h-5/6">
        <ul>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bar.svg" className="my-4 mx-auto" alt="" />
          <li className="px-8">
            <Link href={"/"} className="text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/link1.svg" className="" alt="" />
            </Link>
          </li>
          <li className="my-4 px-8">
            <Link href={"/"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/link2.svg" className="" alt="" />
            </Link>
          </li>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/bar.svg" className="my-4 mx-auto" alt="" />

          <li className="px-8">
            <Link href={"/"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/link3.svg" className="" alt="" />
            </Link>
          </li>
          <li className="px-8 mt-4">
            <Link href={"/"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/link4.svg" className="" alt="" />
            </Link>
          </li>
        </ul>
        <ul className="px-8">
          <li className="text-center">
            <Link href={"/"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/link5.svg" className="" alt="" />
            </Link>
          </li>
          <li className="my-4">
            <Link href={"/"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/link6.svg" className="" alt="" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/link7.svg" className="" alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
