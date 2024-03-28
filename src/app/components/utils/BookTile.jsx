import Image from "next/image";
import React from "react";

const BookTile = ({ icon, title, descr, color }) => {
  return (
    <div className="flex">
      <div
        style={{ backgroundColor: color }}
        className="size-10 flex justify-center items-center rounded-2xl"
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p>{descr}</p>
      </div>
    </div>
  );
};

export default BookTile;
