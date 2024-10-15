import { auth_api } from "@/apiFactory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";

export const use_set_transaction_pin = () => {
  const Router = useRouter();
  const loading = ref(false);
  const errorMessage = ref("");
  const { showToast } = useCustomToast();

  const credential = {
    pin: ref(""),
  };

  const setTransactionPin = async () => {
    if (!credential.pin.value) {
      showToast({
        title: "Error",
        message: "Pin is required.",
        toastType: "error",
        duration: 3000,
      });
      return;
    }

    loading.value = true;

    try {
      const res = (await auth_api.$_set_transaction_pin({
        pin: credential.pin.value,
      })) as any;

      loading.value = false;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Transaction pin set successfully.",
          toastType: "success",
          duration: 3000,
        });

        Router.push("/account-success");
      } else {
        showToast({
          title: "Error",
          message: res.data.message || "Failed to set pin",
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
  };

  return { credential, setTransactionPin, loading, errorMessage };
};
