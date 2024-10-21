<template>
  <div class="flex flex-col items-center justify-center w-full h-screen">
    <div class="lg:w-[500px] p-4 flex flex-col justify-start items-start space-y-5">
      <div class="flex justify-center items-center flex-col">
        <h2
          v-if="step === 1"
          class="text-3xl font-medium text-[#323740] text-center mb-2"
        >
          Secure your transactions
        </h2>
        <h2
          v-if="step === 2"
          class="text-3xl font-medium text-[#323740] text-center mb-2"
        >
          Re-enter your 4 digit pin
        </h2>
        <p
          v-if="step === 1"
          class="text-[#687181] leading-relaxed pb-4 text-center"
        >
          Create your 4-digit pin which would be used to authorize transactions
          on your account
        </p>
        <p
          v-if="step === 2"
          class="text-[#687181] leading-relaxed pb-4 text-center"
        >
          Re-enter your 4-digit pin to confirm
        </p>
      </div>

      <div class="mx-auto">
        <!-- Pin Entry -->
        <div class="flex justify-start items-start mb-4 space-x-6">
          <input
            v-for="(pin, index) in step === 1 ? pinCode : confirmPinCode"
            :key="index"
            :value="pin"
            type="password"
            maxlength="1"
            class="w-14 h-14 border outline-none rounded-md flex justify-center items-center text-center text-xl"
            readonly
          />
        </div>

        <!-- Keypad -->
        <div class="grid grid-cols-3 gap-3 w-96 mx-auto">
          <button
            v-for="number in numbers"
            :key="number"
            @click="handleNumberClick(number)"
            class="w-16 h-16 bg-red-100 text-red-500 rounded-full"
          >
            {{ number }}
          </button>
          <div></div>
          <button
            @click="handleNumberClick(0)"
            class="w-16 h-16 bg-red-100 text-red-500 rounded-full"
          >
            0
          </button>
          <button
            @click="handleDelete"
            class="w-16 h-16 flex justify-center items-center"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2228 21.7947C11.0057 21.7947 10.7885 21.7147 10.6171 21.5433L3.67997 14.6061C3.34854 14.2747 3.34854 13.7261 3.67997 13.3947L10.6171 6.45756C10.9485 6.12613 11.4971 6.12613 11.8285 6.45756C12.16 6.78898 12.16 7.33756 11.8285 7.66898L5.49711 14.0004L11.8285 20.3318C12.16 20.6633 12.16 21.2118 11.8285 21.5433C11.6685 21.7147 11.44 21.7947 11.2228 21.7947Z"
                fill="#666666"
              />
              <path
                d="M23.7142 14.8578H4.47995C4.01137 14.8578 3.6228 14.4693 3.6228 14.0007C3.6228 13.5321 4.01137 13.1436 4.47995 13.1436H23.7142C24.1828 13.1436 24.5714 13.5321 24.5714 14.0007C24.5714 14.4693 24.1828 14.8578 23.7142 14.8578Z"
                fill="#666666"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Back Button -->
      <button
        v-if="step === 2"
        @click="step = 1"
        class="text-[#2F6D67] font-semibold"
      >
        Go back
      </button>

      <!-- Loading Spinner -->
      <div
        v-if="loading"
        class="flex justify-center items-center h-full w-full absolute top-0 left-0 bg-white bg-opacity-50 z-50"
      >
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCustomToast } from "@/composables/core/useCustomToast";
import { use_set_transaction_pin } from "@/composables/auth/setTransactionPin";
const { showToast } = useCustomToast();

const { setTransactionPin, credential, loading } = use_set_transaction_pin();
const pinCode = ref(["", "", "", ""]);
const confirmPinCode = ref(["", "", "", ""]);
const step = ref(1);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const router = useRouter();


const handleNumberClick = (number: number) => {
  const targetPin = step.value === 1 ? pinCode : confirmPinCode;
  const emptyIndex = targetPin.value.findIndex((pin) => pin === "");
  if (emptyIndex !== -1) {
    targetPin.value[emptyIndex] = number.toString();
  }


  if (!targetPin.value.includes("")) {
    if (step.value === 1) {
      step.value = 2;
    } else {
      // Confirm pinCode matches confirmPinCode
      if (pinCode.value.join("") === confirmPinCode.value.join("")) {
        credential.pin.value = pinCode.value.join("")
        setTransactionPin()
      } else {
        showToast({
          title: "Error",
          message: "Pins do not match. Please try again.",
          toastType: "error",
          duration: 3000,
        });
      }
    }
  }
};


const handleDelete = () => {
  const targetPin = step.value === 1 ? pinCode : confirmPinCode;
  const lastIndex = targetPin.value.lastIndexOf("");
  if (lastIndex === -1) {
    targetPin.value[targetPin.value.length - 1] = "";
  } else if (lastIndex > 0) {
    targetPin.value[lastIndex - 1] = "";
  }
};
</script>

<style scoped>

.loader {
  border: 8px solid #f3f3f3; 
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
