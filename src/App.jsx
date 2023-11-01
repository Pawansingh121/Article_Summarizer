import React from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";

const App = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen  max-h-full ">
      <Hero />
      <Demo />
    </div>
  );
};

export default App;
