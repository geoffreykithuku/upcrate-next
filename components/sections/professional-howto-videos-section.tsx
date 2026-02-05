import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { RadialGradient } from "../elements/radial-gradient";

export function ProfessionalHowToVideosSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 relative">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center md:max-w-xl m-auto whitespace-pre-line">
          {t("sections.professional_howto_videos.title")}
        </h3>

        <div className="grid md:grid-cols-3 gap-10 md:gap-20 relative mt-10 md:mt-20">
          <div className="gap-5 md:gap-20 grid grid-cols-2 md:grid-cols-1 max-w-max order-2 md:order-1">
            <div className="md:-mt-20">
              <Image
                src="/how-to-videos/upcrate23.png"
                width={306}
                height={539}
                alt="Upcrate #23 how-to video"
              />
              <div className="gap-3 flex md:items-end md:justify-between text-purple-dark md:text-2xl md:mt-2">
                <div className="text-sm md:text-xl font-bold">#upcrate23</div>
                <a
                  className="text-xxs md:text-sm"
                  href="https://www.instagram.com/milkuart/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @milkuart
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/how-to-videos/upcrate12.png"
                width={306}
                height={539}
                alt="Upcrate #12 how-to video"
              />
              <div className="gap-3 flex md:items-end md:justify-between text-purple-dark md:text-2xl md:mt-2">
                <div className="text-sm md:text-xl font-bold">#upcrate12</div>
                <a
                  className="text-xxs md:text-sm"
                  href="https://www.instagram.com/max.shirshin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @max.shirshin
                </a>
              </div>
            </div>
          </div>
          <div className="text-2xl text-purple-dark text-center flex h-full justify-between flex-col order-1 md:order-2">
            <div className="sticky top-20">
              <Image
                src="/how-to-videos/youtube.png"
                width={630}
                height={419}
                alt="Professional how-to videos on YouTube"
              />
              <p className="mt-5 md:mt-10 text-base md:text-2xl">
                {t("sections.professional_howto_videos.text")}
              </p>
            </div>

            <div className="hidden md:block relative z-30 bg-white check-youtube">
              <RadialGradient className="bg-green" variant="center" />
              <div className="z-10 font-display md:flex flex-col gap-5 relative">
                <p className="text-4xl whitespace-pre-line">
                  {t("sections.professional_howto_videos.checkout_youtube")}
                </p>
                <a
                  href="https://www.youtube.com/channel/UCuBKFplxdLGbCKJaiKnHgcg"
                  target="_blank"
                >
                  <Image
                    src="/how-to-videos/youtube-logo.svg"
                    width={81}
                    height={56}
                    alt="YouTube"
                  />
                </a>
                <motion.a
                  href="https://www.youtube.com/channel/UCuBKFplxdLGbCKJaiKnHgcg"
                  target="_blank"
                  className="font-sans text-base hover:underline"
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <>
                    {">>"}{" "}
                    {t(
                      "sections.professional_howto_videos.checkout_youtube_cta",
                    )}{" "}
                    {"<<"}
                  </>
                </motion.a>
              </div>
            </div>
          </div>
          <div className="gap-5 md:gap-20 grid grid-cols-2 md:grid-cols-1 max-w-max order-3 md:order-3 justify-self-end">
            <div className="md:mt-20">
              <Image
                src="/how-to-videos/upcrate21.png"
                width={306}
                height={539}
                alt="Upcrate #21 how-to video"
              />
              <div className="gap-3 flex md:items-end md:justify-between text-purple-dark md:text-2xl md:mt-2">
                <div className="text-sm md:text-xl font-bold">#upcrate21</div>
                <a
                  className="text-xxs md:text-sm"
                  href="https://www.instagram.com/schlemmer.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @schlemmer.art
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/how-to-videos/upcrate21-2.png"
                width={306}
                height={539}
                alt="Upcrate #21 how-to video"
              />
              <div className="gap-3 flex md:items-end md:justify-between text-purple-dark md:text-2xl md:mt-2">
                <div className="text-sm md:text-xl font-bold">#upcrate21</div>
                <a
                  className="text-xxs md:text-sm"
                  href="https://www.instagram.com/tkuva_illustrates/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @tkuva_illustrates
                </a>
              </div>
            </div>
          </div>
          <div className="flex font-display md:hidden order-4 text-center text-purple-dark gap-5 relative">
            <RadialGradient className="bg-green" variant="center" />
            <div className="z-10 flex flex-col gap-4">
              <p className="text-4xl whitespace-pre-line">
                {t("sections.professional_howto_videos.checkout_youtube")}
              </p>
              <a
                href="https://www.youtube.com/channel/UCuBKFplxdLGbCKJaiKnHgcg"
                target="_blank"
              >
                <Image
                  src="/how-to-videos/youtube-logo.svg"
                  width={81}
                  height={56}
                  alt="YouTube"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCuBKFplxdLGbCKJaiKnHgcg"
                target="_blank"
                className="font-sans text-base"
              >
                {">>"}{" "}
                {t("sections.professional_howto_videos.checkout_youtube_cta")}{" "}
                {"<<"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
