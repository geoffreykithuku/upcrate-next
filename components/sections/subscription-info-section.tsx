import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { CancelAnyTimeSvg } from "../elements/svg/cancel-any-time-svg";
import { FreeShippingSvg } from "../elements/svg/free-shipping-svg";

export function SubscriptionInfoSection() {
  const { t, lang } = useTranslation("common");

  return (
    <section>
      <div className="max-w-6xl mx-auto grid grid-cols-3 md:pt-10 md:pb-16 text-purple-dark p-5 md:p-0">
        <div className="col-span-3">
          <h4 className="font-bold">
            {t("sections.subscription_info.columns.help_contact.title")}
          </h4>
          <ul className="mt-5 underline flex flex-col gap-2">
            <li>
              <Link href={`/${lang}/faq`}>
                {t(
                  "sections.subscription_info.columns.help_contact.links.0.text",
                )}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/faq`}>
                {t(
                  "sections.subscription_info.columns.help_contact.links.1.text",
                )}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/newsletter`}>
                {t(
                  "sections.subscription_info.columns.help_contact.links.2.text",
                )}
              </Link>
            </li>
            <li>
              <Link href={`/${lang}/contact`}>
                {t(
                  "sections.subscription_info.columns.help_contact.links.3.text",
                )}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3 md:col-span-1 mt-10 md:mt-12">
          <h4 className="font-bold uppercase text-2xl -mb-5">
            {" "}
            {t("sections.subscription_info.columns.shipping.title")}
          </h4>
          <Image
            src="/subscriptions/deutsche-post@2x.png"
            width={98}
            height={95}
            alt="Deutsche Post"
          />
        </div>
        <div className="col-span-3 md:col-span-1 mt-10 md:mt-12">
          <h4 className="font-bold uppercase text-2xl">
            {" "}
            {t("sections.subscription_info.columns.payment_methods.title")}
          </h4>
          <h5 className="underline mt-3 text-2xl">
            {t(
              "sections.subscription_info.columns.payment_methods.subscriptions",
            )}
          </h5>
          <div className="mt-3">
            <Image
              src="/subscriptions/payment-methods@2x.png"
              width={282}
              height={79}
              alt="Payment methods for subscriptions"
            />
          </div>
          <h5 className="underline mt-3 text-2xl">
            {t("sections.subscription_info.columns.payment_methods.shop")}
          </h5>
          <div className="mt-3">
            <Image
              src="/subscriptions/payment-methods@2x.png"
              width={282}
              height={79}
              alt="Payment methods for shop"
            />
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 mt-10 md:mt-12 mb-20 md:mb-0">
          <h4 className="font-bold uppercase text-2xl">
            {t("sections.subscription_info.columns.benefits.title")}
          </h4>
          <div className="flex gap-4 text-2xl md:mt-4 items-center">
            <div className="w-12">
              <FreeShippingSvg />
            </div>
            <span>
              {t("sections.subscription_info.columns.benefits.list.0.text")}
            </span>
          </div>
          <div className="flex gap-4 text-2xl md:mt-4 items-center">
            <div className="w-12">
              <CancelAnyTimeSvg />
            </div>
            <span>
              {t("sections.subscription_info.columns.benefits.list.1.text")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
