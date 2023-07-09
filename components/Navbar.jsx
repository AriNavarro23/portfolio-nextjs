"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import useScrollListener from "@/hooks/useListenScroll";

const PROJECTS_PATHS = [
  "/TodolistPage",
  "/PasswordPage",
  "/CrudPage",
  "/WeatherPage",
];

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const { showShadow } = useScrollListener();

  const handleNav = () => setNav(!nav);

  return (
    <div
      className={classNames("fixed w-full h-20 z-50", {
        "shadow-xl bg-opacity-40 transition-all duration-500": showShadow,
        "bg-highlight ": PROJECTS_PATHS.includes(pathname),
      })}
    >
      <div className="flex items-center justify-between w-full h-full px-4 2xl:px-16 ">
        <Link href="/">
          <Image src="/images/logo.png" alt="/" width="70" height="10" />
        </Link>
        <div>
          <ul
            className={classNames("hidden md:flex", {
              "text-white": PROJECTS_PATHS.includes(pathname),
            })}
          >
            <Link href="/">
              <li className="ml-10 text-sm font-semibold uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm font-semibold uppercase hover:border-b">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm font-semibold uppercase hover:border-b">
                Skill
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm font-semibold uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm font-semibold uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Link href="/">
                <Image src="/images/logo.png" alt="/" width="70" height="25" />
              </Link>

              <div
                onClick={handleNav}
                className="p-2 rounded-full shadow-lg cursor-pointer shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] md:w-[90%] py-4">
                Let is build something together
              </p>
            </div>
          </div>
          <div className="flex flex-col py-2">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-2 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="py-4">
              <p className="uppercase tracking-widest text-[#5651e5] py-2">
                Let is Connect
              </p>
              <div className="flex items-center justify-around my-4 w-full sm:-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <FaGithub />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
