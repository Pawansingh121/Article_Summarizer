import React from "react";
import logo from "../assets/logo.ico";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <nav className="flex items-center gap-2 mt-2">
          <img className="h-[40px] md:h-[50px]" src={logo} alt="" />
          <h1 className="font-extrabold text-4xl md:text-5xl text-rose-800">
            QuickReads
          </h1>
        </nav>
        <h1 className="mt-12 text-3xl font-extrabold leading-[1.15] text-black md:text-4xl text-center">
          Summarize Articles with <br />
          <span className="text-yellow-500">OpenAI GPT-4</span>
        </h1>
        <h2 className="mt-5 text-md text-gray-500 sm:text-lg text-center max-w-2xl">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries.
        </h2>
      </div>
    </>
  );
};

export default Hero;
