import Image from "next/image";
import React from "react";

const CategoryTile = ({ img, title, descr }) => {
  return (
    <div className="flex flex-col items-center h-[250px] w-[220px] rounded-2xl py-[20px] px-[40px] shadow-xl hover:scale-110 duration-75 ">
      <Image src={img} alt="" />
      <p className="text-center my-2 font-bold text-gray-700">{title}</p>
      <p className="text-center text-sm">{descr}</p>
    </div>
  );
};

export default CategoryTile;
