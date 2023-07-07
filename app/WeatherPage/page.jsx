import React from "react";
import Link from "next/link";
import Weather from "@/public/assets/projects/weather.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";

const WeatherPage = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[35vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[35vh] bg-black/70 z-10" />
        <Image
          className="relative z-1"
          style={{ objectFit: "cover" }}
          layout="fill"
          src={Weather}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Weather App</h2>
          <h3>React JS / Bootstrap</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-6">
        <div className="col-span-4 ">
          <div className="py-4 flex flex-col items-center">
            <h2 className="py-2">Overview</h2>
            <p>
              Introducing the ultimate weather app built with JavaScript,
              React.js, Bootstrap, and React Router DOM! With a sleek and
              intuitive design, this app provides real-time weather updates
              right at your fingertips. Get accurate forecasts for your current
              location or search for any city worldwide. Seamlessly navigate
              through the app with the help of React Router DOM, ensuring a
              smooth and responsive user experience. Whether you are planning
              your day, a trip, or simply want to stay informed, this weather
              app is your go-to companion for all your weather needs.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="px-8 py-2 mt-4 mr-8">
              <Link href="http://weather-app-silk-gamma.vercel.app">
                <p>Live demo</p>
              </Link>
            </button>
            <button className="px-8 py-2 mt-4">
              <Link href="https://github.com/AriNavarro23/weather_app.git">
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
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React-router-dom
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Spinners
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

export default WeatherPage;
