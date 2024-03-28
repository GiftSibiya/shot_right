//-- Imports
import React from "react";

// Components
import TopCard from "./utils/TopCard";

// Images
import sowetoImg from "../../../public/assets/images/soweto.jpg";
import capeTownImg from "../../../public/assets/images/capeTown.jpg";
import krugerImg from "../../../public/assets/images/kruger.jpg";

const TopDest = () => {
  return (
    <section className="flex flex-col items-center w-[100%] h-[700px] my-[50px]">
      <div className="">
        <h3 className="text-center text-gray-600 font-bold text-[20px]">
          Top Selling
        </h3>
        <h2 className="text-center text-[50px] font-bold shadow-lg rounded-xl">
          Top <span className="text-blue-400">Destinations</span>
        </h2>
        <p className="mt-[20px] text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum odit{" "}
          ea reprehenderit <br /> at eveniet eum dicta quisquam molestias
          perspiciatis nobis!
        </p>
        <div className="flex my-[50px]">
          <TopCard image={sowetoImg} name="Soweto" cost="5.2k" days="13" />
          <TopCard image={capeTownImg} name="Cape Town" cost="4.3k" days="13" />
          <TopCard
            image={krugerImg}
            name="Kruger National"
            cost="6.1k"
            days="13"
          />
        </div>
      </div>
    </section>
  );
};

export default TopDest;
