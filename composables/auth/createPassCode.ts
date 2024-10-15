
import CryptoJS from "crypto-js";
import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";
import { use_validate_wema_otp } from "@/composables/auth/validateWemaOtpCreation";

const secretKey = "LoanIQEncryption";

const credential = {
  passcode: ref(""),
};

export const use_create_passcode = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const { validateWemaOtp, setPayloadObj } = use_validate_wema_otp();
  const router = useRouter();

  const getEncryptedData = () => {
    try {
      const encryptedUserId = localStorage.getItem("userId");
      const encryptedOtp = localStorage.getItem("otp");

      if (encryptedUserId && encryptedOtp) {
        const userId = CryptoJS.AES.decrypt(
          encryptedUserId,
          secretKey
        ).toString(CryptoJS.enc.Utf8);
        const otp = CryptoJS.AES.decrypt(encryptedOtp, secretKey).toString(
          CryptoJS.enc.Utf8
        );
        return { userId, otp };
      }
      throw new Error("User ID or OTP not found in local storage.");
    } catch (error) {
      showToast({
        title: "Error",
        message: "Failed to retrieve encrypted data.",
        toastType: "error",
        duration: 3000,
      });
      return null;
    }
  };

  const { userId, otp } = getEncryptedData() || {};

  const createPasscode = async () => {
    if (!userId || !otp) {
      showToast({
        title: "Error",
        message: "Missing user ID or OTP. Please try again.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    const payload = {
      userId,
      otp,
      passcode: credential.passcode.value,
    };
    loading.value = true;

    try {
      const res = (await auth_api.$_create_passcode(payload)) as any;

      if (res?.type !== "ERROR" && res.data) {
        showToast({
          title: "Success",
          message: "Passcode created successfully",
          toastType: "success",
          duration: 3000,
        });

        const payload = {
          trackingId: res?.data?.data?.trackingId,
          otp: "123456",
          userId: res?.data.data?.userId,
        };
        setPayloadObj(payload);

        try {
          const wemaResponse = (await validateWemaOtp()) as any;
          if (wemaResponse.success) {
            showToast({
              title: "Success",
              message:
                "Your wallet will be created shortly. Kindly proceed to the dashboard.",
              toastType: "success",
              duration: 3000,
            });
            router.push("/account-creation-success");
          }
        } catch (wemaError: any) {
          showToast({
            title: "Error",
            message:
              wemaError?.response?.data?.message ||
              "An error occurred during OTP validation.",
            toastType: "error",
            duration: 3000,
          });
        }
      } else {
        handleApiError(res);
      }
    } catch (error: any) {
      showToast({
        title: "Error",
        message:
          error?.response?.data?.message ||
          "An error occurred while creating passcode.",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  const handleApiError = (res: any) => {
    const message = res?.data?.message || "An unexpected error occurred.";
    showToast({
      title: "Error",
      message,
      toastType: "error",
      duration: 3000,
    });
    console.error("API Error:", message);
  };

  return {
    createPasscode,
    loading,
    credential,
  };
};
