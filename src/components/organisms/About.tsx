import { FC } from "react";
import { useView, HomeViews, getAdjacentView } from "@/providers/ViewProvider";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const About: FC = () => {
  const { view, updateView } = useView();
  return (
    <>
      <p className="text-5xl lg:text-[100px] lg:leading-[100px] font-base-b text-white">
        About
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          className="flex items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 1 }}
        >
          <motion.button
            className="text-data font-base text-xl flex items-center gap-2 mt-5"
            onClick={() => updateView("prev")}
          >
            <ArrowLeft />
            <p>{getAdjacentView(view, "prev")}</p>
          </motion.button>
          <motion.button
            className="text-data font-base text-xl flex items-center gap-2 mt-5"
            onClick={() => updateView("next")}
          >
            {getAdjacentView(view, "next")}
            <ArrowRight />
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default About;
