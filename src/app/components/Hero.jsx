import React from "react";

// Icons
import { MdPlayCircle } from "react-icons/md";

const Hero = () => {
  return (
    <section className="flex justify-center h-[600px] w-[100%]">
      <div className=" w-[90%]">
        <div className="flex flex-col">
          <h3 className="mt-[100px] text-3xl font-bold ">
            Get to Know <span className="text-blue-400  "> South Africa</span>
          </h3>
          <h1 className="text-[60px] font-bold w-[620px] rounded-2xl shadow-xl p-2">
            Travel, Enjoy <br /> and live <br />a new refreshing life
          </h1>
          <hr className="w-[600px] border-2 border-blue-400" />
          <p className="text-sm w-[600px] my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            sapiente reiciendis deserunt accusantium a dolor voluptate corrupti,
            consequatur soluta autem quasi quibusdam saepe voluptatum mollitia
            vitae quo voluptatem illo natus vel in rerum. Sed deleniti eum
            accusamus consectetur neque minima.{" "}
          </p>
          <div className="flex justify-between w-[300px] my-2">
            <button className="p-2 rounded-md font-bold text-blue-400 border-blue-400 border-2">
              Find Out More
            </button>
            <div className="flex items-center bg-blue-400 p-2 rounded-md">
              <MdPlayCircle color="white" />
              <p className="">Play Demo</p>
            </div>
          </div>
        </div>
        <div className="">Main Pic</div>
      </div>
    </section>
  );
};

export default Hero;
