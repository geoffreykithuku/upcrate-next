import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { Button } from "../elements/button";
import { Parallax } from "../elements/parallax";
import { Caret } from "../elements/svg";

interface SubscribeNowSectionProps {
  className?: string;
  title?: string;
  buttonColors?: string;
}

export function UnboxYourCreativitySection({
  className,
  title,
  buttonColors,
}: React.PropsWithChildren<SubscribeNowSectionProps>): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <section className={`text-center p-10 sm:p-40 ${className}`}>
      <Parallax offset={40}>
        <Image
          src="/unbox-your-creativity.svg"
          width={280}
          height={100}
          alt="Unbox Your Creativity"
        />
      </Parallax>

      <h3 className="text-xl md:text-4xl mx-auto text-center max-w-5xl mt-6 font-bold whitespace-pre-line">
        {title}
      </h3>
      <Button
        className={`font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center relative mt-10 px-10 mx-auto gap-4 ${buttonColors}`}
        href="/subscriptions"
      >
        {t("subscribe_now_button_text")}
        <Caret />
      </Button>
    </section>
  );
}
