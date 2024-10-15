import { useUser } from "@/composables/auth/user";
import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast';

const credential = {
  trackingId: ref(""),
  otp: ref("123456"),
  userId: ref(""),
};

export const use_validate_wema_otp = () => {
  const router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const validateWemaOtp = async () => {
    loading.value = true;
    try {
      const res = await auth_api.$_validate_wema_otp_creation({
        trackingId: credential.trackingId.value,
        otp: credential.otp.value,
        userId: credential.userId.value,
      }) as any;

      if (res.type !== "ERROR") {
        useUser().createUser(res.data);
        showToast({
          title: "Success",
          message: "Login successful",
          toastType: "success",
          duration: 3000,
        });
        router.push("/dashboard");
        return { success: true, data: res.data };
      } else {
        const errorMessage = res?.data?.errors[0]?.msg || "An error occurred during OTP validation.";
        showToast({
          title: "Error",
          message: errorMessage,
          toastType: "error",
          duration: 3000,
        });
        return { success: false, error: errorMessage };
      }
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message || "An unexpected error occurred.";
      showToast({
        title: "Error",
        message: errorMessage,
        toastType: "error",
        duration: 3000,
      });
      return { success: false, error: errorMessage };
    } finally {
      loading.value = false;
    }
  };

  const setPayloadObj = (data: any) => {
    credential.trackingId.value = data.trackingId;
    credential.otp.value = data.otp;
    credential.userId.value = data.userId;
  };

  return { credential, validateWemaOtp, setPayloadObj, loading };
};
