import { motion } from "framer-motion";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { FormattedText } from "../elements/formatted-text";
import { Parallax } from "../elements/parallax";
import { RadialGradient } from "../elements/radial-gradient";
import { BattleBorderSvg } from "../elements/svg/battle-border";
import { BattleSvg } from "../elements/svg/battle-svg";

export function UpcrateBattleSection() {
  const { t } = useTranslation("common");

  return (
    <section className="min-h-sectionSmall md:min-h-sectionSmallMd text-center p-10 md:p-20 relative overflow-hidden">
      <RadialGradient className="bg-green" />
      <div className="z-10 relative text-purple-dark">
        <div className="md:mt-15 flex flex-col items-center gap-4 md:gap-0">
          <BattleSvg />
          <h3 className="font-display text-purple-dark text-2xl md:text-5xl text-center">
            {t("sections.upcrate_battle.title")}
          </h3>
          <p className="md:mt-5 text-purple-dark text-xl whitespace-pre-line max-w-4xl mx-auto">
            {t("sections.upcrate_battle.text")}
          </p>
        </div>
        <div className="md:flex align-center justify-center md:space-x-20 md:text-xl text-purple-dark">
          <div className="mt-10">
            <h4 className="text-left mb-3">TOPIC: Sketched Dreams</h4>
            <Image
              src="/upcrate-battle/topic01.jpg"
              width={330}
              height={330}
              alt="Battle Topic"
            />
            <div className="flex items-end justify-between">
              <div className="text-bold">#upcrate19</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/shania_bo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @shania_bo
              </a>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-left mb-3">TOPIC: Mysterious Mind</h4>
            <Image
              src="/upcrate-battle/topic02.jpg"
              width={330}
              height={330}
              alt="Battle Topic"
            />
            <div className="flex items-end justify-between">
              <div className="text-bold">#upcrate16</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/lapetiteruse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @lapetiteruse
              </a>
            </div>
          </div>
          <div className="mt-10">
            <h4 className="text-left mb-3">TOPIC: What can you see</h4>
            <Image
              src="/upcrate-battle/topic03.jpg"
              width={330}
              height={330}
              alt="Battle Topic"
            />
            <div className="flex items-end justify-between">
              <div className="text-bold">#upcrate11</div>
              <a
                className="text-sm"
                href="https://www.instagram.com/chantalachtelik/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @chantalachtelik
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:mt-20 md:mt-48 text-center flex flex-col items-center justify-center text-purple-dark relative">
          <RadialGradient variant="center" className="bg-pink" />
          <div className="hidden md:flex absolute -top-10 left-0 right-0 justify-center">
            <BattleBorderSvg />
          </div>

          <div className="z-10">
            <div className="flex-col-reverse md:flex-row mt-10 md:mt-0 flex gap-4 justify-between md:p-10 md:border-1">
              <Parallax offset={20}>
                <img src="/home/battle/win-prizes.png" alt="" />
              </Parallax>
              <p className="text-xl md:text-right">
                <FormattedText
                  transKey="common:sections.upcrate_battle.prize_example"
                  delimiter={[<b className="block font-bold" />]}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-9 relative z-10">
          <h4 className="font-bold text-3xl">
            {t("sections.upcrate_battle.how_to_participate.title")}
          </h4>
          <div className="md:grid grid-cols-3 gap-20 mt-6">
            <div className="mt-5 md:mt-0">
              <Image
                src="/upcrate-battle/how-to-01.jpg"
                width={600}
                height={480}
                alt="Step 1: How to participate"
              />
              <div className="flex justify-between">
                <span className="font-bold font-display text-5xl">1.</span>
                {t("sections.upcrate_battle.how_to_participate.steps.0.text")}
              </div>
            </div>
            <div className="mt-5 md:mt-0">
              <Image
                src="/upcrate-battle/how-to-02.jpg"
                width={600}
                height={480}
                alt="Step 2: How to participate"
              />
              <div className="flex justify-between text-right">
                <span className="font-bold font-display text-5xl">2.</span>
                {t("sections.upcrate_battle.how_to_participate.steps.1.text")}
              </div>
            </div>
            <div className="mt-5 md:mt-0">
              <Image
                src="/upcrate-battle/how-to-03.jpg"
                width={600}
                height={480}
                alt="Step 3: How to participate"
              />
              <div className="flex justify-between text-right">
                <span className="font-bold font-display text-5xl">3.</span>
                {t("sections.upcrate_battle.how_to_participate.steps.2.text")}
              </div>
            </div>
          </div>
        </div>
        <section className="min-h-sectionSmall md:min-h-sectionSmallMd pt-16 md:pt-32 md:mt-20 md:pb-20 relative">
          <div className="z-10 relative text-center flex justify-center flex-col items-center gap-10">
            <h4 className="text-3xl sm:text-5xl md:text-7xl text-white font-display text-purple-dark max-w-6xl">
              {t("sections.upcrate_battle.checkout_instagram")}
            </h4>
            <motion.a
              href="https://instagram.com/upcrate/"
              className="hover:underline"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Image
                src="/instagram.png"
                width={88}
                height={88}
                alt="Instagram"
              />
            </motion.a>
          </div>
          <RadialGradient className="bg-green" variant="center" />
        </section>
      </div>
    </section>
  );
}
