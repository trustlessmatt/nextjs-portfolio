import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useState,
} from "react";

export enum HomeViews {
  HERO = "HERO",
  PORTFOLIO = "PORTFOLIO",
  ABOUT = "ABOUT",
  PRICING = "PRICING",
}

// Convert enum to array for easy index access
const viewOrder = Object.values(HomeViews);

export const getViewIndex = (view: HomeViews) => {
  return viewOrder.indexOf(view);
};

export const variants = {
  enter: { opacity: 0, x: 0, transition: { duration: 1 } },
  center: { opacity: 1, x: 0, transition: { duration: 1 } },
  exit: { opacity: 0, x: -600, transition: { duration: 1 } },
};

export interface IViewContext {
  view: HomeViews;
  setView: (view: HomeViews) => void;
  hasRun: boolean;
  setHasRun: (hasRun: boolean) => void;
  viewVariants: typeof variants;
}

export const ViewContext = createContext<IViewContext>({
  view: HomeViews.HERO,
  setView: () => null,
  hasRun: false,
  setHasRun: () => null,
  viewVariants: variants,
});

export function useView(): IViewContext {
  return useContext(ViewContext);
}

interface IViewState {
  children?: React.ReactNode;
}
interface IViewProps {
  children?: ReactNode;
}

const IndustryProvider: FunctionComponent<IViewState> = ({
  children,
}: IViewProps) => {
  const [view, setView] = useState<HomeViews>(HomeViews.HERO);
  const [hasRun, setHasRun] = useState<boolean>(false);
  const [viewVariants, setViewVariants] = useState<typeof variants>(variants);

  const updateView = (newView: HomeViews) => {
    const currentIndex = getViewIndex(view);
    const newIndex = getViewIndex(newView);

    const direction = newIndex > currentIndex ? -600 : 600;

    const updatedVariants = {
      ...variants,
      enter: { ...variants.enter },
      exit: { ...variants.exit, x: -direction },
    };

    setViewVariants(updatedVariants);
    setView(newView);
  };

  const contextProvider = {
    view,
    setView: updateView,
    hasRun,
    setHasRun,
    viewVariants,
  };
  return (
    <ViewContext.Provider value={contextProvider}>
      {children}
    </ViewContext.Provider>
  );
};
export default IndustryProvider;
