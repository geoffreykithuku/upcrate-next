import axios from "axios";

export const sendMail = async (
  recipientMail,
  name,
  senderMail,
  content,
  captchaToken = "",
  timeTaken = 0,
  honeypot = "",
  companyName = "",
  middleName = "",
  secondaryEmail = "",
) => {
  const data = {
    recipientMail,
    name,
    senderMail,
    content,
    captchaToken,
    timeTaken,
    honeypot,
    companyName,
    middleName,
    secondaryEmail,
  };

  try {
    return await axios({
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
  } catch (error) {
    return error;
  }
};
