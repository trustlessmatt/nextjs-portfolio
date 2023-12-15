import dynamic from "next/dynamic";

// @icons
const Check = dynamic(() => import("./@icons/Check"));

// atoms
const DecodedText = dynamic(() => import("./atoms/DecodedText"));
const MovingGradient = dynamic(() => import("./atoms/MovingGradient"));
const NavButton = dynamic(() => import("./atoms/NavButton"));

// molecules
const PricingCard = dynamic(() => import("./molecules/PricingCard"));
const Project = dynamic(() => import("./molecules/Project"));

// organisms
const About = dynamic(() => import("./organisms/About"));
const Hero = dynamic(() => import("./organisms/Hero"));
const Nav = dynamic(() => import("./organisms/Nav"));
const Portfolio = dynamic(() => import("./organisms/Portfolio"));
const Pricing = dynamic(() => import("./organisms/Pricing"));

// templates
const HomePage = dynamic(() => import("./templates/HomePage"));
const MovingGradientWrapper = dynamic(
  () => import("./templates/MovingGradientWrapper")
);

export {
  // @icons
  Check,
  // atoms
  DecodedText,
  MovingGradient,
  NavButton,
  PricingCard,
  Project,
  // organisms
  About,
  Hero,
  Nav,
  Portfolio,
  Pricing,
  // templates
  HomePage,
  MovingGradientWrapper,
};
