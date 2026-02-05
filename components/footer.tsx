import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { CaptainCrateSvg } from "./elements/svg/cpt-crate-svg";
import { FooterNewsletterForm } from "./footer-newsletter-form";
import Script from "next/script";

export function Footer(): JSX.Element {
  const { t, lang } = useTranslation("common");

  return (
    <footer className="bg-purple-dark text-white pt-20">
      <div className="container mx-auto p-5 md:p-0 w-full grid mb-4 md:grid-cols-6">
        <CaptainCrateSvg variant="head-only" className="text-white mb-5" />
        <div>
          <h4 className="mb-4 text-xl uppercase">
            {t("navigation.legal_headline")}
          </h4>
          <ul className="list-reset leading-normal text-red text-xl">
            <li>
              <Link href="/imprint">
                <a>
                  <Trans
                    i18nKey="common:navigation.imprint"
                    components={{
                      1: <br />,
                    }}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <a>
                  <Trans
                    i18nKey="common:navigation.privacy"
                    components={{
                      1: <br />,
                    }}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions">
                <a>
                  <Trans
                    i18nKey="common:navigation.terms_and_conditions"
                    components={{
                      1: <br />,
                    }}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cancellation-policy">
                <a>
                  <Trans
                    i18nKey="common:navigation.cancellation_policy"
                    components={{
                      1: <br />,
                    }}
                  />
                </a>
              </Link>
            </li>
          </ul>

          <img src="/tube.svg" width="100%" height="auto" alt="" />
        </div>
        <div className="md:col-span-2">
          <h4 className="mb-4 text-xl uppercase">
            {t("navigation.info_headline")}
          </h4>
          <ul className="list-reset leading-normal text-blue text-xl">
            <li>
              
            </li>
            <li>
              <Link href="/contact">{t("navigation.help_contact")}</Link>
            </li>
            <li>
              <Link href="/faq">FAQs</Link>
            </li>
            <li>
              <Link href={`https://shop.upcrate.art/${lang}/account/`}>
                {t("navigation.signup_login")}
              </Link>
            </li>
          </ul>
          <img src="/pen.svg" width="100%" height="auto" alt="" />
        </div>
        <div className="md:col-span-2 flex flex-col justify-between">
          <FooterNewsletterForm/>
        </div>
      </div>

      <div
        className="p-5 md:p-0 container mx-auto mb-4 grid grid-cols-2 items-end"
        style={{ gridTemplateColumns: "2fr 1fr" }}
      >
        <div>
          <ul className="grid md:inline-flex flex-wrap md:space-x-8">
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/Upcrate/"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/upcrate/"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.pinterest.de/Upcrate_Art/"
              >
                Pinterest
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/upcrateart"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCuBKFplxdLGbCKJaiKnHgcg"
              >
                Youtube
              </a>
            </li>
          </ul>
        </div>
        <p className="text-white text-xl md:text-2xl">
          {t("footer.get_support")}
          <br />
          <a
            className="underline hover:text-pink"
            href="mailto:support@upcrate.art"
          >
            support@upcrate.art
          </a>
        </p>
      </div>

      <div className="text-center bg-purple-light text-white p-4">
        © Copyright 2019 - 2025 – Upcrate Art Pirates
      </div>

      <Script
        type="text/javascript"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function () { 
              var _tsid = 'XDB7EA39C9DE2A7C57996E689CCBBA016'; 
              _tsConfig = { 
                'yOffset': '0', /* offset from page bottom */
                'variant': 'reviews', /* default, reviews, custom, custom_reviews */
                'customElementId': '', /* required for variants custom and custom_reviews */
                'trustcardDirection': '', /* for custom variants: topRight, topLeft, bottomRight, bottomLeft */
                'customBadgeWidth': '', /* for custom variants: 40 - 90 (in pixels) */
                'customBadgeHeight': '', /* for custom variants: 40 - 90 (in pixels) */
                'disableResponsive': 'false', /* deactivate responsive behaviour */
                'disableTrustbadge': 'false' /* deactivate trustbadge */
              };
              var _ts = document.createElement('script');
              _ts.type = 'text/javascript'; 
              _ts.charset = 'utf-8'; 
              _ts.async = true; 
              _ts.src = '//widgets.trustedshops.com/js/' + _tsid + '.js'; 
              var __ts = document.getElementsByTagName('script')[0];
              __ts.parentNode.insertBefore(_ts, __ts);
            })();`,
        }}
      />
    </footer>
  );
}