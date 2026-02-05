import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { Button } from "../elements/button";
import { Parallax } from "../elements/parallax";
import { CaptainCrateSvg } from "../elements/svg";

export function SubscribeNowSection() {
  const { t, lang } = useTranslation("common");

  return (
    <section className="py-16 md:py-28 px-10 bg-subscribe-now text-center bg-cover">
      <h3 className="font-display text-white text-2xl md:text-5xl mb-10">
        {t("sections.subscribe_now.title")}
      </h3>

      <div className="md:flex md:space-x-32 justify-center align-center">
        <div className="bg-purple-dark text-center text-white flex flex-col pt-4 pb-10 rounded">
          <CaptainCrateSvg variant="plus" className="self-center" />
          <Parallax offset={-30}>
            <Image
              src="/subscribe-now/1-month-box.png"
              width="532"
              height="280"
              alt="One month subscription box"
            />
          </Parallax>

          <div className="flex align-center justify-center">
            <svg
              id="Ebene_1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 180.866 255.795"
              width="280.866"
              height="200.795"
            >
              <defs>
                <style>{`.st0{fill:#fff}`}</style>
              </defs>
              <path
                className="st0"
                d="m18.635 105.371 4.125 14.435 21.503 -10.307 5.595 6.478L17.456 149.853l1.473 15.318 49.783 0.293 -0.883 -13.546 -34.169 -1.179L68.712 117.154l-21.796 -26.802zm96.553 17.609 4.712 -6.659 -0.883 -30.246 -43.251 2.938 -1.82 33.135 5.302 6.936 -6.775 8.603 1.276 25.216 46.11 1.276 0.334 -35.924zm-25.908 -23.14 13.242 0.105v12.488l-13.444 2.224 0.199 -14.817Zm-1.169 51.253 0.859 -16.737 15.025 -0.277 0.59 17.483 -16.471 -0.466Zm70.376 -26.869L134.629 126.287l-3.239 31.519 28.574 0.883 0.587 -7.951 -20.62 -1.769 0.59 -15.315 19.443 -1.179z"
              />
              <path
                className="st0"
                d="m126.909 136.191 -0.539 5.092 26.982 -0.089 -0.533 -6.163zm1.966 7.049 -0.805 5.003h25.106l0.358 -5.716z"
              />
            </svg>
          </div>
          <p className="mt-3">
            {t("sections.subscribe_now.subscriptions.0.payment_cycle")}
          </p>
          <Button
            className="bg-orange text-white mb-4 mt-2 md:mt-5"
            href={`https://shop.upcrate.art${
              lang === "en" ? "" : "/de"
            }/bi-monthly-subscription-pay-every-second-month/`}
          >
            {t("sections.subscribe_now.subscriptions.0.cta")}
          </Button>
          <p>{t("sections.subscribe_now.subscriptions.0.dollar_estimation")}</p>
        </div>
      </div>

      <div className="py-2 px-4 bg-white inline-block text-purple-dark mt-16 text-xl">
        {t("sections.subscribe_now.cancellation_text")}
      </div>
    </section>
  );
}
