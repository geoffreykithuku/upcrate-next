/**
 * Bot Protection Utilities
 *
 * Helper functions to validate bot protection measures on the server side
 */

import { validateToken } from "../pages/api/validate-captcha";

export interface BotProtectionData {
  captchaToken?: string;
  timeTaken?: number;
  honeypot?: string;
}

export interface BotProtectionResult {
  isValid: boolean;
  error?: string;
  reason?: string;
}

/**
 * Validates all bot protection measures
 * @param data - Bot protection data from form submission
 * @returns Validation result with error details if invalid
 */
export function validateBotProtection(
  data: BotProtectionData,
): BotProtectionResult {
  const { captchaToken, timeTaken, honeypot } = data;

  // Check 1: Honeypot field must be empty
  if (honeypot && honeypot.trim() !== "") {
    return {
      isValid: false,
      error: "Invalid submission",
      reason: "honeypot",
    };
  }

  // Check 2: Timing validation (must take at least 3 seconds)
  if (timeTaken !== undefined && timeTaken < 3) {
    return {
      isValid: false,
      error: "Submission too fast. Please try again.",
      reason: "timing",
    };
  }

  // Check 3: CAPTCHA token must be present
  if (!captchaToken || captchaToken.trim() === "") {
    return {
      isValid: false,
      error: "CAPTCHA verification required",
      reason: "missing_captcha",
    };
  }

  // Check 4: CAPTCHA token must be valid
  if (!validateToken(captchaToken)) {
    return {
      isValid: false,
      error: "Invalid or expired CAPTCHA token",
      reason: "invalid_captcha",
    };
  }

  // All checks passed
  return { isValid: true };
}

/**
 * Express/Next.js middleware-style function to validate bot protection
 * @param req - Request object
 * @returns Validation result
 */
export function validateBotProtectionFromRequest(
  req: any,
): BotProtectionResult {
  const { captchaToken, timeTaken, honeypot } = req.body;

  return validateBotProtection({
    captchaToken,
    timeTaken,
    honeypot,
  });
}

/**
 * Simple check for CAPTCHA token only (for lightweight protection)
 * @param captchaToken - The CAPTCHA token to validate
 * @returns True if valid, false otherwise
 */
export function validateCaptchaToken(captchaToken: string): boolean {
  if (!captchaToken || captchaToken.trim() === "") {
    return false;
  }

  return validateToken(captchaToken);
}
