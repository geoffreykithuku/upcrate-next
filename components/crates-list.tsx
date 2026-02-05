import useTranslation from "next-translate/useTranslation";
import React from "react";
import { RadialGradient } from "./elements/radial-gradient";
import { CratesProps } from "./../pages/crates";
import { AnimatePresence, motion } from "framer-motion";
import Trans from "next-translate/Trans";
import { Caret } from ".";
const transition = { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] };

const PRODUCTS_PER_PAGE = 9;

const thumbnailVariants = {
  initial: { scale: 0.7, rotate: 10, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition, rotate: 0 },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 2, ...transition },
  },
};

const frameVariants = {
  hover: { scale: 0.95 },
};

const imageVariants = {
  hover: { scale: 0, opacity: 0 },
};

const zoomeImageVariants = {
  initial: { scale: 0, opacity: 0 },
  hover: { scale: 1.2, opacity: 1 },
};

export function CratesList({ products }: CratesProps) {
  const { t } = useTranslation("common");
  const [page, setPage] = React.useState(0);
  const pageCount = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      const c = ref.current.offsetTop;
      window.scrollTo({ top: c });
    }
  }, [page]);

  if (products.length === 0) {
    return <div>{t("pages.crates.crates_list.no_products_message")}</div>;
  }

  return (
    <section className="min-h-sectionBig md:min-h-sectionBigMd p-10 md:p-20 pt-20 -mt-20 md:-mt-10 relative overflow-hidden">
      <RadialGradient className="bg-orange" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-center text-2xl md:text-5xl">
          {t("pages.crates.crates_list.title")}
        </h3>
        <p className="mt-8 mb-10 md:mb-0 text-xl max-w-2xl mx-auto text-center">
          <Trans
            i18nKey="common:pages.crates.crates_list.subtitle"
            components={{
              1: <span className="italic block" />,
            }}
          />
        </p>

        <div ref={ref}>
          <motion.ul
            className="list-none grid grid-cols-2 md:grid-cols-3 max-w-6xl gap-4 md:gap-20 justify-center mt-5 md:mt-20 mx-auto my-10 md:my-40"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
          >
            <AnimatePresence>
              {products
                .slice(
                  page * PRODUCTS_PER_PAGE,
                  page * PRODUCTS_PER_PAGE + PRODUCTS_PER_PAGE,
                )
                .map((crate) => {
                  return (
                    <li key={crate.id} className="relative">
                      <motion.div variants={thumbnailVariants}>
                        <motion.div
                          variants={frameVariants}
                          transition={transition}
                          className="overflow-hidden"
                          whileHover="hover"
                          initial="initial"
                        >
                          <a href={crate.permalink}>
                            {crate.images && crate.images.length > 0 && (
                              <div
                                className="relative"
                                style={{ paddingBottom: "100%" }}
                              >
                                <motion.img
                                  className="absolute top-0 left-0 right-0 bottom-0"
                                  src={crate.images[0].src}
                                  width={340}
                                  height={340}
                                  variants={imageVariants}
                                  transition={transition}
                                />

                                {crate?.acf?.zoom_image && (
                                  <motion.img
                                    className="absolute top-0 left-0 right-0 bottom-0 z-0"
                                    src={crate.acf.zoom_image}
                                    width={340}
                                    height={340}
                                    variants={zoomeImageVariants}
                                    transition={transition}
                                  />
                                )}
                              </div>
                            )}
                          </a>
                        </motion.div>

                        <h5 className="text-lg md:text-2xl font-bold">
                          {crate.name}
                        </h5>
                        <div className="flex justify-between mt-2">
                          <span
                            className="md:text-xl"
                            dangerouslySetInnerHTML={{ __html: crate.price }}
                          />
                          {crate.stockStatus === "OUT_OF_STOCK" && (
                            <span className="font-display md:text-red-light text-xs absolute md:relative right-0 p-1 md:p-0 bg-red md:bg-transparent text-white top-0 md:text-xl">
                              {t("pages.crates.crates_list.stock_status")}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    </li>
                  );
                })}
            </AnimatePresence>
          </motion.ul>

          <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex justify-between items-center w-full">
            <motion.button
              className="w-full disabled:opacity-50 font-display p-3 pt-2 pb-3 text-xs md:text-3xl inline-flex items-center content-center gap-4 mt-2 md:mt-5 max-w-max mx-auto bg-purple text-white hover:bg-pink"
              onClick={() => setPage(page - 1)}
              disabled={page === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <>
                <div className="transform rotate-180">
                  <Caret />
                </div>
                {t("pages.crates.crates_list.previous_page_button")}
              </>
            </motion.button>

            <div className="hidden md:block text-center">
              Page {page + 1} of {pageCount}
            </div>

            <motion.button
              className="disabled:opacity-50 font-display p-3 pt-2 pb-3 text-xs md:text-3xl inline-flex items-center content-center gap-4 mt-2 md:mt-5 max-w-max mx-auto bg-purple text-white hover:bg-pink"
              onClick={() => setPage(page + 1)}
              disabled={page + 1 === pageCount}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <>
                {t("pages.crates.crates_list.next_page_button")}
                <Caret />
              </>
            </motion.button>
          </div>
        </div>
      </div>
      <RadialGradient className="bg-green" variant="bottom" />
    </section>
  );
}
