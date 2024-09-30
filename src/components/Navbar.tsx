"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../my-app/public/360-one-brand-logo-black.svg";

const Navbar = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex justify-around p-4 bg-white shadow-md relative">
      <div className="logo">
        <Link href={"/"}>
          <Image src={logo} alt="Brand Logo" width={60} height={58} />
        </Link>
      </div>

      <div className="navs flex space-x-10 mt-3">
        {[
          "Home",
          "About Us",
          "One Wealth",
          "One Asset",
          "One Global",
          "Perspective",
          "Investor Relations",
          "Client Login",
        ].map((navItem, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setShowCard(navItem === "Client Login")}
            onMouseLeave={() => setShowCard(false)}
          >
            <Link
              href={`/${navItem.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
            >
              {navItem}
            </Link>
            <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>

            {/* Dropdown Card */}
            {showCard && navItem === "Client Login" && (
              <div className="absolute z-10 mt-4 -left-[40px] w-48 bg-white border border-gray-300 shadow-lg rounded-lg p-4">
                <h4 className="font-semibold text-lg">360 ONE Wealth</h4>
                <ul className="mt-2">
                  <li>
                    <Link
                      href="/portfolio-login"
                      className="text-gray-500 hover:text-[#020101]"
                    >
                      Portfolio Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/online-trading"
                      className="text-gray-500 hover:text-[#020101]"
                    >
                      Online Trading
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wealth-open-login"
                      className="text-gray-500 hover:text-[#020101]"
                    >
                      Wealth Open Login
                    </Link>
                  </li>
                </ul>

                <h4 className="font-semibold text-lg mt-4">360 One Asset</h4>
                <ul className="mt-2">
                  <li>
                    <Link
                      href="/view-pms-portfolio"
                      className="text-gray-500 hover:text-[#020101]"
                    >
                      View PMS Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/invest-in-mf-login"
                      className="text-gray-500 hover:text-[#020101]"
                    >
                      Invest in MF Login
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
