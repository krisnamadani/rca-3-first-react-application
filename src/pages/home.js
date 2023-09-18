import React from "react";
import foto from "../images/foto.jpg";
import { PiLinkedinLogoBold, PiGithubLogoBold } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 flex gap-x-32 justify-center items-center lg:flex-row flex-col">
      <div className="lg:w-[500px]">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
          Pull Stack Developer 👋🏼
        </h1>
        <p className="mb-6">
          Hi, I'm Krisna Madani. A Pull Stack Developer based in Pontianak,
          Indonesia. 📍
        </p>
        <div className="flex flex-row gap-x-2">
          <Link
            className="hover:text-blue-500"
            to="https://www.linkedin.com/in/krisnamadani/"
            target="_blank"
          >
            <PiLinkedinLogoBold size={32} />
          </Link>
          <Link
            className="hover:text-blue-500"
            to="https://github.com/krisnamadani"
            target="_blank"
          >
            <PiGithubLogoBold size={32} />
          </Link>
        </div>
      </div>
      <img
        className="rounded-full w-80 h-80 object-cover border-4 border-black animate-[wiggle_1s_ease-in-out_infinite]"
        src={foto}
        alt="My Photos"
      />
    </div>
  );
}
