import { FC } from "react";
import { Hero } from "@/components";
import { HomeViews, useView } from "@/providers/ViewProvider";

const HomePage: FC = () => {
  const { view } = useView();

  return (
    <div className="w-full h-full">
      {view === HomeViews.HERO && <Hero />}
      {view === HomeViews.PORTFOLIO && <div>Portfolio</div>}
      {view === HomeViews.ABOUT && <div>About</div>}
      {view === HomeViews.PRICING && <div>Pricing</div>}
    </div>
  );
};

export default HomePage;
