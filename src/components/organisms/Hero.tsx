import { FC } from "react";
import { DecodedText } from "@/components";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <DecodedText
        text="Hello, World!"
        duration={3000}
        className="text-[120px] font-base-black"
      />
      <motion.div
        className="w-full flex justify-end"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3.5 }}
      >
        <p className="text-secondary font-base text-[40px] leading-[39px] w-1/2 mt-20">
          I&apos;m Matt Pfeifer. I build surprisingly delightful internet
          experiences, and use blockchains to help create a more{" "}
          <span className="text-data">fair</span> and{" "}
          <span className="text-data">open</span> internet.
        </p>
      </motion.div>
      {/* <button className="w-full animate-bounce text-white">more</button> */}
    </div>
  );
};

export default Hero;
