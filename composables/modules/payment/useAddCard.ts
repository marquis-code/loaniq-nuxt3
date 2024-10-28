import { ref } from "vue";
import { payment_api } from "@/apiFactory/modules/payment";
import { useCustomToast } from "@/composables/core/useCustomToast";

const payload = ref({
  cardNumber: "",
  expiryDate: "",
  cvv: "",
});

export const useAddCard = () => {
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const addCard = async () => {
    loading.value = true;
    try {
      const res = await payment_api.$_add_card(payload.value);
      showToast({
        title: "Success",
        message: "Card added successfully",
        toastType: "success",
        duration: 3000,
      });
      return res;
    } catch (error: any) {
      showToast({
        title: "Error",
        message: error.response.data.message || "Failed to add card",
        toastType: "error",
        duration: 3000,
      });
    } finally {
      loading.value = false;
    }
  };

  return {
    addCard,
    loading,
    payload
  };
};
