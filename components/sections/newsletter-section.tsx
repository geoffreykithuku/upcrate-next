import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import React from "react";
import { useIsDesktopSafari } from "../../hooks/use-is-desktop-safari";
import { useNewsletterForm } from "../../hooks/use-newsletter-form";
import { useWindowSize } from "../../hooks/use-window-size";
import { Checkbox } from "../elements/checkbox";
import { CreditsBage } from "../elements/credits-badge";
import { FormattedText } from "../elements/formatted-text";
import { RadialGradient } from "../elements/radial-gradient";
import { Caret } from "../elements/svg";
import { PensAndBrushesSvg } from "../elements/svg/pens-and-brushes";
import { CanvasCaptcha } from "../CanvasCaptcha";

export function NewsletterSection({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  const { t } = useTranslation("common");
  const { width } = useWindowSize();
  const isDesktopSafari = useIsDesktopSafari();

  const {
    email,
    terms,
    error,
    isLoading,
    formStatus,
    handleSubmit,
    handleChange,
    handleCaptchaChange,
    captchaError,
  } = useNewsletterForm();

  return (
    <div className={className}>
      <section className="text-center text-purple-dark pt-32 pb-0 px-10 md:px-32 md:pt-20 relative overflow-hidden -mt-20 md:-mt-10">
        <RadialGradient className="bg-purple" />
        <div className="z-10 relative text-purple-dark">
          {children}
          <div
            className={`md:max-w-6xl p-5 md:p-10 py-10 md:mx-auto md:mt-12 md:pt-32 md:pb-20 text-purple-dark text-xl md:text-3xl bg-green md:rounded md:px-20 relative mb-20 ${
              error ? "bg-pink" : ""
            } relative overflow-hidden -mx-10 mt-10 md:mt-0`}
          >
            <RadialGradient className="bg-purple" variant="top-left" />
            <div className="p-5 relative border-l-2 border-b-2 border-white border-r-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="937.021"
                height="19.513"
                viewBox="0 0 937.021 19.513"
                className="absolute -top-4 left-0 right-0 max-w-full"
                style={{ marginTop: width > 500 ? -2 : 3 }}
              >
                <path
                  id="Path_380"
                  data-name="Path 380"
                  d="M-1443.67-2246.793h-468.382L-1933-2263.971v17.177h-447.695"
                  transform="translate(2380.692 2265.556)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
              <div className="z-20">
                {!formStatus && (
                  <>
                    <h4 className="text-purple-dark text-2xl sm:text-3xl md:text-5xl md:max-w-4xl text-center mx-auto font-display text-center">
                      {t("sections.newsletter_form.title")}
                    </h4>
                    <p className="text-base md:text-2xl mt-4 font-bold md:mt-10">
                      {t("sections.newsletter_form.benefits.0.text")}
                    </p>
                    <p className="text-base md:text-2xl mt-2 mb-4 font-bold">
                      {t("sections.newsletter_form.benefits.1.text")}
                    </p>
                  </>
                )}

                {!formStatus && (
                  <form
                    className="md:max-w-md md:mt-10 flex mx-auto flex-col"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <input
                      type="email"
                      className="font-normal text-base p-4"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      placeholder={t("forms.email_label")}
                    />

                    <div className="mt-4">
                      <Checkbox
                        name="terms"
                        checked={terms}
                        onChange={handleChange}
                        label={
                          <span className="text-base text-left">
                            <FormattedText
                              transKey="common:forms.terms_label"
                              delimiter={[
                                <a
                                  className="underline hover:text-pink"
                                  href="/terms-and-conditions"
                                />,
                              ]}
                            />
                          </span>
                        }
                      />
                      {error ? (
                        <p className="text-white text-base bg-pink mt-2">
                          {error}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-4">
                      <CanvasCaptcha
                        onCaptchaChange={handleCaptchaChange}
                        error={captchaError}
                      />
                    </div>

                    <button
                      type="submit"
                      className="z-30 font-display p-3 pt-2 pb-3 w-full justify-center md:text-3xl inline-flex items-center relative mt-5 bg-green-darker hover:bg-green-dark text-white px-10 mx-auto"
                    >
                      {isLoading ? "Sending..." : "Join Email List"}
                      <span className="inline-block ml-4">
                        <Caret />
                      </span>
                    </button>

                    <p className="text-base mt-5 z-30">
                      <FormattedText
                        transKey="common:forms.privacy_label"
                        delimiter={[
                          <a
                            className="underline hover:text-pink"
                            href="/privacy"
                          />,
                        ]}
                      />
                    </p>
                  </form>
                )}

                {formStatus === "success" && (
                  <div className="text-3xl md:text-6xl text-center text-white font-display pt-10 pb-20 max-w-4xl mx-auto">
                    {t("forms.success_message")}
                  </div>
                )}
                <div className="absolute left-0 right-0 -bottom-48 flex justify-center z-10">
                  <PensAndBrushesSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={
          isDesktopSafari
            ? "bg-purple-lighter text-center text-purple-dark pb-6 md:px-10 md:px-32 md:pb-24 relative overflow-hidden"
            : "text-center text-purple-dark pb-6 md:px-10 md:px-32 md:pb-24 relative overflow-hidden -mt-20"
        }
        style={{
          ...(isDesktopSafari ? { marginTop: -250 } : {}),
          ...(isDesktopSafari ? { paddingTop: 100 } : {}),
        }}
      >
        <div className="mx-5 mb-10 md:mb-0 md:max-w-6xl mx-auto px-10 relative">
          <RadialGradient className="bg-orange w-full" variant="center-xl" />
          <div className="z-10 relative text-purple-dark">
            <h3 className="font-display text-2xl md:text-5xl md:mt-48 block text-white max-w-3xl mx-auto relative z-30 text-center pt-20 md:pt-0">
              {t("sections.newsletter_form.advantages.title")}
            </h3>

            <div className="relative">
              <RadialGradient variant="top" className="md:hidden bg-orange" />
              <RadialGradient
                variant="bottom"
                className="md:hidden bg-orange"
              />
              <div className="md:flex gap-10 md:gap-20 justify-center relative z-10">
                <div>
                  <Image
                    src="/newsletter/advantage01.gif"
                    width={600}
                    height={600}
                    alt="Newsletter advantage"
                  />
                  <p className="text-2xl font-bold text-center">
                    {t("sections.newsletter_form.advantages.columns.0.text")}
                  </p>
                </div>
                <div>
                  <Image
                    src="/newsletter/advantage02.gif"
                    width={600}
                    height={600}
                    alt="Newsletter advantage"
                  />
                  <p className="text-2xl font-bold text-center">
                    {t("sections.newsletter_form.advantages.columns.1.text")}
                  </p>
                </div>
                <div>
                  <Image
                    src="/newsletter/advantage03.gif"
                    width={600}
                    height={600}
                    alt="Newsletter advantage"
                  />
                  <p className="text-2xl font-bold text-center">
                    {t("sections.newsletter_form.advantages.columns.2.text")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CreditsBage
          className="bg-purple-dark"
          href="https://www.instagram.com/sarkasik/"
        >
          by @sarkasik
        </CreditsBage>
      </section>
    </div>
  );
}
