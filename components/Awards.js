import React, { useMemo } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "../utils/getScrollAnimation";

import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// Icons
import { Award, Check } from "lucide-react";

const Awards = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div id="awards">
      <div className="max-w-screen-xl mt-12 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Awards
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 mx-auto">
            <AwardCard title="Best Extended Abstract" />
            <AwardCard title="Best Poster" />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          <div className="flex flex-row items-center justify-center">
            <Check className="w-6 h-6 mr-2" />
            <p className="text-lg font-semibold">
              A valuable certificate will be received
            </p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Check className="w-6 h-6 mr-2" />
            <p className="text-lg font-semibold">
              The abstracts will be published with a DOI in the University of
              Moratuwa Library Website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;

const AwardCard = ({ title }) => {
  return (
    <div className="flex items-center gap-4 ">
      <div className="rounded-full shadow-md flex items-center justify-center p-6">
        <Award className="w-14 h-14" />
      </div>
      <div>
        <p className="text-xl font-semibold">{title}</p>
      </div>
    </div>
  );
};
