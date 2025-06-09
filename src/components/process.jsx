import React from "react";
import "../App.css";
import step1 from "../assets/images/s1.svg";
import step2 from "../assets/images/s2.svg";
import step3 from "../assets/images/s3.svg";
import step4 from "../assets/images/f4.svg";
import step5 from "../assets/images/s4.svg";
import step6 from "../assets/images/s5.svg";

export default function Process() {
  const steps = [
    { img: step1, text: "Fill the Site Survey Form", step: "Step 1" },
    { img: step2, text: "Request For Site Inspection", step: "Step 2" },
    { img: step3, text: "Get Quotation", step: "Step 3" },
    { img: step4, text: "Installation", step: "Step 4" },
    { img: step5, text: "Inspection", step: "Step 5" },
    { img: step6, text: "Ready to Use", step: "Step 6" },
  ];

  return (
    <div className="process text-center px-6 md:px-[10%] py-14">
      <h1 className="text-3xl md:text-4xl font-semibold mb-12">
        Installation Process
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {steps.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img
              src={item.img}
              alt={item.text}
              className="w-24 h-24 object-contain"
            />
            <p className="text-sm font-medium">{item.text}</p>
            <h1 className="font-bold text-red-500">{item.step}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
