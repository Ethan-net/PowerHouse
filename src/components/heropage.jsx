import "../App.css";
import bulbimg from "../assets/images/bulbimg.png"; // You can swap this with a carousel if needed
import { Carousel } from "flowbite-react";

export default function Heropage() {
  return (
    <div className="hero flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-[10%] py-10">
      {/* Left Section */}
      <div className="bg-red-500/80 rounded-lg p-8 flex flex-col justify-center items-center text-center md:text-left w-full md:w-1/2">
        <h1 className="usecase text-4xl md:text-6xl text-white font-bold">
          Solar System Solution
        </h1>
        <p className="text-black font-bold mt-6 mb-10 text-sm md:text-base">
          Practical renewable energy technology that reduces costs and helps the
          environment
        </p>
        <button className="quoteBut bg-black text-white px-6 py-3 rounded-2xl text-xs hover:duration-700 hover:transition">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        {/* Option 1: Static Image */}

        {/* Option 2: Carousel Example (uncomment if needed) */}
        {/* 
        <Carousel className="w-full max-w-md">
          <img src={bulbimg} alt="Slide 1" />
          <img src={solarIcon} alt="Slide 2" />
        </Carousel> 
        */}
      </div>
    </div>
  );
}
