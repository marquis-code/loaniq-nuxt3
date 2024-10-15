import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";

export const use_recover_passcode = () => {
  const Router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const credential = {
    phoneNumber: ref(""),
  };

  const recoverPasscode = async () => {
    if (!credential.phoneNumber.value) {
      showToast({
        title: "Error",
        message: "Phone number is required.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    loading.value = true;

    try {
      const res = (await auth_api.$_recover_passcode({
        phoneNumber: credential.phoneNumber.value,
      })) as any;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "OTP sent to your phone number",
          toastType: "success",
          duration: 3000,
        });

        // Redirect to the verify OTP page
        Router.push("/verify-account");
      } else {
        showToast({
          title: "Error",
          message: res.data.message || "Failed to send OTP",
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error: any) {
      loading.value = false;
      showToast({
        title: "Error",
        message: error?.message || "An unexpected error occurred.",
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  return { credential, recoverPasscode, loading };
};
