import { FC } from "react";
import { useView, HomeViews } from "@/providers/ViewProvider";
import { smallClickAnimation } from "@/utils/framer.config";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const About: FC = () => {
  const { setView } = useView();
  return (
    <>
      <p className="text-5xl lg:text-[100px] lg:leading-[100px] font-base-b text-white">
        About
      </p>
      <div className="flex items-center gap-5">
        <motion.button
          className="text-data font-base text-xl flex items-center gap-2 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          onClick={() => setView(HomeViews.HERO)}
        >
          {/* className="animate-bounce-right" */}
          <ArrowLeft />
          <p>Go Back</p>
        </motion.button>
        <motion.button
          className="text-data font-base text-xl flex items-center gap-2 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          onClick={() => setView(HomeViews.PRICING)}
        >
          <p>Contact</p>
          {/* className="animate-bounce" */}
          <ArrowRight />
        </motion.button>
      </div>
    </>
  );
};

export default About;
