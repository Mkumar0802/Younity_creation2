import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";

function HeroPage() {
  return (
    <div className="  w-screen h-screen bg-[#ece0e0]">
      <div className="grid place-content-stretch ">
        <Image
          src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670415405/icon5_1_cbi1rg.svg"
          alt="sample"
        />
      </div>
      <div className="grid place-content-around ">
        <Image
          src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670483946/icon2_lhvggq.svg"
          alt="sample"
        />
      </div>
      <div className="container mx-auto">
        <div className="grid flex-col md:grid-cols-2 ">
          <div className="grid justify-center">
            <div className="grid place-content-center">
              <div className="">
                <div>
                  <h5 className="text-[#6c4f4f] text-4xl font-Roboto font-semibold">
                    HI
                  </h5>
                </div>
                <div>
                  <div className="grid w-3/4 align-content-center ">
                    <h5 className="text-[#6c4f4f] text-4xl font-Roboto font-semibold">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci, repellat.
                    </h5>
                    <h5 className="">
                      <Typewriter
                        options={{
                          strings: ["Lorem Ipsum", "Lorem Ipsum text,testpage"],
                          autoStart: true,
                          loop: true,
                          wrapperClassName:
                            "text-md md:text-2xl lg:text-3xl font-Roboto",
                          cursorClassName: "text-md md:text-2xl lg:text-3xl",
                        }}
                      />
                    </h5>
                  </div>
                  <div className="grid gap-x-40 place-content-evenly ">
                    <Image
                      src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670483946/icon1_aafyg5.svg"
                      alt="sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="grid place-content-end ">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 4, repeat: Infinity }}
              >
                <Image
                  src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670415404/icon6_wyqqlg.svg"
                  alt="sample"
                />
              </motion.div>
            </div>
            <div className="">
              <motion.div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 30,
                  backgroundColor: "#fff",
                }}
                animate={{ rotate: 180 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 100,
                  ease: "linear",
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              <motion.div
                style={{ left: 0, right: 100 }}
                animate={{ x: 100 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  mass: 0.75,
                  stiffness: 10,
                }}
              >
                <Image
                  className=""
                  src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670414100/Pngtree_future_intelligent_technology_robot_ai_5766888_s8iq7a.png "
                  alt="sample"
                />
              </motion.div>
              <div className="grid gap-x-40 place-content-evenly ">
                <Image src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670483946/icon2_lhvggq.svg" alt="sample" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid place-content-baseline ">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }}
        >
          <Image src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670415405/icon5_1_cbi1rg.svg"  alt="sample" />
        </motion.div>
      </div>
      <div className="grid place-content-evenly ">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }}
        >
          <Image
            src="https://res.cloudinary.com/drywqd3hf/image/upload/v1670483946/icon7_rkpudg.svg"
            alt=" sample"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HeroPage;
