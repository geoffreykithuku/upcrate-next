import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { RadialGradient } from "../elements/radial-gradient";

export function HowItWorksSection() {
  const { t } = useTranslation("common");

  return (
    <section className="text-center text-purple-dark bg-white pt-6 pb-6 px-10 md:pt-20 md:pb-24 relative overflow-hidden">
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl">
          {t("sections.how_it_works.title")}
        </h3>
        <p className="mt-8 text-xl max-w-lg mx-auto text-center">
          {t("sections.how_it_works.subtitle")}
        </p>

        <div className="md:grid grid-flow-rows grid-cols-6 grid-rows-2 gap-4 mt-20 align-center justify-center gap-20 md:text-xl relative max-w-6xl mx-auto">
          <div className="mt-10 col-span-2 items-center flex justify-center">
            <div className="relative max-w-md">
              <span className="text-purple font-display text-6xl absolute -top-8 left-5 z-10">
                1.
              </span>
              <Image
                src="/how-it-works/how-it-works-section01.png"
                layout="intrinsic"
                width={390}
                height={312}
                alt="Step 1: Choose your subscription"
              />
              <p>{t("sections.how_it_works.steps.0.text")}</p>
            </div>
          </div>
          <div className="md:-mt-16 mt-10 col-span-2 items-center flex justify-center">
            <div className="relative max-w-md">
              <span className="text-rose font-display text-6xl absolute -top-8 left-5 z-10">
                2.
              </span>
              <Image
                src="/how-it-works/how-it-works-section02.png"
                layout="intrinsic"
                width={482}
                height={322}
                alt="Step 2: Receive your crate"
              />
              <p>{t("sections.how_it_works.steps.1.text")}</p>
            </div>
          </div>
          <div className="mt-10 col-span-2 items-center flex justify-center">
            <div className="relative max-w-md">
              <span className="text-green font-display text-6xl absolute -top-8 left-5 z-10">
                3.
              </span>
              <Image
                src="/how-it-works/how-it-works-section03.jpg"
                layout="intrinsic"
                width={389}
                height={311}
                alt="Step 3: Unbox your supplies"
              />
              <p>{t("sections.how_it_works.steps.2.text")}</p>
            </div>
          </div>
          <div className="mt-20 col-span-3 items-center flex justify-center md:order-5">
            <div className="relative max-w-md">
              <span className="text-orange font-display text-6xl absolute -top-8 md:right-5 z-10">
                4.
              </span>
              <Image
                src="/how-it-works/how-it-works-section04.png"
                layout="intrinsic"
                width={432}
                height={341}
                alt="Step 4: Watch the tutorial"
              />
              <p>{t("sections.how_it_works.steps.3.text")}</p>
            </div>
          </div>
          <div className="mt-10 md:-mt-10 col-span-3 items-center flex justify-center md:order-4">
            <div className="relative max-w-md">
              <span className="text-pink font-display text-6xl absolute -top-8 left-5 z-10">
                5.
              </span>
              <Image
                src="/how-it-works/how-it-works-section05.png"
                layout="intrinsic"
                width={390}
                height={312}
                alt="Step 5: Create your artwork"
              />
              <p>{t("sections.how_it_works.steps.4.text")}</p>
            </div>
          </div>
          <div className="hidden md:flex absolute top-0 right-0 bottom-0 left-0 justify-center items-center">
            <h4 className="text-8xl text-purple font-display whitespace-pre-line">
              {t("sections.how_it_works.ready_set_draw")}
            </h4>
          </div>
        </div>
      </div>
      <RadialGradient className="bg-purple" />
      <RadialGradient className="bg-green" variant="center" />
    </section>
  );
}
