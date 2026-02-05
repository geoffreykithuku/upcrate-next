import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

export function FollowUsOnInstagramSection() {
  const { t } = useTranslation("common");

  return (
    <section>
      <a
        href="https://www.instagram.com/upcrate/"
        className="flex p-2 md:p-4 gap-2 md:gap-4 bg-purple relative"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-1/3 md:w-1/4">
          <Image
            src="/instagram/instagram01.png"
            layout="responsive"
            width={330}
            height={330}
            alt="Instagram post"
          />
        </div>
        <div className="w-1/3 md:w-1/4">
          <Image
            src="/instagram/instagram02.png"
            layout="responsive"
            width={330}
            height={330}
            alt="Instagram post"
          />
        </div>
        <div className="w-1/3 md:w-1/4">
          <Image
            src="/instagram/instagram03.png"
            layout="responsive"
            width={330}
            height={330}
            alt="Instagram post"
          />
        </div>

        <div className="w-1/3 md:w-1/4 hidden md:block">
          <Image
            src="/instagram/instagram04.png"
            layout="responsive"
            width={330}
            height={330}
            alt="Instagram post"
          />
        </div>

        <motion.div
          className="absolute m-auto transform rotate-12 left-0 right-0 bg-purple uppercase top-7 md:top-auto md:bottom-1/2 mt-4 w-max p-2 md:p-4 text-white inline-block hover:bg-purple-dark"
          whileHover={{ scale: 1.3, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          initial={{ rotate: 33 }}
        >
          {t("sections.instagram.cta")}
        </motion.div>
      </a>
    </section>
  );
}
