import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAdjacentView, useView } from "@/providers/ViewProvider";
import { Project } from "..";

const Portfolio: FC = () => {
  const { view, updateView } = useView();
  return (
    <>
      <p className="text-5xl lg:text-[90px] lg:leading-[90px] font-base-b text-white">
        Product Portfolio
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
            {getAdjacentView(view, "prev")}
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

      <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-2 gap-3 md:gap-5 px-3 sm:px-0 my-16">
        <Project
          title="DeGods Explorer"
          description="An NFT explorer for the DeGods collection on Ethereum."
          href="https://degods.com/explorer?id=&tab=overview"
          tags={["React", "Typescript", "NextJS", "Tailwind", "web3.js"]}
          media="/images/portfolio/DeGods_Explorer.png"
        />
        <Project
          title="All In Time"
          description="A branding website for a Web3 artist's clothing company."
          href="https://allintime.com/"
          tags={["React", "Typescript", "NextJS", "Tailwind", "Figma"]}
          media="/images/portfolio/All_In_Time.png"
        />
        <Project
          title="solan.ai"
          description="An AI agent that can answer questions about Solana with real-time data."
          href="https://solan.ai/"
          tags={[
            "AI",
            "Typescript",
            "NextJS",
            "Tailwind",
            "Solana",
            "Metaplex UMI",
          ]}
          media="/images/portfolio/solanai.png"
        />
        <Project
          title="Degen Picks"
          description="A peer-to-peer prediction game on Solana."
          href="https://app.degenspicks.xyz/"
          tags={["React", "Typescript", "NextJS", "Tailwind", "web3.js"]}
          media="/images/portfolio/degenpicks.png"
        />
        <Project
          title="Mickey DeGods"
          description="A marketing website for a Web3 NFT brand."
          href="https://mickeydegods.com/"
          tags={[
            "React",
            "Typescript",
            "NextJS",
            "Tailwind",
            "Prisma",
            "mySQL",
          ]}
          media="/images/portfolio/mickeydegods.png"
        />
      </div>
    </>
  );
};

export default Portfolio;
