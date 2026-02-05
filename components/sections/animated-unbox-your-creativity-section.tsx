import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import Image from "next/image";
import { Parallax } from "../elements/parallax";
import { RadialGradient } from "../elements/radial-gradient";
import { CaptainCrateSvg } from "../elements/svg";
import { UnboxYourCreativitySvg } from "../elements/svg/unbox-your-creativity";

export function AnimatedUnboxYourCreativitySection() {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 7200]);
  const rotation = useSpring(yRange, { stiffness: 400, damping: 200 });

  return (
    <section className="hidden md:flex flex-col bg-purple justify-center items-center pt-44 pb-0 relative overflow-hidden">
      <RadialGradient className="bg-pink" variant="center" />
      <RadialGradient className="bg-orange" variant="bottom-right" />
      <RadialGradient className="bg-orange" variant="top-left" />
      <div className="z-10 relative text-purple-dark flex text-purple-dark justify-center items-center flex-col">
        <motion.div style={{ rotate: rotation }}>
          <CaptainCrateSvg variant="head-only" width={100} />
        </motion.div>
        <UnboxYourCreativitySvg />
        <div className="-mt-12">
          <Parallax offset={100}>
            <Image src="/box.png" width={1064} height={560} alt="Upcrate Box" />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
