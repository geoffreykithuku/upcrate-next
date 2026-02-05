import { validateBotProtectionFromRequest } from "../../utils/bot-protection";

export default async function newsletter(req, res) {
  const { email, honeypot, companyName, middleName, secondaryEmail } = req.body;

  // Bot Protection: Check honeypot fields
  if (honeypot || companyName || middleName || secondaryEmail) {
    return res.status(400).json({
      success: false,
      error: "Invalid submission",
    });
  }

  // Bot Protection: Validate CAPTCHA, honeypot, and timing
  const botCheck = validateBotProtectionFromRequest(req);
  if (!botCheck.isValid) {
    return res.status(400).json({
      success: false,
      error: botCheck.error || "Invalid submission",
    });
  }

  try {
    const response = await fetch(
      "https://shop.upcrate.art/wp-json/upcrate/v1/add-subscriber",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      },
    );

    const data = await response.json();

    if (!data.success) {
      return res.status(200).json(data);
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, data: error.message });
  }
}
