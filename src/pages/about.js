import React from "react";
import foto from "../images/setup.jpg";

export default function About() {
  return (
    <div className="h-screen bg-gray-100 flex gap-x-16 justify-center items-center lg:flex-row flex-col">
      <img className="h-80 rounded-2xl shadow-lg" src={foto} alt="My Photos" />
      <div className="lg:w-[500px]">
        <h4 class="text-2xl font-bold mb-4 text-blue-500">About Me</h4>

        <h3 class="text-3xl font-bold dark:text-black mb-4">
          A dedicated Pull Stack Developer based in Pontianak, Indonesia 📍
        </h3>

        <p class="text-gray-500 dark:text-gray-400">
          I am a fresh graduate majoring in computer systems engineering who is
          interested in making and developing applications. I have worked for 6
          months as a back-end developer using the PHP programming language,
          namely with the Laravel framework and using the MySQL database. Have a
          desire to learn, be able to get along and communicate well.
        </p>
      </div>
    </div>
  );
}
