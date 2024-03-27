import React from "react";

const Navbar = () => {
  return (
    <section className=" w-screen ring-2  flex flex-row justify-center">
      <div className="fixed flex w-[80%] justify-between">
        <div className=""> Logo Here</div>
        <div className="flex flex-row ">
          <ul className="flex justify-between w-[600px] ring-1">
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
            <li>Login</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
