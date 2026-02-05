import axios from "axios";

export async function addMember(
  email: string,
  captchaToken = "",
  timeTaken = 0,
  honeypot = "",
  companyName = "",
  middleName = "",
  secondaryEmail = "",
) {
  try {
    const response = await axios({
      method: "post",
      url: "/api/newsletter",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        email,
        captchaToken,
        timeTaken,
        honeypot,
        companyName,
        middleName,
        secondaryEmail,
      },
    });

    console.log(response.data);

    return response;
  } catch (error) {
    return error;
  }
}
