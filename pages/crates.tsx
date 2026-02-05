import { GetStaticProps } from "next";
import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import {
  Button,
  Caret,
  HeroSection,
  UnboxYourCreativitySection,
} from "../components";
import { CratesList } from "../components/crates-list";
import { JoinTheArtCrewSection } from "../components/sections/join-the-art-crew-section";
import { fetchWooCommerceProducts } from "../lib/api";

export interface ProductImage {
  id: number;
  name: string;
  src: string;
}
export interface Product {
  id: string;
  name: string;
  images: ProductImage[];
  permalink: string;
  stock_status: "instock" | "outofstock";
  regular_price: string;
  acf: {
    zoom_image?: string;
  };
}

export interface CratesProps {
  products: any[];
  pageCount?: number;
}

export default function Crates({ products, pageCount }: CratesProps) {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("pages.crates.title")} | upcrate</title>
        <meta
          property="og:title"
          content={t("pages.crates.title")}
          key="title"
        />

        <meta
          property="og:description"
          content={t("pages.crates.og_description")}
        />
      </Head>
      <HeroSection
        className="bg-orange"
        title={t("pages.crates.title")}
        image="/crates/hero-image.png"
        mobileImage="/crates/crates-hero-xs.png"
      />

      <CratesList products={products} pageCount={pageCount} />

      <JoinTheArtCrewSection>
        <Button
          className="font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-5 bg-orange hover:bg-pink text-white px-10 mx-auto gap-4"
          href="/subscriptions"
        >
          {t("subscribe_now_button_text")}
          <Caret />
        </Button>
      </JoinTheArtCrewSection>
      <div className="min-h-sectionSmall md:min-h-sectionSmallMd bg-crates-image-section bg-center bg-cover bg-no-repeat relative flex justify-center items-end p-12">
        <h3 className="text-2xl md:text-6xl text-white text-center whitespace-pre-line font-display text-shadow">
          {t("pages.crates.found_some_art")}
        </h3>
      </div>
      <UnboxYourCreativitySection
        className="bg-orange text-purple-dark"
        title={t("pages.crates.chosen_one_section.title")}
        buttonColors="bg-purple hover:bg-purple-dark text-white"
      />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts({
    category: "49",
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
