import { dashboard_api } from '@/apiFactory/modules/dashboard'

export const useFetchStats = () => {
    const loading = ref(false);
    const profileInfoObj = ref({} as any);
    const { $_get_dashboard_stats } = dashboard_api;
    const getProfileInfo = async (id: any) => {
        loading.value = true;
        try {
            const res = await $_get_dashboard_stats(id) as any;
    
            if (res.type !== 'ERROR') {
                profileInfoObj.value = res?.data?.result
            }
        } catch (error) {
            console.error('Error getting profile object', error);
        } finally {
            loading.value = false;
        }
    };

    return {
        getProfileInfo,
        loading,
        profileInfoObj
    };
};
