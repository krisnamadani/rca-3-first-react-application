import React from "react";

export default function Interest() {
  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center flex-col">
      <h3 className="text-3xl font-bold dark:text-black mb-4">Interest:</h3>
      <figure className="relative max-w-xl transition-all duration-300 cursor-pointer filter hover:grayscale">
        <a href="#game">
          <img
            className="rounded-lg"
            src="https://dailyspin.id/wp-content/uploads/2022/09/Tips-Push-Rank-Akhir-Season-ML.jpg"
            alt="mobile legends"
          />
        </a>
        <figcaption className="absolute px-4 text-lg text-white bottom-6">
          <p>
            Currently Playing Mobile Legends: Bang Bang, a multiplayer online
          </p>
        </figcaption>
      </figure>
    </div>
  );
}
