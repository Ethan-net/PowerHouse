import React from "react";
import image1 from "../assets/images/image1.svg";
import image2 from "../assets/images/image2.svg";
import "../App.css";

export default function HeroTwo() {
  return (
    <div className="herotwo px-6 md:px-[10%] py-16">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-16 text-red-500">
        One time Investment, Lifetime Saving
      </h1>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
        <img
          className="rounded-lg w-full md:w-1/2 object-contain"
          src={image1}
          alt="About Powerhouse"
        />
        <div className="text-sm md:text-base text-gray-700">
          <h2 className="text-xl font-semibold mb-4">
            About Powerhouse, the Best Solar Company in Nigeria.
          </h2>
          <p>
            Powerhouse, a beacon of sustainable energy solutions, stands as the
            premier solar company in Nigeria, exemplifying excellence in
            harnessing the power of the sun to drive a brighter, cleaner future.
            With a steadfast commitment to innovation, reliability, and
            environmental responsibility, Powerhouse has emerged as the go-to
            provider for solar energy solutions in the region.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-sm md:text-base text-gray-700">
          <p>
            <strong>
              Customer satisfaction is at the forefront of Powerhouse's mission.
            </strong>{" "}
            The company takes pride in providing personalized consultations to
            understand the unique requirements of each client, offering bespoke
            solar solutions that maximize energy production and minimize
            environmental impact.{" "}
            <strong>
              From initial project assessment to post-installation support,
              Powerhouse's customer-centric approach ensures a seamless and
              satisfying experience for every client.
            </strong>
          </p>
        </div>
        <img
          className="rounded-lg w-full md:w-1/2 object-contain"
          src={image2}
          alt="Customer Satisfaction"
        />
      </div>
    </div>
  );
}
