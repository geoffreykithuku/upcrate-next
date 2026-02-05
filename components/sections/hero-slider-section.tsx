import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CaptainCrateSvg } from "../elements/svg";
import { Button } from "../elements/button";
import { ArrowSvg } from "../elements/svg/arrow-svg";
import Image from "next/image";
import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Ticker from "react-ticker";

function SliderArrow({
  variant,
  onClick,
}: {
  variant: "prev" | "next";
  onClick?: any;
}) {
  return (
    <motion.div
      className={`absolute top-1/2 hidden md:block left-10 z-10 ${
        variant === "next" && "hidden md:block right-10 left-auto"
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
  background,
  image,
  mobileImage,
}: {
  background: string;
  image: string;
  mobileImage: string;
}) {
  return (
    <div
      className={`md:px-10 pt-6 pb-16 relative bg-${background} flex justify-center items-center`}
    >
      <div className="hidden md:block relative">
        <CaptainCrateSvg
          variant="head-only"
          className="absolute -top-2 left-1 lg:left-2 xl:left-3 xl:top-0 2xl:left-5 2xl:-top-1 text-purple-dark hidden md:block"
          width={26}
        />
        <Image src={image} alt="" width={1704} height={855.35} />
      </div>
      <div className="md:hidden">
        <Image src={mobileImage} alt="" width={457} height={490} />
      </div>
    </div>
  );
}

export const HeroSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow variant="next" />,
    prevArrow: <SliderArrow variant="prev" />,
  };

  return (
    <Slider {...settings}>
      <Slide
        background="rose"
        image="/home/hero-slider/slide-01.png"
        mobileImage="/home/hero-slider/slide-xs-01.png"
      />
      <Slide
        background="purple"
        image="/home/hero-slider/slide-02.png"
        mobileImage="/home/hero-slider/slide-xs-02.png"
      />
      <Slide
        background="green"
        image="/home/hero-slider/slide-03.png"
        mobileImage="/home/hero-slider/slide-xs-03.png"
      />
      <Slide
        background="pink"
        image="/home/hero-slider/slide-04.png"
        mobileImage="/home/hero-slider/slide-xs-04.png"
      />
      <Slide
        background="orange"
        image="/home/hero-slider/slide-05.png"
        mobileImage="/home/hero-slider/slide-xs-05.png"
      />
    </Slider>
  );
};

export function HeroSliderSection() {
  const { t, lang } = useTranslation("common");

  return (
    <section className="relative">
      <div className="relative">
        <HeroSlider />

        <div className="flex flex-col absolute top-32 right-0 bottom-0 left-0 text-purple-dark items-center justify-center">
          <motion.h3
            className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-display"
            animate={{ scale: [0, 1.25, 1] }}
            transition={{ duration: 0.25 }}
          >
            {t("pages.home.slider_content.0.text")}
          </motion.h3>
          <motion.h3
            className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-display"
            animate={{ scale: [0, 1.35, 1] }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <>{" "}{t("pages.home.slider_content.1.text")}</>
          </motion.h3>
          <motion.h3
            className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-display"
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <>{" "}{t("pages.home.slider_content.2.text")}<br /></>
          </motion.h3>
          <motion.span
            className="text-center text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-display text-white text-shadow"
            initial={{
              scale: 0,
            }}
            animate={{ scale: [0, 2, 1] }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {t("pages.home.slider_content.3.text")}
          </motion.span>
          <div className="flex md:space-x-10 flex-col md:flex-row items-center mt-10">
            <motion.div
              animate={{ scale: [0, 1.7, 1], rotate: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1, 1.06, 1],
                  rotate: [0, -2, 2, 0, -1.5, 1.5, 0],
                }}
                transition={{
                  duration: 0.55,
                  delay: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  easings: "easeInOut",
                }}
              >
                <Button
                  variant="default"
                  className="bg-purple text-xl text-white "
                  href="/subscriptions"
                >
                  {t("subscribe_now_button_text")}
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              animate={{
                scale: [0, 1.5, 1],
                rotate: 0,
              }}
              transition={{ duration: 1.2, delay: 1.25, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1, 1.2, 1] }}
                transition={{
                  duration: 0.75,
                  delay: 3.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <Button
                  variant="default"
                  className="bg-pink text-white text-xl mt-5 md:mt-0"
                  href={`https://shop.upcrate.art${
                    lang === "en" ? "" : "/de"
                  }/product/upcrategift/`}
                >
                  {t("give_a_gift_button_text")}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="hidden md:block overflow-hidden text-white md:text-xl text-center py-5 absolute bottom-0 no-wrap w-full flex gap-20 -mt-10">
          <Ticker>
            {() => (
              <span className="mr-8">
                &nbsp;+++{t("pages.home.marquee_text")}+++&nbsp;
              </span>
            )}
          </Ticker>
        </div>
      </div>
    </section>
  );
}
