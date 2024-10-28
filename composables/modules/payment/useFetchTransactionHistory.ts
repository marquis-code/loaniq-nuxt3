import { ref } from "vue";
import { payment_api } from '@/apiFactory/modules/payment';
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useFetchTransactionHistory = () => {
    const loading = ref(false);
    const transactions = ref([]);
    const { showToast } = useCustomToast();

    const fetchTransactionHistory = async () => {
        loading.value = true;
        try {
            const res = await payment_api.$_fetch_transaction_history();
            transactions.value = res.data;
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response.data.message || "Failed to fetch transaction history",
                toastType: "error",
                duration: 3000,
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        fetchTransactionHistory,
        transactions,
        loading,
    };
};
