import { ref } from "vue";
import { payment_api } from '@/apiFactory/modules/payment';
import { useCustomToast } from "@/composables/core/useCustomToast";

export const useFetchSavedAccounts = () => {
    const loading = ref(false);
    const accounts = ref([]);
    const { showToast } = useCustomToast();

    const fetchSavedAccounts = async () => {
        loading.value = true;
        try {
            const res = await payment_api.$_fetch_saved_account();
            accounts.value = res.data;
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response.data.message || "Failed to fetch saved accounts",
                toastType: "error",
                duration: 3000,
            });
        } finally {
            loading.value = false;
        }
    };

    return {
        fetchSavedAccounts,
        accounts,
        loading,
    };
};
