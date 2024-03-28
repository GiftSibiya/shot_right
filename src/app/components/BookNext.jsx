//-- Imports
import React from "react";

// Components
import BookTile from "./utils/BookTile";

// Icons
import { GiChoice } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { FaTaxi } from "react-icons/fa6";

const BookNext = () => {
  return (
    <section className="flex justify-center w-[100%] h-[500px] my-[50px]">
      <div className="flex w-[90%] justify-between">
        <div className="flex flex-col">
          <p>Easy and Fast</p>
          <h3 className="text-[50px]">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h3>
          <div className="">
            <BookTile
              icon={<GiChoice color="white" />}
              color="orange"
              title="Choose Destination"
              descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente reiciendis deserunt accusantium a dolor voluptate corrupti, "
            />
            <BookTile
              icon={<MdOutlinePayment color="white" />}
              color="red"
              title="Make Payment"
              descr=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente reiciendis deserunt accusantium a dolor voluptate corrupti, "
            />
            <BookTile
              icon={<FaTaxi color="white" />}
              color="blue"
              title="Reach Airport on selected Date"
              descr=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente reiciendis deserunt accusantium a dolor voluptate corrupti, "
            />
          </div>
        </div>
        <div className="">Two</div>
      </div>
    </section>
  );
};

export default BookNext;
