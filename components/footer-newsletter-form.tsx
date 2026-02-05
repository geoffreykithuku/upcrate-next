import useTranslation from "next-translate/useTranslation";
import { useNewsletterForm } from "../hooks/use-newsletter-form";
import { FormattedText } from "./elements/formatted-text";
import { Caret } from "./elements/svg";
import { CanvasCaptcha } from "./CanvasCaptcha";

export function FooterNewsletterForm() {
  const { t } = useTranslation("common");

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
    <div>
      <div className="mb-6">
        <p className="text-white text-lg">
          {t("footer.newsletter_form.title")}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="mb-3 flex space-x-4 items-center cursor-pointer">
          <input
            type="checkbox"
            name="terms"
            checked={terms}
            onChange={handleChange}
          />{" "}
          <span>
            <FormattedText
              transKey="common:forms.terms_label"
              delimiter={[
                <a
                  className="underline hover:text-pink"
                  href="/terms-and-conditions"
                />,
                <a className="underline hover:text-pink" href="/privacy" />,
              ]}
            />
          </span>
        </label>

        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          onChange={handleChange}
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            opacity: 0,
          }}
          aria-hidden="true"
        />

        <input
          type="text"
          name="companyName"
          autoComplete="off"
          tabIndex={-1}
          onChange={handleChange}
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            opacity: 0,
          }}
          aria-hidden="true"
        />

        <input
          type="text"
          name="middleName"
          autoComplete="off"
          tabIndex={-1}
          onChange={handleChange}
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            opacity: 0,
          }}
          aria-hidden="true"
        />

        <input
          type="text"
          name="secondaryEmail"
          autoComplete="off"
          tabIndex={-1}
          onChange={handleChange}
          style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            opacity: 0,
          }}
          aria-hidden="true"
        />

        <div className="mb-4">
          <CanvasCaptcha
            onCaptchaChange={handleCaptchaChange}
            error={captchaError}
          />
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder={t("forms.email_label")}
            className="w-full p-4 text-purple-dark"
            value={email}
            onChange={handleChange}
          />
          <button
            className="absolute top-0 right-2 bottom-0 text-red flex justify-center items-center cursor-pointer"
            type="submit"
          >
            {isLoading ? "Sending..." : <Caret />}
          </button>
        </div>
        {error ? (
          <p className="text-white text-base bg-pink mt-2 p-2">{error}</p>
        ) : null}
        {formStatus === "success" && (
          <p className="text-white text-base bg-green mt-2 p-2 whitespace-pre-line">
            {t("forms.success_message")}
          </p>
        )}
      </form>
    </div>
  );
}
