import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { easeIn } from "framer-motion";

const viewVariantsInitial = {
  enter: { opacity: 0, x: 0, transition: { duration: 0.6 } },
  center: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: -600, transition: { duration: 0.6, ease: easeIn } },
};

type ViewContextType = {
  view: HomeViews;
  setView: (view: HomeViews) => void;
  decodeHasRun: boolean;
  setDecodeHasRun: (decodeHasRun: boolean) => void;
  viewVariants: typeof viewVariantsInitial;
  updateView: (direction: "next" | "prev") => void;
};

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export enum HomeViews {
  HOME = "Home",
  PORTFOLIO = "Portfolio",
  ABOUT = "About",
  // PRICING = "Pricing",
}
export const getAdjacentView = (
  current: HomeViews,
  direction: "next" | "prev"
): HomeViews | undefined => {
  const values = Object.values(HomeViews);
  const currentIndex = values.indexOf(current);
  const targetIndex =
    direction === "next" ? currentIndex + 1 : currentIndex - 1;
  return values[targetIndex] as HomeViews;
};

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<HomeViews>(HomeViews.HOME);
  const [decodeHasRun, setDecodeHasRun] = useState<boolean>(false);
  const [viewVariants, setViewVariants] = useState(viewVariantsInitial);

  const updateView = (direction: "next" | "prev") => {
    const newView = getAdjacentView(view, direction);
    if (!newView) return;

    // Get numerical positions of current and new view
    const currentPosition = Object.values(HomeViews).indexOf(view);
    const newPosition = Object.values(HomeViews).indexOf(newView);

    // Determine animation direction based on position difference
    const animationDirection = newPosition > currentPosition ? -600 : 600;

    const updatedVariants = {
      ...viewVariants,
      enter: { ...viewVariants.enter, x: -animationDirection }, // Enter from opposite direction
      exit: { ...viewVariants.exit, x: animationDirection },
    };

    // Update variants first
    setViewVariants(updatedVariants);

    // Use setTimeout to ensure variant update happens before view change
    setTimeout(() => {
      setView(newView);
    }, 0);
  };

  useEffect(() => {
    console.log("viewIndex", Object.values(HomeViews).indexOf(view));
  }, [view]);

  return (
    <ViewContext.Provider
      value={{
        view,
        setView,
        decodeHasRun,
        setDecodeHasRun,
        viewVariants,
        updateView,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
