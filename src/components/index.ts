import dynamic from "next/dynamic";

// @icons
const Check = dynamic(() => import("./@icons/Check"));

// atoms
const DecodedText = dynamic(() => import("./atoms/DecodedText"));
const NavButton = dynamic(() => import("./atoms/NavButton"));

// molecules
const PricingCard = dynamic(() => import("./molecules/PricingCard"));

// organisms
const Hero = dynamic(() => import("./organisms/Hero"));
const Nav = dynamic(() => import("./organisms/Nav"));
const Pricing = dynamic(() => import("./organisms/Pricing"));

// templates
const MovingGradientWrapper = dynamic(
  () => import("./templates/MovingGradientWrapper")
);

export {
  Check,
  DecodedText,
  NavButton,
  PricingCard,
  Hero,
  Nav,
  Pricing,
  MovingGradientWrapper,
};
