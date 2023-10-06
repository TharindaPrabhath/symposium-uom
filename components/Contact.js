import React, { useMemo } from "react";

import { motion } from "framer-motion";

import getScrollAnimation from "../utils/getScrollAnimation";

import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div id="contact">
      <div className="max-w-screen-xl mt-12 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Contact
            </motion.h3>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Contact;
