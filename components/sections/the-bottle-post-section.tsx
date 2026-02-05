import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Parallax } from "../elements/parallax";
import { RadialGradient } from "../elements/radial-gradient";

export function TheBottlePostSection() {
  const { t, lang } = useTranslation("common");

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 relative overflow-hidden">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20 text-center md:max-w-xl m-auto">
          {t("sections.the_bottle_post.title")}
        </h3>

        <div className="max-w-8xl mt-5 md:mt-10 mx-auto text-center">
          <Image src="/the-bottle-post/big.jpg" width={1951} height={489} alt="The Bottle Post" />

          <div className="w-full h-full">
            <div className="flex flex-col text-purple-dark h-full justify-items-end mt-5 md:mt-0 md:text-xl">
              <p className="text-center max-w-4xl mx-auto md:mt-16">
                {t("sections.the_bottle_post.text")}
              </p>

              <div className="flex gap-6 md:gap-20 mt-5 md:mt-16 max-w-8xl mx-auto">
                <Parallax offset={50}>
                  <a
                    href={`https://shop.upcrate.art${
                      lang === "en" ? "" : "/de"
                    }/product/upcrate31-march-2022_589/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/the-bottle-post/small01.jpg"
                      width={500}
                      height={500}
                      alt="Upcrate #31 artwork"
                    />
                    <div className="text-xs md:text-xl">#upcrate31</div>
                  </a>
                </Parallax>
                <Parallax offset={50}>
                  <a
                    href={`https://shop.upcrate.art${
                      lang === "en" ? "" : "/de"
                    }/product/upcrate28-december-2021-123/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/the-bottle-post/small02.jpg"
                      width={500}
                      height={500}
                      alt="Upcrate #28 artwork"
                    />
                    <div className="text-xs md:text-xl">#upcrate28</div>
                  </a>
                </Parallax>
                <Parallax offset={50}>
                  <a
                    href={`https://shop.upcrate.art${
                      lang === "en" ? "" : "/de"
                    }/product/upcrate26-october-2021485843/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/the-bottle-post/small03.jpg"
                      width={500}
                      height={500}
                      alt="Upcrate #26 artwork"
                    />
                    <div className="text-xs md:text-xl">#upcrate26</div>
                  </a>
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
