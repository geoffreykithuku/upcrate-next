import { HeroSection, UnboxYourCreativitySection } from "../components";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { FlowingHeads } from "../components/flowing-heads";
import { RandomHeadsSection } from "../components/sections/random-heads-section";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FormattedText } from "../components/elements/formatted-text";
import Head from "next/head";
import Trans from "next-translate/Trans";
import { InlineTextSvg } from "../components/elements/svg/inline-text";

function InlineTextComponent(props) {
  return (
    <span
      className={`${props.className} underline relative inline-flex justify-center items-center gap-2 pr-8 md:pr-0`}
    >
      {props.children}
      {props.icon}
    </span>
  );
}

export default function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.about.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.about.title")}
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.about.og_description")}
        />
      </Head>
      <HeroSection
        className="bg-green"
        title={t("pages.about.title")}
        image="/about/about-us-hero.png"
        mobileImage="/about/about-us-hero-xs.png"
      />

      <RandomHeadsSection />

      <section className="grid md:grid-cols-2">
        <Image
          src="/about/about-us-1.png"
          alt=""
          layout="responsive"
          width={938}
          height={748}
        />
        <div className="bg-purple-light text-center text-white flex flex-col justify-center content-center p-8 sm:p-24 text-xl md:text-2xl">
          <h3 className="text-2xl sm:text-5xl text-purple-dark font-display">
            {t("pages.about.sections.0.title")}
          </h3>
          <p className="mt-8 font-bold">
            <Trans
              i18nKey="common:pages.about.sections.0.text"
              components={{
                1: (
                  <InlineTextComponent
                    className="text-green"
                    icon={
                      <span className="absolute md:relative right-0">
                        <InlineTextSvg variant="ship" />
                      </span>
                    }
                  />
                ),
                2: (
                  <InlineTextComponent
                    className="text-rose"
                    icon={
                      <span className="absolute md:relative right-0">
                        <InlineTextSvg variant="pen" />
                      </span>
                    }
                  />
                ),
              }}
            />
          </p>

          <small className="mt-16">
            {t("pages.about.artwork_by")}{" "}
            <a
              href="https://instagram.com/thingsby_diana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @thingsby_diana
            </a>
          </small>
        </div>
      </section>
      <section className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="bg-purple-lightest text-center text-purple-dark flex flex-col justify-center content-center p-8 sm:p-24 text-xl md:text-2xl">
          <h3 className="text-2xl sm:text-5xl text-purple-dark font-display">
            {t("pages.about.sections.1.title")}
          </h3>
          <p className="mt-8 font-bold">
            <Trans
              i18nKey="common:pages.about.sections.1.text"
              components={{
                1: (
                  <InlineTextComponent
                    className="text-purple"
                    icon={
                      <span className="absolute md:relative right-0">
                        <InlineTextSvg variant="shipGlobe" />
                      </span>
                    }
                  />
                ),
                2: (
                  <InlineTextComponent
                    className="text-red"
                    icon={
                      <span className="absolute md:relative right-0">
                        <InlineTextSvg variant="surprise" />
                      </span>
                    }
                  />
                ),
              }}
            />
          </p>

          <small className="mt-16">
            {t("pages.about.artwork_by")}{" "}
            <a
              href="https://instagram.com/snowsart"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @snowsart
            </a>
          </small>
        </div>
        <div>
          <Image
            src="/about/about-us-2.jpg"
            alt=""
            layout="responsive"
            width={938}
            height={748}
          />
        </div>
      </section>
      <section className="grid md:grid-cols-2">
        <div>
          <Image
            src="/about/about-us-3.jpg"
            alt=""
            layout="responsive"
            width={938}
            height={748}
          />
        </div>
        <div className="bg-purple-light text-center text-white flex flex-col justify-center content-center p-8 sm:p-24 text-xl md:text-2xl">
          <h3 className="text-2xl sm:text-5xl text-purple-dark font-display">
            {t("pages.about.sections.2.title")}
          </h3>
          <p className="mt-8 font-bold">
            <Trans
              i18nKey="common:pages.about.sections.2.text"
              components={{
                1: (
                  <InlineTextComponent
                    className="text-green"
                    icon={
                      <span className="absolute md:relative right-0">
                        <InlineTextSvg variant="marker" />
                      </span>
                    }
                  />
                ),
                2: (
                  <InlineTextComponent
                    className="text-rose"
                    icon={
                      <span className="absolute md:relative -right-2 md:right-0">
                        <InlineTextSvg variant="heads" />
                      </span>
                    }
                  />
                ),
              }}
            />
          </p>

          <small className="mt-16">
            {t("pages.about.artwork_by")}{" "}
            <a
              href="https://instagram.com/sabeans.art"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @sabeans.art
            </a>
          </small>
        </div>
      </section>
      <section className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="bg-purple-lightest text-center text-purple-dark flex flex-col justify-center content-center p-8 sm:p-16 text-xl md:text-2xl">
          <h3 className="text-2xl sm:text-5xl text-purple-dark font-display">
            {t("pages.about.sections.3.title")}
          </h3>
          <p className="mt-8 font-bold">
            <Trans
              i18nKey="common:pages.about.sections.3.text"
              components={{
                1: (
                  <InlineTextComponent
                    className="text-red"
                    icon={
                      <span className="absolute md:relative right-0">
                        <InlineTextSvg variant="head" />
                      </span>
                    }
                  />
                ),
                2: (
                  <InlineTextComponent
                    className="text-orange"
                    icon={
                      <span className="absolute md:relative right-0">
                        <InlineTextSvg variant="headPen" />
                      </span>
                    }
                  />
                ),
              }}
            />
          </p>

          <small className="mt-16">
            {t("pages.about.artwork_by")}{" "}
            <a
              href="https://instagram.com/sarkasik"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @sarkasik
            </a>
          </small>
        </div>
        <div>
          <Image
            src="/about/about-us-4.png"
            alt=""
            layout="responsive"
            width={938}
            height={748}
          />
        </div>
      </section>

      <FollowUsOnInstagramSection />

      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white whitespace-pre-line">
          <FormattedText
            transKey="common:pages.home.draw_as_one_section"
            delimiter={[<span className="font-display" />, <br />]}
          />
        </h4>
      </ConnectSloganSection>

      <section>
        <Image
          src="/about/about-us-5.jpg"
          layout="responsive"
          width={1920}
          height={768}
          alt=""
        />
      </section>

      <FlowingHeads className="bg-green" />

      <UnboxYourCreativitySection
        className="bg-green text-purple-dark"
        title={t("pages.about.chosen_one_section.title")}
        buttonColors="bg-purple hover:bg-purple-dark text-white"
      />
    </>
  );
}
