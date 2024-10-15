import { profile_api } from "@/apiFactory/modules/profile";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const payloadObj = ref({
  idType: "",
  idNumber: "",
  issueDate: "",
  documentBackCopy: "",
  documentFrontCopy: "",
});

export const useUploadGovernmentID = () => {
  const loading = ref(false);
  const { $_upload_government_id } = profile_api;
  const uploadGovernmentID = async (id: any) => {
    loading.value = true;
    try {
      const res = (await $_upload_government_id(payloadObj)) as any;

      if (res.type !== "ERROR") {
        showToast({
          title: "Success",
          message: "Government ID was uploaded successfully!",
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
    uploadGovernmentID,
    loading,
    payloadObj,
  };
};
