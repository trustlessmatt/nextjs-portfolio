import { FC } from "react";
import Image from "next/image";
import { NavButton } from "@/components";

const Nav: FC = () => {
  return (
    <div className="w-full flex items-center justify-between py-8">
      <Image src="/images/logo.png" width={80} height={80} alt="logo" />
      <NavButton>Say Hey</NavButton>
    </div>
  );
};

export default Nav;
