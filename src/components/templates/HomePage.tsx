import { FC } from "react";
import { Hero, Portfolio } from "@/components";
import { HomeViews, useView } from "@/providers/ViewProvider";
import { AnimatePresence, motion } from "framer-motion";

const HomePage: FC = () => {
  const { view, viewVariants } = useView();

  return (
    <AnimatePresence mode="wait">
      {view === HomeViews.HERO && (
        <motion.div
          className="w-full h-full flex flex-col mt-10 overflow-hidden"
          style={{ height: `calc(100vh - 196px)` }}
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
      {view === HomeViews.ABOUT && <div>About</div>}
      {view === HomeViews.PRICING && <div>Pricing</div>}
    </AnimatePresence>
  );
};

export default HomePage;
