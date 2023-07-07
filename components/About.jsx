import React from "react";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] col-span-2">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            Hello there! I am Ariel, a passionate front-end developer with
            a keen eye for design and a strong dedication to creating
            exceptional user experiences. With 2 years of experience in
            the field, I have honed my skills in HTML, CSS, and JavaScript to
            transform creative concepts into functional and visually appealing
            websites. I thrive on tackling challenges head-on and constantly
            stay updated with the latest web development trends and
            technologies. From wireframing and prototyping to implementing
            responsive designs, I strive to craft elegant and intuitive
            interfaces that not only engage users but also deliver seamless
            navigation. Alongside my technical expertise, I value collaboration
            and effective communication, working closely with clients and
            multidisciplinary teams to ensure project success.
          </p>
          <p className="py-2 text-gray-600">
            Through my work, I aim to blend aesthetics with usability, creating
            immersive digital experiences that leave a lasting impression. I am
            excited to bring my skills, creativity, and passion for front-end
            development to contribute to your next web project.
          </p>
          <p className="py-6 text-gray-600 underline cursor-pointer">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            width="500"
            height="500"
            src="/../public/images/laptopBlack.png"
            alt="laptop black"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
