import React from "react";
import home from "../assets/images/home.svg";
import pannel from "../assets/images/pannelinstall.svg";
import call from "../assets/images/call.svg";
import maintenance from "../assets/images/maintenance.svg";

export default function Moreservice() {
  return (
    <div className="w-full py-16 bg-white">
      <section className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 w-[90%] md:w-[80%] mx-auto text-center">
        <div className="flex flex-col items-center">
          <img className="w-16 mb-2" src={home} alt="Free Home Assessment" />
          <h2 className="text-sm md:text-base font-medium">
            Free Home Assessment
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 mb-2"
            src={pannel}
            alt="Hassle Free Installation"
          />
          <h2 className="text-sm md:text-base font-medium">
            Hassle Free Installation
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-16 mb-2" src={call} alt="Customer Support" />
          <h2 className="text-sm md:text-base font-medium">Customer Support</h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-16 mb-2"
            src={maintenance}
            alt="2 Year Maintenance Free"
          />
          <h2 className="text-sm md:text-base font-medium">
            2 Year Maintenance Free
          </h2>
        </div>
      </section>
    </div>
  );
}
