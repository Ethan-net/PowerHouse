import React from "react";
import Epcservice from "../assets/images/EpcService.svg";
import rooftop from "../assets/images/rooftopsolar.svg";
import groundMounted from "../assets/images/grountMounted.svg";

export default function Expertise() {
  return (
    <div className="bg-[#FFD6C9] py-14">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <h1 className="text-2xl md:text-3xl text-red-500 font-bold mb-12 text-center">
          Our Expertise
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* EPC Service */}
          <div className="hover:scale-105 transition-transform duration-500 shadow-md bg-white rounded-xl overflow-hidden">
            <h2 className="font-bold text-center pt-4 text-lg">EPC Service</h2>
            <img
              className="w-full object-cover"
              src={Epcservice}
              alt="EPC Service"
            />
            <div className="p-4 text-sm">
              <p>
                We offer service from site survey to solar installation and
                provide support in maintaining the system.
              </p>
            </div>
          </div>

          {/* Rooftop Solar Solution */}
          <div className="hover:scale-105 transition-transform duration-500 shadow-md bg-white rounded-xl overflow-hidden">
            <h2 className="font-bold text-center pt-4 text-lg">
              Rooftop Solar Solution
            </h2>
            <img
              className="w-full object-cover"
              src={rooftop}
              alt="Rooftop Solar"
            />
            <div className="p-4 text-sm">
              <p>
                Have a roof? We provide solar rooftop systems to utilize your
                roof and generate your own power.
              </p>
            </div>
          </div>

          {/* Ground Mounted Solution */}
          <div className="hover:scale-105 transition-transform duration-500 shadow-md bg-white rounded-xl overflow-hidden">
            <h2 className="font-bold text-center pt-4 text-lg">
              Ground Mounted Solution
            </h2>
            <img
              className="w-full object-cover"
              src={groundMounted}
              alt="Ground Mounted"
            />
            <div className="p-4 text-sm">
              <p>
                Our dedicated team of engineers provides ground-mounted solar
                system solutions to help you generate your own electricity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
