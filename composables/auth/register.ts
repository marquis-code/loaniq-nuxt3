import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";
const credential = {
  bvn: ref(""),
  email: ref(""),
};

export const use_auth_register = () => {
  const loading = ref(false);
  const router = useRouter();
  const { showToast } = useCustomToast();

  const register = async () => {
    loading.value = true;

    const payload = {
      bvn: credential.bvn.value,
      email: credential.email.value,
    };

    try {
      const res = (await auth_api.$_register(payload)) as any;

      loading.value = false;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: res.data.message,
          toastType: "success",
          duration: 3000,
        });
        router.push(`/verify-account?userId=${res.data.data.userId}`);
      } else {
        console.log(res.data, 'error here')
        showToast({
          title: "Error",
          message: res.data.message,
          toastType: "error",
          duration: 3000,
        });
      }
    } catch (error) {
      loading.value = false;
      showToast({
        title: "Error",
        message: "Registration failed. Please try again.",
        toastType: "error",
        duration: 3000,
      });
    }
  };

  const isFormDisabled = computed(() => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credential.email.value);
    const bvnValid = /^\d{11}$/.test(credential.bvn.value); // Checks if it's a string of 11 digits
    return loading.value || !emailValid || !bvnValid;
  });
  

  return { credential, register, loading, isFormDisabled };
};
