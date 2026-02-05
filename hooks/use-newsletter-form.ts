import * as React from "react";
import { addMember } from "../utils/newsletter-add-member";
import useTranslation from "next-translate/useTranslation";

export function useNewsletterForm() {
  const { t } = useTranslation("common");
  const [email, setEmail] = React.useState("");
  const [terms, setTerms] = React.useState(false);
  const [error, setError] = React.useState<boolean | number | string>(false);
  const [isLoading, setIsLoading] = React.useState(false);
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

  const [formStatus, setFormStatus] = React.useState<"success" | undefined>(
    undefined,
  );

  const handleCaptchaChange = (text: string, userInput: string, id: string) => {
    setCaptchaData({ text, userInput, id });
    setCaptchaError("");
  };

  const handleChange = (event) => {
    setError(false);
    setFormStatus(undefined);

    if (event.target.name === "email") {
      return setEmail(event.target.value);
    }

    if (event.target.name === "terms") {
      return setTerms(!terms);
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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);
    setCaptchaError("");
    setIsLoading(true);
    setFormStatus(undefined);

    if (!captchaData.userInput || !captchaData.text) {
      setCaptchaError(t("forms.captcha_error_empty"));
      setIsLoading(false);
      return;
    }

    if (new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email) && terms) {
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
            companyName: companyNameValue.current,
            middleName: middleNameValue.current,
            secondaryEmail: secondaryEmailValue.current,
          }),
        });

        const captchaResult = await captchaResponse.json();

        if (!captchaResult.success || !captchaResult.token) {
          setCaptchaError(t("forms.captcha_error_invalid"));
          setIsLoading(false);
          return;
        }

        // CAPTCHA verified, now add member
        const response = await addMember(
          email,
          captchaResult.token,
          timeTaken,
          honeypotValue.current,
          companyNameValue.current,
          middleNameValue.current,
          secondaryEmailValue.current,
        );

        console.log(response.data);

        if (!response.data) {
          setError(true);
          setIsLoading(false);

          return;
        }

        // @ts-ignore
        if (response.data.success === false) {
          setIsLoading(false);
          setError(response.data.data);

          return;
        }

        setIsLoading(false);
        return setFormStatus("success");
      } catch (error) {
        console.error("Newsletter submission error:", error);
        setError("An error occurred. Please try again.");
        setIsLoading(false);
        return;
      }
    }

    setIsLoading(false);
    setError(true);
  };

  return {
    email,
    terms,
    error,
    isLoading,
    formStatus,
    handleSubmit,
    handleChange,
    handleCaptchaChange,
    captchaError,
  };
}
