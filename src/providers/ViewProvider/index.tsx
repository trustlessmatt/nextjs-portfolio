import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export enum HomeViews {
  HERO = "HERO",
  PORTFOLIO = "PORTFOLIO",
  ABOUT = "ABOUT",
  PRICING = "PRICING",
}

export interface IViewContext {
  view: HomeViews;
  setView: (view: HomeViews) => void;
}

export const ViewContext = createContext<IViewContext>({
  view: HomeViews.HERO,
  setView: () => null,
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

  const contextProvider = {
    view,
    setView,
  };
  return (
    <ViewContext.Provider value={contextProvider}>
      {children}
    </ViewContext.Provider>
  );
};
export default IndustryProvider;
