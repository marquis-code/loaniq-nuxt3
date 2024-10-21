<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen bg-white p-10"
  >
    <div class="lg:w-[500px] p-4 bg-white p-8 text-center space-y-6">
      <div class="flex justify-center mb-4">
        <img
          src="@/assets/icons/verify-account.svg"
          alt="Verify Icon"
          class="w-20 h-20"
        />
      </div>
      <h2 class="text-2xl font-bold mb-2 text-[#333333]">Verify account</h2>
      <p class="text-[#687181] mb-4">
        Please enter the verification code sent to your ******8564 attached to
        your BVN
      </p>

      <!-- OTP Input Fields -->
      <div class="flex justify-center items-center mb-4 space-x-4">
        <input
          v-for="(digit, index) in otp"
          :key="index"
          v-model="otp[index]"
          type="password"
          maxlength="1"
          @input="moveToNext(index)"
          class="w-16 outline-none border-[0.5px] h-16 border-gray-100 rounded-md text-center bg-[#F4F5F7] text-xl"
        />
      </div>

      <div class="pt-10">
        <button
          @click="verifyOtp"
          :disabled="isOtpIncomplete || loadingVerify"
          class="w-full bg-[#2F6D67] disabled:cursor-not-allowed disabled:opacity-25 text-white py-3.5 rounded-md mb-4"
        >
          {{ loadingVerify ? "Verifying..." : "Verify and continue" }}
        </button>
      </div>

      <p class="text-[#687181] flex justify-center items-center gap-x-6">
        Didn’t get an OTP?
        <button
          @click="handleResendOtp"
          :disabled="loading"
          class="text-[#2F6D67] font-semibold flex items-center"
        >
          {{ loading ? "Resending..." : "Resend" }}
          <svg
            width="16"
            height="16"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4.44076L13.8333 10.2741L8 16.1074"
              stroke="#2F6D67"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </p>

      <div class="mt-4 bg-[#E5F0FF] py-2 px-4 rounded-full inline-block">
        <span class="text-[#4771B0] font-semibold">{{ formattedTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResendOtp } from "@/composables/auth/resendOtp";
import { use_auth_verify_otp } from "@/composables/auth/verifyOTP";
const { resendOtp, loading } = useResendOtp();
const {
  credential,
  verify_OTP,
  loading: loadingVerify,
} = use_auth_verify_otp();

const otpResendTimer = ref(96); // 01:36 (96 seconds)
const otp = ref(Array(4).fill(""));
const moveToNext = (index: number) => {
  if (otp.value[index] && index < otp.value.length - 1) {
    const nextInput = document.querySelectorAll("input")[
      index + 1
    ] as HTMLInputElement;
    nextInput?.focus();
  }
};


const isOtpIncomplete = computed(() => otp.value.some((digit) => digit === ""));


const verifyOtp = async () => {
  if (isOtpIncomplete.value) return;
  console.log(otp.value.join(""), 'otp here')
  credential.code.value = otp.value.join("");
  await verify_OTP();
};

const handleResendOtp = async () => {
  // loading.value = true;
  await resendOtp();
  otpResendTimer.value = 96;
  // loading.value = false;
};

const formattedTime = computed(() => {
  const minutes = Math.floor(otpResendTimer.value / 60);
  const seconds = otpResendTimer.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
});

setInterval(() => {
  if (otpResendTimer.value > 0) {
    otpResendTimer.value--;
  }
}, 1000);
</script>
