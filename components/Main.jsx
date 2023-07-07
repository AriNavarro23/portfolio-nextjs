import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const email = "navarro.ari.dev@gmail.com";
  return (
    <div id="main" className="w-full h-screen text-center py-16">
      <div className="max-w-[1240px] w-full mx-auto p-2 flex justify-center items-center flex-col py-16">
        <p className="uppercase text-sm tracking-widest text-gray-600">
          Let is build something together
        </p>
        <h1 className="py-4 text-gray-700">
          Hi, I am <span className="text-[#5651e5]">Ariel</span>
        </h1>
        <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
        <p className="py-4 text-gray-600 max-w-[70%]">
          I am a front-end webdeveloper specializing in building (and
          occasionally designing) exceptional websites, applications, and
          everything in between. Currently, I am focused on building responsive
          front-end web applications while learning more about the back-end.
        </p>
        <div className="flex items-center justify-between max-w-[330px] py-4">
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="https://www.linkedin.com/in/ariel-navarro-42381a240">
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="https://github.com/AriNavarro23">
              <FaGithub />
            </Link>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href={`mailto:${email}`}>
              <AiOutlineMail />
            </Link>
          </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 m-2 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href="https://www.linkedin.com/in/ariel-navarro-42381a240">
              <BsFillPersonLinesFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
