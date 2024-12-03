import { FC } from "react";
import { About, Hero, Portfolio } from "@/components";
import { HomeViews, useView } from "@/providers/ViewProvider";
import { AnimatePresence, motion } from "framer-motion";

const HomePage: FC = () => {
  const { view, viewVariants } = useView();

  return (
    <AnimatePresence mode="wait">
      {view === HomeViews.HOME && (
        <motion.div
          className="w-full h-full flex flex-col mt-10 overflow-hidden"
          variants={viewVariants}
          key="hero"
          initial="enter"
          animate="center"
          exit="exit"
        >
          <Hero />
        </motion.div>
      )}
      {view === HomeViews.PORTFOLIO && (
        <motion.div
          className="w-full h-full flex flex-col mt-10"
          variants={viewVariants}
          key="portfolio"
          initial="enter"
          animate="center"
          exit="exit"
        >
          <Portfolio />
        </motion.div>
      )}
      {view === HomeViews.ABOUT && (
        <motion.div
          className="w-full h-full flex flex-col mt-10"
          variants={viewVariants}
          key="about"
          initial="enter"
          animate="center"
          exit="exit"
        >
          <About />
        </motion.div>
      )}
      {/* {view === HomeViews.PRICING && <div>Pricing</div>} */}
    </AnimatePresence>
  );
};

export default HomePage;
