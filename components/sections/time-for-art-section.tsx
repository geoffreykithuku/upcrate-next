import { motion } from "framer-motion";
import Image from "next/image";
import { TimeForArtSvg } from "../elements/svg/time-for-art-svg";
import useTranslation from "next-translate/useTranslation";
import { RadialGradient } from "../elements/radial-gradient";
import { useIsDesktopSafari } from "../../hooks/use-is-desktop-safari";
const transition = { duration: 70, repeat: Infinity, ease: "linear" };

let i = 0;

export function TimeForArtSection() {
  const { t } = useTranslation("common");
  const isDesktopSafari = useIsDesktopSafari();

  console.log(isDesktopSafari);

  const animatedElements: { content: string; type: "text" | "image" }[] = [
    {
      content: t("sections.time_for_art.advantages.0.text"),
      type: "text",
    },
    { content: "/time-for-art/blue.png", type: "image" },
    {
      content: t("sections.time_for_art.advantages.1.text"),
      type: "text",
    },
    { content: "/time-for-art/green.png", type: "image" },
    {
      content: t("sections.time_for_art.advantages.2.text"),
      type: "text",
    },
    { content: "/time-for-art/red.png", type: "image" },
    {
      content: t("sections.time_for_art.advantages.3.text"),
      type: "text",
    },
    {
      content: t("sections.time_for_art.advantages.4.text"),
      type: "text",
    },
  ];

  return (
    <div className="min-h-sectionBig md:min-h-sectionBigMd bg-purple relative px-10 md:px-0 py-10 md:py-20">
      <h3 className="text-2xl md:text-5xl font-display text-white max-w-md md:max-w-2xl mx-auto text-center">
        {t("sections.time_for_art.title")}
      </h3>
      <div
        className="relative max-w-4xl p-20 mt-20 justify-center items-center mx-auto hidden md:flex"
        style={{
          ...(isDesktopSafari ? { display: "grid" } : {}),
        }}
      >
        {!isDesktopSafari && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="838.972"
            height="458.076"
            viewBox="0 0 838.972 458.076"
          >
            <path
              id="Path_5159"
              data-name="Path 5159"
              d="M418.986,0c231.4,0,418.986,102.32,418.986,228.538S650.386,457.076,418.986,457.076,0,354.756,0,228.538,187.586,0,418.986,0Z"
              transform="translate(0.5 0.5)"
              fill="none"
              stroke="none"
              strokeWidth="1"
            />
          </svg>
        )}

        <div
          className="absolute -top-20 right-0 bottom-0 left-0"
          style={{
            ...(isDesktopSafari
              ? { position: "relative", textAlign: "center" }
              : {}),
          }}
        >
          <div
            className="relative w-full flex justify-center items-center z-10"
            style={{ height: "100%" }}
          >
            <div className="w-96 top-0">
              <TimeForArtSvg />
            </div>
            <div className="absolute bottom-28">
              <Image
                src="/time-for-art/roll.png"
                width={348.43}
                height={169.32}
                alt=""
              />
            </div>
            <div className="absolute right-36">
              <Image
                src="/time-for-art/cutter.png"
                width={200}
                height={100}
                alt="Cutter"
              />
            </div>
          </div>
          <RadialGradient className="bg-pink" variant="center" />
        </div>

        {animatedElements.map(({ content, type }) => {
          i = i + 12.5; // 100 / 8 elements

          return (
            <motion.div
              key={content}
              className="box"
              initial={{ offsetDistance: `${i}%` }}
              animate={{ offsetDistance: `${100 + i}%` }}
              transition={transition}
              style={{
                ...(isDesktopSafari
                  ? {
                      position: "relative",
                      display: "flex",
                      justifyContent: "center",
                    }
                  : {}),
              }}
            >
              {type === "text" && (
                <div className="text-xl font-display text-purple-dark w-56 text-center leading-tight">
                  {content}
                </div>
              )}
              {type === "image" && (
                <Image
                  src={content}
                  width={180}
                  height={180}
                  alt="Art Content"
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden flex-col justify-center items-center gap-10 mt-10 relative">
        <div className="text-xl font-display text-purple-dark max-w-sm text-center relative z-10">
          {t("sections.time_for_art.advantages.0.text")}
        </div>
        <div className="text-xl font-display text-purple-dark max-w-sm text-center relative z-10">
          {t("sections.time_for_art.advantages.1.text")}
        </div>

        <div className="relative -mt-20">
          <div
            className="relative w-full flex justify-center items-center z-10"
            style={{ height: "100%" }}
          >
            <div className="w-2/3 md:w-96 top-0">
              <TimeForArtSvg />
            </div>
            <div className="absolute -bottom-5 w-72">
              <Image
                src="/time-for-art/roll.png"
                width={348.43}
                height={169.32}
                alt=""
              />
            </div>
            <div className="absolute right-0 md:-right-5 w-36">
              <Image
                src="/time-for-art/cutter.png"
                width={200}
                height={100}
                alt="Cutter"
              />
            </div>
          </div>
          <RadialGradient className="bg-pink" variant="center-xl" />
        </div>

        <div className="text-xl font-display text-purple-dark max-w-sm text-center relative z-10">
          {t("sections.time_for_art.advantages.2.text")}
        </div>
        <div className="text-xl font-display text-purple-dark max-w-sm text-center relative z-10">
          {t("sections.time_for_art.advantages.3.text")}
        </div>
        <div className="text-xl font-display text-purple-dark max-w-sm text-center relative z-10">
          {t("sections.time_for_art.advantages.4.text")}
        </div>
      </div>
    </div>
  );
}
