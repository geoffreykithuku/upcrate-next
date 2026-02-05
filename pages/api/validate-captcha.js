import crypto from "crypto";

// Store for valid tokens (in production, use Redis or database)
const validTokens = new Map();

// Clean up expired tokens every 5 minutes
setInterval(
  () => {
    const now = Date.now();
    for (const [token, expiry] of validTokens.entries()) {
      if (now > expiry) {
        validTokens.delete(token);
      }
    }
  },
  5 * 60 * 1000,
);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method not allowed" });
  }

  try {
    const {
      captchaId,
      userInput,
      captchaText,
      timeTaken,
      honeypot,
      companyName,
      middleName,
      secondaryEmail,
    } = req.body;

    // Bot Protection: Honeypot field check
    if (honeypot || companyName || middleName || secondaryEmail) {
      console.log("Bot detected: Honeypot field(s) filled");
      return res.status(400).json({
        success: false,
        error: "Invalid submission",
      });
    }

    // Bot Protection: Timing check (must take at least 3 seconds)
    if (timeTaken < 3) {
      console.log(`Bot detected: Form filled too quickly (${timeTaken}s)`);
      return res.status(400).json({
        success: false,
        error: "Submission too fast",
      });
    }

    // Validate required fields
    if (!captchaId || !userInput || !captchaText) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    // Extract timestamp from captchaId
    const timestampMatch = captchaId.match(/^captcha_(\d+)_/);
    if (!timestampMatch) {
      return res.status(400).json({
        success: false,
        error: "Invalid CAPTCHA ID format",
      });
    }

    const captchaTimestamp = parseInt(timestampMatch[1], 10);
    const currentTimestamp = Date.now();

    // Bot Protection: CAPTCHA expiry check (valid for 5 minutes)
    const captchaAge = currentTimestamp - captchaTimestamp;
    const maxAge = 5 * 60 * 1000; // 5 minutes
    if (captchaAge > maxAge) {
      return res.status(400).json({
        success: false,
        error: "CAPTCHA expired",
      });
    }

    // Bot Protection: Prevent replay attacks (CAPTCHA too new, < 2 seconds)
    if (captchaAge < 2000) {
      console.log("Bot detected: CAPTCHA verified too quickly");
      return res.status(400).json({
        success: false,
        error: "Verification too fast",
      });
    }

    // Verify CAPTCHA text (case-insensitive)
    if (userInput.toUpperCase() !== captchaText.toUpperCase()) {
      return res.status(400).json({
        success: false,
        error: "Incorrect CAPTCHA",
      });
    }

    // Generate a short-lived verification token (valid for 10 minutes)
    const token = crypto.randomBytes(32).toString("hex");
    const tokenExpiry = currentTimestamp + 10 * 60 * 1000; // 10 minutes

    // Store token with expiry
    validTokens.set(token, tokenExpiry);

    return res.status(200).json({
      success: true,
      token,
      expiresIn: 600, // seconds
    });
  } catch (error) {
    console.error("CAPTCHA validation error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
}

// Export function to validate tokens from form submissions
export function validateToken(token) {
  if (!token) return false;

  const expiry = validTokens.get(token);
  if (!expiry) return false;

  const now = Date.now();
  if (now > expiry) {
    validTokens.delete(token);
    return false;
  }

  // Token is valid - delete it (one-time use)
  validTokens.delete(token);
  return true;
}
