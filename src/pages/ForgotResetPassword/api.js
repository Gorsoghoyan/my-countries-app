import { sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../lib/firebase";

export const forgotPassword = async (email, setLoading, setError) => {
  setLoading(true);
  try {
    await sendPasswordResetEmail(auth, email);
    setLoading(false);
    setError("");
    toast.success("Please check your gmail");
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }
};

export const resetPassword = async (
  oobCode,
  newPassword,
  setLoading,
  setError
) => {
  setLoading(true);
  try {
    await confirmPasswordReset(auth, oobCode, newPassword);
    setLoading(false);
    setError("");
    toast.success("Password has been changed, you can login now.");
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }
};