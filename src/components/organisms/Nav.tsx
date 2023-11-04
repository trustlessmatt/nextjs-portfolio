import { FC, useState } from "react";
import { MAX_WIDTH } from "@/utils/constants";
import Image from "next/image";
import { NavButton } from "..";

const Nav: FC = () => {
  return (
    <div
      className="w-full flex items-center justify-between py-8"
      style={{ maxWidth: MAX_WIDTH }}
    >
      <Image src="/images/logo.png" width={80} height={80} alt="logo" />
      <div className="flex items-center gap-5 mt-10">
        <NavButton>Say Hello</NavButton>
      </div>
    </div>
  );
};

export default Nav;
