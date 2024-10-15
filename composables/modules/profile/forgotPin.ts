import { profile_api } from '@/apiFactory/modules/profile'
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

export const useForgotPin = () => {
    const loading = ref(false);
    const { $_get_next_of_kin_profile } = profile_api
    const forgotPin = async () => {
        loading.value = true;
        try {
            const res = await $_get_next_of_kin_profile() as any;
    
            if (res.type !== 'ERROR') {
                showToast({
                    title: "Success",
                    message: "Kindly check your phone number for OTP",
                    toastType: "success",
                    duration: 3000,
                  });
            }
        } catch (error: any) {
            showToast({
                title: "Error",
                message: error.response.data.message,
                toastType: "error",
                duration: 3000,
              });
        } finally {
            loading.value = false;
        }
    };

    return {
        forgotPin,
        loading
    };
};
