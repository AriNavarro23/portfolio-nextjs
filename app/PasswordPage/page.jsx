import React from "react";
import Password from "@/public/assets/projects/password.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const PasswordPage = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[35vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[35vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          style={{ objectFit: "cover" }}
          layout="fill"
          src={Password}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Password Generator</h2>
          <h3>React Js / Tailwind</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-6">
      <div className="col-span-4 ">
          <div className="py-4 flex flex-col items-center">
            <h2 className="py-2">Overview</h2>
            <p>
              I present to you my latest creation, a to-do list application
              developed with React JS. This tool allows you to efficiently and
              practically track your daily tasks. With its dynamic and
              responsive interface, enhanced by custom CSS styling, it offers a
              visually pleasing and user-friendly experience. Additionally, the
              integration of the React-Icons library adds intuitive and
              recognizable icons for each task, enhancing navigation and visual
              identification of actions to be taken. Leveraging UUID, I ensured
              the assignment of unique identifiers to each task, guaranteeing
              reliable handling both in the frontend and backend. Discover how
              this to-do list app can enhance your productivity and keep you
              effectively organized.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="https://password-generator-react-eta.vercel.app/">
                <p>Live demo</p>
              </Link>
            </button>
            <button className="px-8 py-2 mt-4">
              <Link href="https://github.com/AriNavarro23/password-generator-react.git">
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
                Next Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React-Dom
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
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

export default PasswordPage;
