import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { smallClickAnimation } from "@/utils/framer.config";
import { HomeViews, useView } from "@/providers/ViewProvider";

const Portfolio: FC = () => {
  const { setView } = useView();
  return (
    <>
      <motion.div className="w-full flex flex-col lg:items-end gap-12">
        <p className="text-secondary font-base sm:text-lg lg:text-3xl xl:text-[40px] xl:leading-[39px] sm:w-2/3 mt-8 lg:mt-20">
          I&apos;m <span className="text-data">Matt Pfeifer</span>. I build
          surprisingly delightful internet experiences, and use blockchains to
          help make the internet more <span className="text-data">fair</span>,{" "}
          <span className="text-data">open</span>, and{" "}
          <span className="text-data">fun</span>.
        </p>
        <p className="text-secondary font-base sm:text-lg lg:text-3xl xl:text-[40px] xl:leading-[39px] sm:w-2/3">
          As a lifelong learner, cutting-edge tech thrills me. The desire to
          find the next big thing led me to exit my public sector job in 2021 to
          pursue Blockchain and AI, and live to tell the tale.
        </p>
        <div className="sm:w-2/3">
          <motion.button
            {...smallClickAnimation}
            className="text-data font-base text-xl flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={() => setView(HomeViews.HERO)}
          >
            <p>View My Work</p>
            <ArrowRight className="animate-bounce-right" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
