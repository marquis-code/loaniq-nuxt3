<template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div class="w-[500px] flex flex-col justify-start items-start space-y-5">
        <!-- <div class="flex justify-center items-center flex-col w-full">
          <h2 class="text-xl font-medium text-[#323740] text-center mb-2">Re-enter your 4 digit pin</h2>
        </div> -->
        <div class="space-y-6">
          <h2 class="text-xl font-medium text-[#323740] text-center mb-2">Re-enter your 4 digit pin</h2>
          <div class="flex justify-center items-center">
            <div class="flex justify-start items-start mb-4 space-x-6">
              <input
                v-for="(pin, index) in pinCode"
                :key="index"
                :value="pin"
                type="password"
                maxlength="1"
                class="w-14 h-14 border outline-none rounded-md flex justify-center items-center text-center text-xl"
                readonly
              />
            </div>
          </div>
      <div class="flex justify-center items-center">
        <div class="grid grid-cols-3 gap-3 w-96 mx-auto pl-10">
          <button v-for="number in numbers" :key="number" @click="handleNumberClick(number)" class="w-16 h-16 bg-red-100 text-red-500 rounded-full">{{ number }}</button>
          <div></div>
          <button @click="handleNumberClick(0)" class="w-16 h-16 bg-red-100 text-red-500 rounded-full">0</button>
          <button @click="handleDelete" class="w-16 h-16 flex justify-center items-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2228 21.7947C11.0057 21.7947 10.7885 21.7147 10.6171 21.5433L3.67997 14.6061C3.34854 14.2747 3.34854 13.7261 3.67997 13.3947L10.6171 6.45756C10.9485 6.12613 11.4971 6.12613 11.8285 6.45756C12.16 6.78898 12.16 7.33756 11.8285 7.66898L5.49711 14.0004L11.8285 20.3318C12.16 20.6633 12.16 21.2118 11.8285 21.5433C11.6685 21.7147 11.44 21.7947 11.2228 21.7947Z" fill="#666666"/>
              <path d="M23.7142 14.8578H4.47995C4.01137 14.8578 3.6228 14.4693 3.6228 14.0007C3.6228 13.5321 4.01137 13.1436 4.47995 13.1436H23.7142C24.1828 13.1436 24.5714 13.5321 24.5714 14.0007C24.5714 14.4693 24.1828 14.8578 23.7142 14.8578Z" fill="#666666"/>
            </svg>
          </button>
        </div>
      </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // State to handle the PIN input
  const pinCode = ref(['', '', '', '']);
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // Function to handle number input from the number pad
  const handleNumberClick = (number: number) => {
    const emptyIndex = pinCode.value.findIndex(pin => pin === '');
    if (emptyIndex !== -1) {
      pinCode.value[emptyIndex] = number.toString();
    }
  };
  
  // Function to handle deletion of the last digit
  const handleDelete = () => {
    const lastIndex = pinCode.value.lastIndexOf('');
    if (lastIndex === -1) {
      pinCode.value[pinCode.value.length - 1] = '';
    } else if (lastIndex > 0) {
      pinCode.value[lastIndex - 1] = '';
    }
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if needed */
  </style>
  