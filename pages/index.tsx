import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import { SubscribeNowSection, UnboxYourCreativitySection } from "../components";
import { AsFeaturedInSection } from "../components/sections/as-featured-in-section";
import { ConnectSloganSection } from "../components/sections/connect-slogan-section";
import { FlowingHeads } from "../components/flowing-heads";
import { FollowUsOnInstagramSection } from "../components/sections/follow-us-on-instagram-section";
import { FeaturedArtistsWeWorkedWithSection } from "../components/sections/featured-artists-section";
import { HeroSliderSection } from "../components/sections/hero-slider-section";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { ImageSection } from "../components/sections/image-section";
import { UpcrateAsGiftSection } from "../components/sections/upcrate-as-a-gift-section";
import { UpcrateBattleSection } from "../components/sections/upcrate-battle-section";
import { WhatTheArtCrewSaysSection } from "../components/sections/what-the-artcrew-says-section";
import { WhyUpcrateSection } from "../components/sections/why-upcrate-section";
import { FormerCratesInARowSection } from "../components/sections/former-crates-in-a-row-section";
import { FormattedText } from "../components/elements/formatted-text";
import { AnimatedUnboxYourCreativitySection } from "../components/sections/animated-unbox-your-creativity-section";
import { CratesProps } from "./crates";
import { FreeShippingWorldWideSvg } from "../components/elements/svg/free-shipping-worldwide";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { fetchWooCommerceProducts } from "../lib/api";

export default function Home({ products }: CratesProps) {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>The Mystery Art Supplies Box | upcrate</title>
        <meta
          property="og:title"
          content="The Mystery Art Supplies Box | upcrate"
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.home.og_description")}
        />
      </Head>
      <motion.div
        className="hidden md:block w-32 fixed right-0 top-56 z-50"
        style={{ top: "75vh" }}
        initial={{ x: 150 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.5 }}
      >
        <FreeShippingWorldWideSvg />
      </motion.div>
      <HeroSliderSection />
      <JoinTheArtCrewSection />
      <SubscribeNowSection />
      <WhyUpcrateSection />
      <UpcrateAsGiftSection />
      <FlowingHeads className="bg-green-dark" />
      <ImageSection variant="small" bg="cpt-in-forest" />
      <WhatTheArtCrewSaysSection />
      <AnimatedUnboxYourCreativitySection />
      <ImageSection bg="leuchtturm" variant="medium" />
      <FlowingHeads className="bg-purple" />
      <AsFeaturedInSection />
      <FormerCratesInARowSection products={products} />
      <FeaturedArtistsWeWorkedWithSection />
      <ConnectSloganSection>
        <h4 className="text-3xl sm:text-5xl md:text-7xl text-white whitespace-pre-line">
          <FormattedText
            transKey="common:pages.home.draw_as_one_section"
            delimiter={[<span className="font-display" />, <br />]}
          />
        </h4>
      </ConnectSloganSection>
      <UpcrateBattleSection />
      <ImageSection bg="cotman-tubes" />
      <FollowUsOnInstagramSection />
      <UnboxYourCreativitySection
        className="bg-pink text-purple-dark"
        title={t("pages.home.chosen_one_section.title")}
        buttonColors="bg-purple hover:bg-purple-dark text-white"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts({
    category: "49",
    status: "publish",
  }).catch((error) => {
    console.error("WooCommerce API error:", error);
    return null;
  });

  if (!wooCommerceProducts) {
    return {
      props: {
        products: [],
      },
      revalidate: 60,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
    },
    revalidate: 60, // regenerate page with new data fetch after 60 seconds
  };
};
