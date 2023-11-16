import { FC } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { smallClickAnimation } from "@/utils/framer.config";
import { HomeViews, useView } from "@/providers/ViewProvider";
import { Project } from "..";

const Portfolio: FC = () => {
  const { setView } = useView();
  return (
    <>
      <p className="text-5xl lg:text-[100px] lg:leading-[100px] font-base-b text-white">
        Portfolio
      </p>
      <motion.button
        {...smallClickAnimation}
        className="text-data font-base text-xl flex items-center gap-1 mt-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        onClick={() => setView(HomeViews.HERO)}
      >
        <ArrowLeft className="animate-bounce-right pr-1" />
        <p>Go Back</p>
      </motion.button>
      <div className="flex justify-center gap-5 mt-16">
        {/* left column */}
        <div className="flex flex-col gap-5">
          <Project
            title="DeGods Explorer"
            description="This is a project description"
            tags={["tag1", "tag2", "tag3"]}
            media="/images/portfolio/DeGods_Explorer.png"
          />
          <Project
            title="All In Time"
            description="This is a project description"
            tags={["tag1", "tag2", "tag3"]}
            media="/images/portfolio/All_In_Time.png"
          />
          <Project
            title="DeGods Explorer"
            description="This is a project description"
            tags={["tag1", "tag2", "tag3"]}
            media="/images/portfolio/DeGods_Explorer.png"
          />
          <Project
            title="All In Time"
            description="This is a project description"
            tags={["tag1", "tag2", "tag3"]}
            media="/images/portfolio/All_In_Time.png"
          />
        </div>
        <div className="flex flex-col gap-5">
          <Project
            title="DeGods Explorer"
            description="This is a project description"
            tags={["tag1", "tag2", "tag3"]}
            media="/images/portfolio/DeGods_Explorer.png"
          />
          <Project
            title="All In Time"
            description="This is a project description"
            tags={["tag1", "tag2", "tag3"]}
            media="/images/portfolio/All_In_Time.png"
          />
          <Project
            title="DeGods Explorer"
            description="This is a project description"
            tags={["tag1", "tag2", "tag3"]}
            media="/images/portfolio/DeGods_Explorer.png"
          />
          <Project
            title="All In Time"
            description="This is a project description"
            tags={["tag1", "tag2", "tag3"]}
            media="/images/portfolio/All_In_Time.png"
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
