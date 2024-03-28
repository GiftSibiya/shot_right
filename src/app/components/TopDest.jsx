import React from "react";

const TopDest = () => {
  return (
    <section className="flex flex-col items-center w-[100%] h-[500px] my-[50px]">
      <div className="">
        <h3 className="text-center text-gray-600 font-bold text-[20px]">
          Top Selling
        </h3>
        <h2 className="text-center text-[50px] font-bold shadow-lg">
          Top <span className="text-blue-400">Destinations</span>
        </h2>
      </div>
    </section>
  );
};

export default TopDest;
