import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Checkbox } from ".";
import { sendMail } from "../utils/send-mail";
import { FormattedText } from "./elements/formatted-text";
import { CanvasCaptcha } from "./CanvasCaptcha";

const initialFormData = {
  name: "",
  email: "",
  message: "",
  acceptTerms: false,
};

function ErrorMessage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white py-1 mt-1 px-4 font-bold text-pink text-base md:text-xl">
      {children}
    </div>
  );
}

export function ContactForm() {
  const { t } = useTranslation("common");
  const [formData, setFormData] = React.useState(initialFormData);
  const [isLoading, setIsLoading] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState<
    "submitted" | "success" | "error" | undefined
  >(undefined);
  const [captchaData, setCaptchaData] = React.useState({
    text: "",
    userInput: "",
    id: "",
  });
  const [captchaError, setCaptchaError] = React.useState("");
  const formStartTime = React.useRef(Date.now());
  const honeypotValue = React.useRef("");
  const companyNameValue = React.useRef("");
  const middleNameValue = React.useRef("");
  const secondaryEmailValue = React.useRef("");

  const handleCaptchaChange = (text: string, userInput: string, id: string) => {
    setCaptchaData({ text, userInput, id });
    setCaptchaError("");
  };

  const handleInputChange = (event) => {
    if (formStatus !== "submitted" && !hasErrors()) {
      setFormStatus(undefined);
    }

    if (event.target.name === "acceptTerms") {
      return setFormData({
        ...formData,
        [event.target.name]: !formData[event.target.name],
      });
    }

    if (event.target.name === "website") {
      honeypotValue.current = event.target.value;
      return;
    }

    if (event.target.name === "companyName") {
      companyNameValue.current = event.target.value;
      return;
    }

    if (event.target.name === "middleName") {
      middleNameValue.current = event.target.value;
      return;
    }

    if (event.target.name === "secondaryEmail") {
      secondaryEmailValue.current = event.target.value;
      return;
    }

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const hasErrors = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.acceptTerms
    ) {
      return true;
    }

    return false;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setFormStatus("submitted");
    setCaptchaError("");

    //TODO: validate
    if (hasErrors()) {
      setFormStatus("error");
      setIsLoading(false);
      return;
    }

    // Verify CAPTCHA
    if (!captchaData.userInput || !captchaData.text) {
      setFormStatus("error");
      setCaptchaError(t("forms.captcha_error_empty"));
      setIsLoading(false);
      return;
    }

    const timeTaken = Math.floor((Date.now() - formStartTime.current) / 1000);

    try {
      // Verify CAPTCHA with API
      const captchaResponse = await fetch("/api/validate-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          captchaId: captchaData.id,
          userInput: captchaData.userInput,
          captchaText: captchaData.text,
          timeTaken,
          honeypot: honeypotValue.current,
        }),
      });

      const captchaResult = await captchaResponse.json();

      if (!captchaResult.success || !captchaResult.token) {
        setFormStatus("error");
        setCaptchaError(t("forms.captcha_error_invalid"));
        setIsLoading(false);
        return;
      }

      // CAPTCHA verified, now send email
      const res = await sendMail(
        process.env.NEXT_PUBLIC_RECIPIENT_MAIL,
        formData.name,
        formData.email,
        formData.message,
        captchaResult.token,
        Math.floor((Date.now() - formStartTime.current) / 1000),
        honeypotValue.current,
        companyNameValue.current,
        middleNameValue.current,
        secondaryEmailValue.current,
      );

      if (res.status < 300) {
        setFormData(initialFormData);
        setFormStatus("success");
        setIsLoading(false);
      } else {
        setFormStatus("error");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
      setIsLoading(false);
    }
  };

  const backgroundClass =
    formStatus || isLoading
      ? formStatus === "error"
        ? "bg-pink"
        : "bg-green"
      : "bg-orange";

  return (
    <div
      className={`md:max-w-6xl p-5 md:p-10 py-10 mx-auto mt-12 text-purple-dark text-xl md:text-3xl ${backgroundClass}`}
    >
      <h2 className="font-bold text-center">{t("pages.contact.form.title")}</h2>
      <p className="text-center mt-2 text-base whitespace-pre-line">
        {t("pages.contact.form.subtitle")}
      </p>

      <div className="mt-10">
        <p className="text-lg mb-5">{t("forms.intro")}</p>
        {formStatus !== "success" && (
          <form onSubmit={(event) => submitForm(event)}>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-y-10 md:gap-x-20 justify-between text-left">
              <div>
                <label className="font-bold flex flex-col">
                  {t("forms.name_label")}*
                  <input
                    type="text"
                    className="font-normal text-base p-4"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                {formStatus === "error" && !formData.name && (
                  <ErrorMessage>{t("forms.name_error")}</ErrorMessage>
                )}
              </div>
              <div>
                <label className="font-bold flex flex-col">
                  {t("forms.email_label")}*
                  <input
                    type="email"
                    className="font-normal text-base p-4"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formStatus === "error" && !formData.email && (
                    <ErrorMessage>{t("forms.email_error")}</ErrorMessage>
                  )}
                </label>
              </div>

              <div className="col-span-2">
                <label className="font-bold flex flex-col">
                  {t("forms.message_label")}*
                  <textarea
                    className="font-normal text-base p-4"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                  {formStatus === "error" && !formData.message && (
                    <ErrorMessage>{t("forms.message_error")}</ErrorMessage>
                  )}
                </label>
              </div>

              <div className="col-span-2">
                <div className="text-xl flex align-center gap-4">
                  <Checkbox
                    name="acceptTerms"
                    label={
                      <FormattedText
                        transKey="common:forms.privacy_label"
                        delimiter={[
                          <a
                            className="underline inline-block mx-2"
                            href="/privacy"
                          />,
                        ]}
                      />
                    }
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                  />
                </div>

                {formStatus === "error" && !formData.acceptTerms && (
                  <ErrorMessage>{t("forms.terms_error")}</ErrorMessage>
                )}
              </div>
            </div>

            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                opacity: 0,
              }}
              aria-hidden="true"
            />

            <div className="col-span-2">
              <CanvasCaptcha
                onCaptchaChange={handleCaptchaChange}
                error={
                  formStatus === "error" && captchaError ? captchaError : ""
                }
              />
            </div>

            <button
              type="submit"
              className="font-display p-3 pt-2 pb-3 md:text-3xl inline-flex items-center content-center mt-5 max-w-max mx-auto bg-purple text-white px-10 md:px-20"
            >
              {isLoading ? "Sending…" : "Send"}
            </button>
          </form>
        )}

        {formStatus === "success" && (
          <div className="text-3xl md:text-6xl text-center text-white font-display pt-10 pb-20 max-w-4xl mx-auto whitespace-pre-line">
            {t("forms.success_message")}
          </div>
        )}
      </div>
    </div>
  );
}
