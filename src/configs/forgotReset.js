import forgotImage from "../assets/images/forgot-password.avif";
import resetImage from "../assets/images/reset-password.avif";

export const forgotConfig = {
  image: forgotImage,
  title: "Forgot Password",
  text: "Enter your email and we'll send you a link to reset your password",
  input: {
    type: "email",
    placeholder: "Enter yout email" 
  },
  button: {
    text: "Submit",
  }
};

export const resetConfig = {
  image: resetImage,
  title: "Reset Password",
  text: "Write a new password and log in with that new password",
  input: {
    type: "password",
    placeholder: "Enter new password" 
  },
  button: {
    text: "Submit",
  }
};