import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Button } from "../elements/button";
import { useInView } from "react-intersection-observer";
import { Parallax } from "../elements/parallax";

const variants = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: -550,
  },
};

export function UpcrateAsGiftSection() {
  const { t, lang } = useTranslation("common");
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-center bg-cover text-center relative min-h-sectionBig md:min-h-sectionBigMd py-10 md:py-20 bg-green overflow-hidden"
    >
      <div className="hidden md:block absolute top-0 right-0 bottom-0 left-0 z-0">
        <Image
          src="/upcrate-as-gift/background.jpg"
          layout="fixed"
          width={2200}
          height={889}
          alt=""
        />
      </div>
      <div className="md:hidden absolute top-0 right-0 bottom-0 left-0 z-0">
        <Image
          src="/upcrate-as-gift/background.jpg"
          layout="fixed"
          width={1100}
          height={444.5}
          alt=""
        />
      </div>
      <div className="z-10 relative flex flex-col justify-center items-center">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl z-10">
          {t("sections.upcrate_as_gift.title")}
        </h3>
        <Parallax>
          <motion.div
            variants={variants}
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/upcrate-as-gift/box.png"
              width={900}
              height={566}
              alt="Gift Box"
            />
          </motion.div>
        </Parallax>
        <Button
          className="bg-orange text-white -mt-10 z-10"
          href={`https://shop.upcrate.art${
            lang === "en" ? "" : "/de"
          }/product/upcrategift/`}
        >
          {t("sections.upcrate_as_gift.cta")}
        </Button>
      </div>
    </section>
  );
}
