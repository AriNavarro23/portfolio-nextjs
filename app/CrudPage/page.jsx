import React from "react";
import Link from "next/link";
import Crud from "@/public/assets/projects/crud.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";

const CrudPage = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:w  -[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[30vh] bg-black/70 z-10" />
        <Image
          className="relative z-1"
          style={{ objectFit: "cover" }}
          layout="fill"
          src={Crud}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crud App</h2>
          <h3>React JS / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <div className="py-4 flex flex-col items-center">
            <h2 className="py-2">Overview</h2>
            <p>
              Introducing a feature-rich CRUD app built with React.js, Tailwind
              CSS, Font Awesome, and React Router DOM. This powerful app allows
              you to Create, Read, Update, and Delete data with ease. With its
              sleek design and intuitive user interface, managing your data has
              never been easier. The app also offers a seamless navigation
              experience, thanks to the implementation of React Router DOM.
              Additionally, it features a stylish Dark Mode, ensuring a visually
              pleasing experience even in low-light environments. Experience the
              convenience and efficiency of this CRUD app for all your data
              management needs.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="https://crud-redux-delta.vercel.app">
                <p>Live demo</p>
              </Link>
            </button>
            <button className="px-8 py-2 mt-4">
              <Link href="https://github.com/AriNavarro23/crud-redux.git">
                <p>Code</p>
              </Link>
            </button>
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 shadwo-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React-router-dom
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Font Awesome
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Uuidv4
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 flex items-center justify-end">
          <Link href="/#projects">
            <p className="cursor-pointer shadow-xl rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white py-1 px-2 hover:shadow-lg">
              Back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CrudPage;
