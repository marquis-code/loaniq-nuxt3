import { auth_api } from '@/apiFactory/modules/auth';
import { decryptData } from '@/utils/crypto-utils';
import { useCustomToast } from '@/composables/core/useCustomToast'

export const use_create_new_passcode = () => {
  const Router = useRouter();
  const loading = ref(false);
  const { showToast } = useCustomToast();

  const credential = {
    newPasscode: ref("")
  };
  

  /**
   * Function to create a new passcode using encrypted phone number and OTP.
   */
  const createNewPasscode = async () => {
    if (!credential.newPasscode.value) {
      showToast({
        title: "Error",
        message: "New passcode is required.",
        toastType: "error",
        duration: 3000
      });
      return;
    }

    loading.value = true;

    try {
      // Retrieve encrypted data from localStorage
      const encryptedPhoneNumber = localStorage.getItem('encryptedPhoneNumber');
      const encryptedOtp = localStorage.getItem('encryptedOtp');

      // Decrypt phone number and OTP
      if (!encryptedPhoneNumber || !encryptedOtp) {
          showToast({
            title: "Error",
            message: "Required data (OTP or phone number) is missing.",
            toastType: "error",
            duration: 3000
          });
        return
      }

      const phoneNumber = decryptData(encryptedPhoneNumber);
      const otp = decryptData(encryptedOtp);

      const payload = {
        otp,
        phoneNumber,
        newPasscode: credential.newPasscode.value,
      };

      // Call the API to create a new passcode
      const res = await auth_api.$_create_new_passcode(payload) as any

      loading.value = false;

      if (res.type !== 'ERROR') {
        showToast({
          title: "Success",
          message: "New passcode created successfully",
          toastType: "success",
          duration: 3000
        });

        // Clear encrypted data after success
        localStorage.removeItem('encryptedPhoneNumber');
        localStorage.removeItem('encryptedOtp');

        // Redirect to login or another page
        Router.push('/login');
      } else {
        showToast({
          title: "Error",
          message: res.message || "Failed to create new passcode",
          toastType: "error",
          duration: 3000
        });
      }
    } catch (error: any) {
      loading.value = false;
      showToast({
        title: "Error",
        message: error?.message || "An unexpected error occurred.",
        toastType: "error",
        duration: 3000
      });
    }
  };

  return { credential, createNewPasscode, loading };
};
