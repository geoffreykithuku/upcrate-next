import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { CreditsBage } from "../elements/credits-badge";
import { RadialGradient } from "../elements/radial-gradient";

export function JoinTheArtCrewSection({
  children,
  className = "",
}: React.PropsWithChildren<{ className?: string }>) {
  const { t } = useTranslation("common");

  return (
    <section
      className={`text-center text-white bg-purple pt-6 pb-10 px-10 md:pt-20 md:pb-24 relative overflow-hidden ${className}`}
    >
      <RadialGradient className="bg-purple-dark" />
      <div className="z-10 relative text-purple-dark">
        <h3 className="font-display text-white text-2xl md:text-5xl">
          {t("sections.join_the_artcrew.title")}
        </h3>
        <div className="md:flex align-center justify-center gap-20">
          <div className="mt-10 text-center">
            <Image
              src="/join-the-art-crew/0.png"
              layout="fixed"
              width={170}
              height={170}
              alt="Join step icon"
              className="mx-auto mb-2"
            />
            <h4 className="text-2xl font-bold text-purple-dark">
              {t("sections.join_the_artcrew.steps.0.title")}
            </h4>
            <p className="max-w-xs m-auto text-white text-xl">
              {t("sections.join_the_artcrew.steps.0.text")}
            </p>
          </div>
          <div className="mt-10 text-center">
            <Image
              src="/join-the-art-crew/1.png"
              layout="fixed"
              width={170}
              height={170}
              alt="Share step icon"
              className="mx-auto mb-2"
            />
            <h4 className="text-2xl font-bold text-purple-dark">
              {t("sections.join_the_artcrew.steps.1.title")}
            </h4>
            <p className="max-w-xs m-auto text-white text-xl">
              {t("sections.join_the_artcrew.steps.1.text")}
            </p>
          </div>
          <div className="mt-10 text-center">
            <Image
              src="/join-the-art-crew/2.png"
              layout="fixed"
              width={170}
              height={170}
              alt="Earn step icon"
              className="mx-auto mb-2"
            />
            <h4 className="text-2xl font-bold text-purple-dark">
              {t("sections.join_the_artcrew.steps.2.title")}
            </h4>
            <p className="max-w-xs m-auto text-white text-xl">
              {t("sections.join_the_artcrew.steps.2.text")}
            </p>
          </div>
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
      <CreditsBage
        className="bg-purple-dark"
        href="https://instagram.com/boxadessin"
      >
        by @boxadessin
      </CreditsBage>
    </section>
  );
}
