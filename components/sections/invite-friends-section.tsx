import { AnimatePresence } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import { useRandomHeads } from "../../hooks/use-random-heads";
import { Button } from "../elements/button";
import { Parallax } from "../elements/parallax";
import Image from "next/image";

export function InviteFriendsSection() {
  const { t, lang } = useTranslation("common");
  const heads = useRandomHeads();

  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd text-center p-10 md:p-20 relative overflow-hidden">
      <AnimatePresence>{heads}</AnimatePresence>

      <div className="z-10 relative text-purple-dark max-w-6xl mx-auto pb-28 relative">
        <div className="md:mt-15 flex flex-col items-center">
          <h3 className="font-display text-purple-dark text-2xl md:text-5xl text-center whitespace-pre-line">
            {t("sections.invite_friends.title")}
          </h3>

          <div className="relative md:p-10 border-l-2 border-purple-dark border-t-2 border-r-2 border-b-2 md:border-b-0 mt-10 p-4 bg-white opacity-95 md:opacity-100">
            <div className="flex justify-center items-center flex-col md:gap-20 md:mt-16 relative">
              <Parallax>
                <Image
                  src="/artcrew/invite.jpg"
                  width={900}
                  height={542}
                  alt="Invite Friends"
                />
              </Parallax>
              <div className="max-w-4xl mx-auto text-lg md:text-3xl relative z-10 -mx-4 md:m-0 p-4 md:p-0 bg-white md:bg-transparent">
                {t("sections.invite_friends.text")}
              </div>
            </div>
            <span
              className="absolute left-0 right-0 text-right author text-xl hidden md:block"
              style={{ top: "calc(100% - 2px)" }}
            >
              <svg
                version="1.1"
                id="Ebene_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 354.49 34.01"
                className="md:mb-3"
              >
                <path
                  d="M0,0.5h258.97l34.82,32.36V0.5h60.69"
                  stroke="#34234F"
                  fill="white"
                  strokeWidth={1}
                />
              </svg>
            </span>
          </div>
          <div className="mt-10 md:mt-28 z-10">
            <Button
              className="bg-orange text-white hover:bg-red uppcercase"
              href={`https://shop.upcrate.art${lang === "en" ? "" : "/de"}/`}
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
