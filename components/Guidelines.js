import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// Icons
import {
  FlaskConical,
  PencilRuler,
  Laptop,
  Cpu,
  Plug,
  Settings,
  PackageOpen,
  Shirt,
  Leaf,
} from "lucide-react";
import Link from "next/link";

const AllowedTracks = [
  {
    title: "Chemical and Process Engineering",
    icon: FlaskConical,
  },
  {
    title: "Civil Engineering",
    icon: PencilRuler,
  },
  {
    title: "Computer Science and Engineering",
    icon: Laptop,
  },
  {
    title: "Earth Resources Engineering",
    icon: Leaf,
  },
  {
    title: "Electrical Engineering",
    icon: Plug,
  },
  {
    title: "Electronic and Telecommunication Engineering",
    icon: Cpu,
  },
  {
    title: "Material Science and Engineering",
    icon: Leaf,
  },
  {
    title: "Mechanical Engineering",
    icon: Settings,
  },
  {
    title: "Supply Chain Management and Logistics",
    icon: PackageOpen,
  },
  {
    title: "Textile and Apparel Engineering",
    icon: Shirt,
  },
];

const Guidelines = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div id="guidelines">
      <div className="max-w-screen-xl py-6 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Guidelines
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="mx-auto my-2 text-center text-lg"
            >
              Extended abstract submission deadline{" "}
              <strong className="text-orange-500">16th of Oct, 2023</strong>
            </motion.p>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-lg"
            >
              ERU 2023 accepts extended abstracts of research under following
              tracks
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {AllowedTracks.map((track) => (
              <ScrollAnimationWrapper>
                <motion.div
                  variants={scrollAnimation}
                  // className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
                >
                  <TrackCard
                    key={track.title}
                    title={track.title}
                    icon={track.icon}
                  />
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-lg">
              More information regarding to poster design and template,{" "}
              <span className="text-orange-500">
                <Link href="https://bit.ly/ERUS2023" target="_blank">
                  Click Here
                </Link>
              </span>{" "}
              to see more
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with
              great pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div> */}
      </div>
    </div>
  );
};

export default Guidelines;

const TrackCard = ({ title, icon }) => {
  const Icon = icon;
  return (
    <div className="py-6 px-4 shadow-md rounded-md flex items-center justify-center gap-2">
      <Icon className="w-6 h-6" />
      <p>{title}</p>
    </div>
  );
};
