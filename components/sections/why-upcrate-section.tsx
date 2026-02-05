import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Countdown } from "../countdown";
import { CreditsBage } from "../elements/credits-badge";
import { Parallax } from "../elements/parallax";
import { RadialGradient } from "../elements/radial-gradient";
import { CaptainCrateSvg } from "../elements/svg";

export function WhyUpcrateSection() {
  const { t } = useTranslation("common");

  return (
    <>
      <section className="text-center text-purple-dark bg-white pt-6 pb-6 px-10 md:pt-20 relative overflow-hidden">
        <CreditsBage
          className="bg-purple-dark top-0"
          href="https://www.instagram.com/thingsby_diana/"
        >
          by @thingsby_diana
        </CreditsBage>
        <RadialGradient className="bg-purple" />
        <div className="z-10 relative text-purple-dark">
          <h4 className="text-green">{t("sections.why_upcrate.subtitle")}</h4>
          <h3 className="font-display text-purple-dark text-2xl md:text-5xl">
            {t("sections.why_upcrate.title")}
          </h3>
          <div className="md:flex align-center justify-center gap-20 md:text-xl relative z-10 max-w-6xl mx-auto mb-32 mt-10">
            <div>
              <Parallax className="mt-10" offset={-10}>
                <Image
                  src="/why-upcrate/1.png"
                  width={414}
                  height={331}
                  alt="Why Upcrate"
                />
              </Parallax>
              <p className="max-w-xs m-auto">
                {t("sections.why_upcrate.steps.0.text")}
              </p>
            </div>
            <div>
              <Parallax className="mt-10" offset={-10}>
                <Image
                  src="/why-upcrate/2.png"
                  width={414}
                  height={331}
                  alt="Why Upcrate"
                />
              </Parallax>
              <p className="max-w-xs m-auto">
                {t("sections.why_upcrate.steps.1.text")}
              </p>
            </div>
            <div>
              <Parallax className="mt-10" offset={-10}>
                <Image
                  src="/why-upcrate/3.png"
                  width={388}
                  height={311}
                  alt="Why Upcrate"
                />
              </Parallax>
              <p className="max-w-xs m-auto">
                {t("sections.why_upcrate.steps.2.text")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center text-purple-dark bg-white pt-6 pb-6 px-10 md:pb-24 relative">
        <div className="relative max-w-6xl mx-auto">
          <div className="z-10 relative text-purple-dark">
            <h3 className="font-display text-purple-dark text-2xl md:text-5xl">
              {t("sections.why_upcrate.whats_inside.title")}
            </h3>
            <p className="mt-8 text-xl max-w-2xl mx-auto text-center">
              {t("sections.why_upcrate.whats_inside.text")}
            </p>
            <div className="hidden md:block">
              <CaptainCrateSvg variant="head-only" className="w-6 ml-2 mt-2" />
              <div className="image-container md:-mt-4">
                <Image
                  className="image"
                  src="/why-upcrate/how-to.png"
                  layout="fill"
                  alt="What's inside the crate"
                />
              </div>
            </div>

            <div className="md:hidden -mx-10">
              <div className="image-container md:-mt-4">
                <Image
                  className="image"
                  src="/why-upcrate/how-to-xs.png"
                  layout="fill"
                  alt="What's inside the crate"
                />
              </div>
            </div>
            <div className="md:absolute bottom-2 left-2 flex justify-center items-center gap-2 mt-2 md:mt-0">
              <Image
                src="/how-to-videos/youtube-logo.svg"
                width={30}
                height={30}
                alt="YouTube"
              />
              <p className="font-bold">+ how to video</p>
            </div>
          </div>
          <RadialGradient
            className="hidden md:block bg-orange -mt-64"
            variant="center-xl"
          />
          <RadialGradient
            className="hidden md:block bg-orange mt-64"
            variant="center-xl"
          />
          <RadialGradient
            className="hidden md:block bg-orange"
            variant="center-left"
          />
          <RadialGradient
            className="hidden md:block bg-orange"
            variant="center-right"
          />
          <RadialGradient className="bg-orange" variant="center-xl" />
        </div>

        <div className="z-10 relative mt-10 md:mt-0">
          <Countdown />
        </div>
      </section>
    </>
  );
}
