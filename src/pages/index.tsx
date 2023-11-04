import { Inter } from "next/font/google";
import { Hero, MovingGradientWrapper, Nav, Pricing } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MovingGradientWrapper>
      <main className={`${inter.className} px-16 w-screen`}>
        <div className="w-full h-screen">
          <Nav />
          <Hero />
        </div>
        <Pricing />
      </main>
    </MovingGradientWrapper>
  );
}
