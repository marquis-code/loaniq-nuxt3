import { profile_api } from '@/apiFactory/modules/profile'
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

export const useFetchNextOfKinProfile = () => {
    const loading = ref(false);
    const profileObj = ref({} as any);
    const { $_get_next_of_kin_profile } = profile_api
    const getNextOfKinProfileObj = async () => {
        loading.value = true;
        try {
            const res = await $_get_next_of_kin_profile() as any;
    
            if (res.type !== 'ERROR') {
                profileObj.value = res?.data?.result
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

    onMounted(() => {
        getNextOfKinProfileObj()
    })

    return {
        getNextOfKinProfileObj,
        loading,
        profileObj
    };
};
