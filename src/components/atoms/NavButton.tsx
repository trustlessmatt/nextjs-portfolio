import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { midClickAnimation } from "@/utils/framer.config";

interface Props {
  children: ReactNode;
}

const NavButton: FC<Props> = ({ children }) => {
  return (
    <motion.button
      className="border border-white flex items-center justify-center py-3 px-5 
      hover:px-10 transition-all ease-in-out duration-200 rounded-full text-white font-base"
      // {...midClickAnimation}
    >
      {children}
    </motion.button>
  );
};

export default NavButton;
