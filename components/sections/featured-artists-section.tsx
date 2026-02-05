import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { RadialGradient } from "../elements/radial-gradient";

export function FeaturedArtistsWeWorkedWithSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 relative">
      <RadialGradient className="bg-rose" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl mt-5 md:mt-20 text-center md:max-w-xl m-auto">
          {t("sections.featured_artists_we_worked_with.title")}
        </h3>

        <p className="text-center md:hidden text-purple-dark mt-5">
          {t("sections.featured_artists_we_worked_with.text_mobile")}
        </p>

        <div className="grid md:grid-cols-3 gap-20 relative mt-10 md:mt-20">
          <div className="grid gap-10 md:gap-20">
            <div>
              <Image
                src="/home/featured-artists/featured-01.jpg"
                width={385}
                height={385}
                layout="responsive"
                alt="Featured artwork by @neimykanani"
              />
              <div className="flex items-end justify-between text-purple-dark text-2xl mt-2">
                <div className="text-bold">#upcrate14</div>
                <a
                  className="text-sm"
                  href="https://www.instagram.com/neimykanani/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @neimykanani
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/home/featured-artists/featured-02.jpg"
                width={385}
                height={385}
                layout="responsive"
                alt="Featured artwork by @myweirdart_"
              />
              <div className="flex items-end justify-between text-purple-dark text-2xl mt-2">
                <div className="text-bold">#upcrate7</div>
                <a
                  className="text-sm"
                  href="https://www.instagram.com/myweirdart_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @myweirdart_
                </a>
              </div>
            </div>
          </div>
          <div
            className="text-2xl text-purple-dark text-center hidden md:block sticky top-20"
            style={{ height: "max-content", alignSelf: "flex-start" }}
          >
            {t("sections.featured_artists_we_worked_with.text")}
          </div>
          <div className="gap-20 hidden md:grid">
            <div>
              <Image
                src="/home/featured-artists/featured-03.png"
                width={385}
                height={385}
                layout="responsive"
                alt="Featured artwork by @nikalarkina"
              />
              <div className="flex items-end justify-between text-purple-dark text-2xl mt-2">
                <div className="text-bold">#upcrate13</div>
                <a
                  className="text-sm"
                  href="https://www.instagram.com/nikalarkina/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @nikalarkina
                </a>
              </div>
            </div>
            <div>
              <Image
                src="/home/featured-artists/featured-04.jpg"
                width={385}
                height={385}
                layout="responsive"
                alt="Featured artwork by @clemstjw"
              />
              <div className="flex items-end justify-between text-purple-dark text-2xl mt-2">
                <div className="text-bold">#upcrate5</div>
                <a
                  className="text-sm"
                  href="https://www.instagram.com/clemstjw/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @clemstjw
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
