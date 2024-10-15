import { profile_api } from "@/apiFactory/modules/profile";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const payloadObj = ref({
  fullName: "",
  relationship: "",
  gender: "",
  email: "",
  phoneNumber: "",
  residentialAddress: "",
  stateOfResidence: "",
});

export const useUploadNextOfKinProfile = () => {
  const loading = ref(false);
  const { $_upload_next_of_kin_profile } = profile_api;
  const uploadNextOfKinProfile = async (id: any) => {
    loading.value = true;
    try {
      const res = (await $_upload_next_of_kin_profile(payloadObj)) as any;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Next Of Kin was uploaded successfully!",
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
    uploadNextOfKinProfile,
    loading,
    payloadObj
  };
};
