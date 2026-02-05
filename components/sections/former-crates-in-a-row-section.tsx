import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowSvg } from "../elements/svg/arrow-svg";
import React from "react";
import { useWindowSize } from "../../hooks/use-window-size";
import useTranslation from "next-translate/useTranslation";
import { motion } from "framer-motion";
import { CratesProps, Product } from "../../pages/crates";
import Link from "next/link";
import Image from "next/image";
import { RadialGradient } from "../elements/radial-gradient";

export function SliderArrow({
  variant,
  onClick,
}: {
  variant: "prev" | "next";
  onClick?: any;
}) {
  return (
    <motion.div
      className={`absolute top-1/2 -mt-20 md:block text-white z-10 ${
        variant === "next" ? "md:block -right-10" : "-left-10"
      }`}
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.8 }}
    >
      <button
        onClick={onClick}
        className={variant === "next" ? `transform rotate-180` : ""}
      >
        <ArrowSvg />
      </button>
    </motion.div>
  );
}

function Slide({
  children,
  className,
  activeSlideIndex,
  slideIndex,
}: React.PropsWithChildren<{
  className?: string;
  slideIndex: number;
  activeSlideIndex: number;
}>) {
  const { width } = useWindowSize();

  return (
    <motion.div
      className={`${className} md:px-10 pt-6 md:pb-20 relative flex justify-center items-center`}
      whileHover={{ scale: 1 }}
      animate={{
        scale: activeSlideIndex + 1 === slideIndex && width > 400 ? 1.15 : 0.9,
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function TripleSlider({ slides }: { slides: Product[] }) {
  const { width } = useWindowSize();
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: width < 767 ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: <SliderArrow variant="next" />,
    prevArrow: <SliderArrow variant="prev" />,
    beforeChange: (_, next) => setActiveSlideIndex(next),
  };

  if (!slides) {
    return null;
  }

  return (
    <div className="relative">
      <Slider {...settings} className="md:mt-20 mx-12 md:mx-0 z-10">
        {slides.map((crate, key) => (
          <Slide
            key={key}
            className="flex flex-col gap-5 text-xl md:text-3xl cursor-pointer"
            slideIndex={key}
            activeSlideIndex={activeSlideIndex}
          >
            <Link href={crate.permalink} legacyBehavior>
              <a>
                {crate.images.length > 0 && (
                  <Image
                    src={crate.images[0].src}
                    width={400}
                    height={400}
                    alt={crate.name}
                  />
                )}
                <p className="pt-2">{crate.name}</p>
              </a>
            </Link>
          </Slide>
        ))}
      </Slider>
      <RadialGradient variant="center-left" className="bg-pink" />
      <RadialGradient variant="center-right" className="bg-pink" />
    </div>
  );
}

export function FormerCratesInARowSection({ products }: CratesProps) {
  const { t } = useTranslation("common");

  return (
    <section className="text-center text-rose bg-purple py-6 sm:px-10 md:px-32 md:pt-20 md:pb-24 min-h-sectionBig md:min-h-sectionBigMd overflow-hidden relative z-20">
      <h3 className="font-display text-2xl md:text-5xl">
        {t("sections.former_crates_in_a_row.title")}
      </h3>

      <TripleSlider slides={products} />
    </section>
  );
}
