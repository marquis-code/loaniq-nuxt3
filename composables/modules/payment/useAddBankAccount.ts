import { payment_api } from "@/apiFactory/modules/payment";
import { useCustomToast } from "@/composables/core/useCustomToast";

const payload = ref({
  accountNumber: "",
  accountName: "",
  bankName: "",
  bankCode: "",
});
export const useAddBankAccount = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const addBankAccount = async () => {
    loading.value = true;
    try {
      const res = await payment_api.$_add_bank_account(payload.value);
      showToast({
        title: "Success",
        message: "Bank account added successfully",
        toastType: "success",
        duration: 3000,
      });
      return res;
    } catch (error: any) {
      showToast({
        title: "Error",
        message: error.response.data.message || "Failed to add bank account",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    addBankAccount,
    loading,
    payload
  };
};
