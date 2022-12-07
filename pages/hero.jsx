import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-screen h-screen bg-[#ece0e0]">
        <div className="grid grid-cols-2">
          <div className="grid justify-center">
            <div className="">
              <div className="">
                <div className="">
                  <h5 className=""> Lorem IpSum</h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="grid place-content-start animate-bounce">
              <img src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670415404/icon6_wyqqlg.svg" />
            </div>
            <img
              className="animate-pulse "
              src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670414100/Pngtree_future_intelligent_technology_robot_ai_5766888_s8iq7a.png "
            />
            <div className="grid place-content-end animate-bounce">
              <img src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670415405/icon5_1_cbi1rg.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
