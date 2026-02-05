import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { RadialGradient } from "../elements/radial-gradient";

export function AsFeaturedInSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd p-10 text-center relative overflow-hidden">
      <RadialGradient className="bg-purple" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-purple-dark text-2xl md:text-5xl md:mt-20 text-center">
          {t("sections.as_featured_in.title")}
        </h3>
        <div className="md:flex md:space-x-20 justify-center mt-10 md:mt-32">
          <motion.a
            href="https://www.theguardian.com/international"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image
              src="/as-featured-in/the-guardian.png"
              width={400}
              height={103}
              alt="The Guardian logo"
            />
          </motion.a>
          <motion.a
            href="https://www.kreativsuechtig.de/wordpress/magazin/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image
              src="/as-featured-in/kreativ-suechtig.svg"
              width={400}
              height={103}
              alt="Kreativ Süchtig logo"
            />
          </motion.a>
          <motion.a
            href="https://www.palette-magazin.de"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Image src="/as-featured-in/palette.png" width={222} height={103} alt="Palette" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
