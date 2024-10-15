import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useResendOtp = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();
  const route = useRoute();
  const router = useRouter();

  const resendOtp = async () => {
    loading.value = true;

    const payload = {
      userId: route.query.userId,
    };
    const res = (await auth_api.$_resend_otp(payload)) as any;
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: res.data.message,
        toastType: "success",
        duration: 3000,
      });
      router.push(`/verify-account?userId=${res.data.data.userId}`);
    }
    loading.value = false;
  };

  return {
    loading,
    resendOtp,
  };
};
