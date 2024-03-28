//-- Imports
import React from "react";

// Components
import CategoryTile from "./utils/CategoryTile";

// Images
import flightPng from "../../../public/assets/icons/icons8-flight-100.png";
import eventPng from "../../../public/assets/icons/icons8-circus-tent-100.png";
import gearPng from "../../../public/assets/icons/icons8-engineering-100.png";
import temperaturePng from "../../../public/assets/icons/icons8-temperature-low-100.png";

// Main
const Services = () => {
  return (
    <section className="flex justify-center w-[100%] h-[500px] my-[50px]">
      <div className="flex flex-col items-center w-[90%]">
        <h3 className="text-center text-gray-600 font-bold text-[20px]">
          Categories
        </h3>
        <h2 className="text-center text-[50px] font-bold shadow-lg">
          We Offer <span className="text-blue-400">World Class</span> Services.
        </h2>
        <div className="flex w-[80%] my-[100px] justify-between">
          <CategoryTile
            img={flightPng}
            title="Flight go Brrr"
            descr="Watch in awe as the flight go brrrrr in front of your face"
          />
          <CategoryTile
            img={eventPng}
            title="Flight go Brrr"
            descr="Watch in awe as the flight go brrrrr in front of your face"
          />
          <CategoryTile
            img={gearPng}
            title="Flight go Brrr"
            descr="Watch in awe as the flight go brrrrr in front of your face"
          />
          <CategoryTile
            img={temperaturePng}
            title="Flight go Brrr"
            descr="Watch in awe as the flight go brrrrr in front of your face"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
