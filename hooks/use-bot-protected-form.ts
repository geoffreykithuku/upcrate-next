import React, { useState, useRef } from "react";

/**
 * Enhanced form hook with built-in bot protection
 * Includes: CAPTCHA verification, honeypot field, and timing-based detection
 */
export function useBotProtectedForm() {
  const [captchaToken, setCaptchaToken] = useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const formStartTime = useRef<number>(Date.now());
  const honeypotValue = useRef("");

  // Handle CAPTCHA verification status change
  const handleCaptchaVerification = (isVerified: boolean, token: string) => {
    setIsCaptchaVerified(isVerified);
    setCaptchaToken(token);
  };

  // Handle timing start (when user first interacts with form)
  const handleTimingStart = () => {
    if (!formStartTime.current) {
      formStartTime.current = Date.now();
    }
  };

  // Get time taken since form start
  const getTimeTaken = () => {
    if (!formStartTime.current) return 0;
    return Math.floor((Date.now() - formStartTime.current) / 1000);
  };

  // Handle honeypot field change (should never be filled by real users)
  const handleHoneypotChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    honeypotValue.current = e.target.value;
  };

  // Check if form submission should be allowed
  const canSubmit = () => {
    // CAPTCHA must be verified
    if (!isCaptchaVerified || !captchaToken) {
      return false;
    }

    // Honeypot must be empty
    if (honeypotValue.current) {
      return false;
    }

    // Must take at least 3 seconds
    if (getTimeTaken() < 3) {
      return false;
    }

    return true;
  };

  // Get data to include in form submission
  const getBotProtectionData = () => ({
    captchaToken,
    timeTaken: getTimeTaken(),
    honeypot: honeypotValue.current,
  });

  return {
    captchaToken,
    isCaptchaVerified,
    canSubmit,
    getBotProtectionData,
    handleTimingStart,
    handleCaptchaVerification,
    handleHoneypotChange,
    honeypotValue,
  };
}
