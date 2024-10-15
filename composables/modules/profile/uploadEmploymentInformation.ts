import { profile_api } from "@/apiFactory/modules/profile";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const payloadObj = ref({
  organizationType: "",
  organizationName: "",
  ippisNumber: "",
  jobTitle: "",
  officeAddress: "",
  stateOfOffice: "",
  documentBackCopy: "",
  documentFrontCopy: "",
});

export const useUploadEmploymentInfo = () => {
  const loading = ref(false);
  const { $_upload_employment_info } = profile_api;
  const uploadEmploymentInfo = async (id: any) => {
    loading.value = true;
    try {
      const res = (await $_upload_employment_info(payloadObj)) as any;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Employment Information was uploaded successfully!",
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
    uploadEmploymentInfo,
    loading,
    payloadObj,
  };
};
