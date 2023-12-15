import { HomePage, MovingGradientWrapper, Nav } from "@/components";
import { MAX_WIDTH } from "@/utils/constants";

export default function Home() {
  return (
    <MovingGradientWrapper>
      <main
        className="px-16 w-screen flex flex-col mx-auto overflow-x-hidden"
        style={{ maxWidth: MAX_WIDTH }}
      >
        <div className="flex-1 w-full">
          <Nav />
          <HomePage />
        </div>
      </main>
    </MovingGradientWrapper>
  );
}
