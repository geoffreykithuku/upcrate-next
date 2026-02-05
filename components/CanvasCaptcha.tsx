import React, { useEffect, useRef, useState } from "react";
import useTranslation from "next-translate/useTranslation";

interface CanvasCaptchaProps {
  onCaptchaChange: (
    captchaText: string,
    userInput: string,
    captchaId: string,
  ) => void;
  onTimingStart?: () => void;
  error?: string;
}

export function CanvasCaptcha({
  onCaptchaChange,
  onTimingStart,
  error,
}: CanvasCaptchaProps) {
  const { t } = useTranslation("common");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [captchaText, setCaptchaText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [captchaId, setCaptchaId] = useState("");

  // Generate random text for CAPTCHA
  const generateCaptchaText = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Removed ambiguous characters
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
  };

  // Draw distorted text on canvas
  const drawCaptcha = (text: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background with noise
    ctx.fillStyle = "#f3f4f6";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add noise lines
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 100 + 100}, ${
        Math.random() * 100 + 100
      }, ${Math.random() * 100 + 100}, 0.3)`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Draw distorted text
    ctx.font = "bold 20px Arial";
    ctx.textBaseline = "middle";

    const spacing = canvas.width / (text.length + 1);
    for (let i = 0; i < text.length; i++) {
      ctx.save();

      // Random position and rotation
      const x = spacing * (i + 1) + (Math.random() - 0.5) * 6;
      const y = canvas.height / 2 + (Math.random() - 0.5) * 8;
      const rotation = (Math.random() - 0.5) * 0.25;

      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Random color (dark colors for readability)
      const colors = ["#7c3aed", "#db2777", "#ea580c", "#059669"];
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];

      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }

    // Add noise dots
    for (let i = 0; i < 90; i++) {
      ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.3})`;
      ctx.fillRect(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2,
        2,
      );
    }
  };

  // Initialize CAPTCHA
  const initializeCaptcha = () => {
    const newText = generateCaptchaText();
    const newId = `captcha_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    setCaptchaText(newText);
    setCaptchaId(newId);
    setUserInput("");
    drawCaptcha(newText);
  };

  // Handle user input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setUserInput(value);
    onCaptchaChange(captchaText, value, captchaId);
  };

  // Initialize on mount
  useEffect(() => {
    initializeCaptcha();
    // Notify parent that form interaction started
    if (onTimingStart) {
      onTimingStart();
    }
  }, []);

  return (
    <div className="w-full mt-5">
      <div className="flex items-center gap-3 mb-2">
        <label className="font-bold text-lg">{t("forms.captcha_label")}*</label>
        <canvas
          ref={canvasRef}
          width={150}
          height={30}
          className="border-2 border-gray-300"
          aria-label="CAPTCHA challenge image"
        />
      </div>

      <div>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder={t("forms.captcha_placeholder")}
          maxLength={6}
          className="w-full px-4 py-2 border-2 border-gray-300 text-purple-dark text-base"
          aria-label="CAPTCHA input field"
        />
        {error && (
          <div className="bg-white py-1 mt-1 px-4 font-bold text-pink text-base md:text-xl">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
