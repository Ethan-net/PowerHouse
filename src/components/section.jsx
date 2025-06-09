import React from "react";
import "../App.css";
import CountUp from "react-countup";

export default function Section() {
  return (
    <div className="relative h-[50vh] overflow-hidden">
      {/* Background video */}
      <video
        src="https://videos.pexels.com/video-files/15046674/15046674-sd_960_506_24fps.mp4"
        className="w-full h-full object-cover absolute top-0 left-0"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black/50 px-6">
        <h1 className="text-xl md:text-2xl font-bold max-w-4xl mb-8">
          "Powerhouse: Illuminating Excellence, Delivering High-Quality Projects
          with Precision and Commitment."
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 text-white text-sm">
          <div>
            <h1 className="text-3xl font-bold">
              <CountUp end={350} delay={0.5} />+
            </h1>
            <p>Solar Systems Installed</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              <CountUp end={1000} delay={0.5} />+
            </h1>
            <p>Rooftop Solar Panels</p>
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              <CountUp end={500} delay={0.5} />+
            </h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
