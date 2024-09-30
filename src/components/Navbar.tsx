"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/360-one-brand-logo-black.svg";

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
        {/* Home */}
        <div className="relative group">
          <Link
            href="/"
            className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
          >
            Home
          </Link>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* About Us */}
        <div className="relative group">
          <Link
            href="/about"
            className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
          >
            About Us
          </Link>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* One Wealth */}
        <div className="relative group">
          <Link
            href="/one-wealth"
            className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
          >
            One Wealth
          </Link>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* One Asset */}
        <div className="relative group">
          <Link
            href="/one-asset"
            className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
          >
            One Asset
          </Link>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* One Global */}
        <div className="relative group">
          <Link
            href="/one-global"
            className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
          >
            One Global
          </Link>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Perspective */}
        <div className="relative group">
          <Link
            href="/perspective"
            className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
          >
            Perspective
          </Link>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Investor Relations */}
        <div className="relative group">
          <Link
            href="/investor-relations"
            className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
          >
            Investor Relations
          </Link>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>
        </div>

        {/* Client Login */}
        <div
          className="relative group"
          onMouseEnter={() => setShowCard(true)}
          onMouseLeave={() => setShowCard(false)}
        >
          <Link
            href="/client-login"
            className="text-gray-500 hover:text-[#020101] transition-colors duration-300"
          >
            Client Login
          </Link>
          <span className="absolute top-6 left-1/2 transform -translate-x-1/2 -bottom-0 h-[2px] bg-[black] hover:font-bold w-0 transition-all duration-300 group-hover:w-full"></span>

          {/* Dropdown Card */}
          {showCard && (
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
      </div>
    </div>
  );
};

export default Navbar;
