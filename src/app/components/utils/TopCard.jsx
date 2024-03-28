//-- Imports
import Image from "next/image";
import React from "react";

// Icons
import { FaLocationArrow } from "react-icons/fa";

const TopCard = ({ image, name, cost, days }) => {
  return (
    <div className="mx-[20px]  w-[250px] bg-white shadow-2xl rounded-3xl hover:scale-110 duration-200">
      <div className="flex flex-col items-center">
        <Image
          src={image}
          alt=""
          className="rounded-t-2xl h-[300px] w-[250px] object-cover "
        />
        <div className="bg-white pt-2 px-[30px] top flex flex-col relative bottom-[20px] h-[80px] rounded-b-2xl w-full z-1">
          <div className="flex justify-between">
            <p className="font-bold">{name}</p>
            <p className="font-bold">R{cost}</p>{" "}
          </div>
          <div className="flex items-center mt-[5px]">
            <FaLocationArrow color="blue" />
            <p className="px-[10px]"> {days} Days trip </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
