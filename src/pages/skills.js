import React from "react";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoTailwindCss,
  BiLogoReact,
} from "react-icons/bi";

import { FaLaravel } from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center flex-col">
      <h4 class="text-2xl font-bold dark:text-black mb-4">Tech Stack:</h4>
      <ul className="flex flex-wrap items-center justify-center text-gray-900 dark:text-black gap-x-2">
        <li>
          <a href="#html" className="hover:text-blue-500">
            <BiLogoHtml5 size={48} />
          </a>
        </li>
        <li>
          <a href="#css" className="hover:text-blue-500">
            <BiLogoCss3 size={48} />
          </a>
        </li>
        <li>
          <a href="#javascript" className="hover:text-blue-500">
            <BiLogoJavascript size={48} />
          </a>
        </li>
        <li>
          <a href="#php" className="hover:text-blue-500">
            <BiLogoPhp size={48} />
          </a>
        </li>
        <li>
          <a href="#tailwind" className="hover:text-blue-500">
            <BiLogoTailwindCss size={48} />
          </a>
        </li>
        <li>
          <a href="#react" className="hover:text-blue-500">
            <BiLogoReact size={48} />
          </a>
        </li>
        <li>
          <a href="#next" className="hover:text-blue-500">
            <SiNextdotjs size={48} />
          </a>
        </li>
        <li>
          <a href="#laravel" className="hover:text-blue-500">
            <FaLaravel size={48} />
          </a>
        </li>
      </ul>
    </div>
  );
}
