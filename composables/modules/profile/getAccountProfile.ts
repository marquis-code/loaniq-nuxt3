import { profile_api } from '@/apiFactory/modules/profile'
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

export const useFetchAccountProfile = () => {
    const loading = ref(false);
    const profileObj = ref({} as any);
    const { $_get_account_profile } = profile_api
    const getProfileInfo = async () => {
        loading.value = true;
        try {
            const res = await $_get_account_profile() as any;
    
            if (res.type !== 'ERROR') {
                profileObj.value = res?.data?.result
            }
        } catch (error: any) {
            showToast({
                title: "Success",
                message: "Employment Information was uploaded successfully!",
                toastType: "success",
                duration: 3000,
              });
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        getProfileInfo()
    })

    return {
        getProfileInfo,
        loading,
        profileObj
    };
};
