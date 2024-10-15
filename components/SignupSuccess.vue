<template>
    <div class="flex justify-center items-center h-screen bg-white">
      <div class="bg-[#EDFFF0] rounded-lg p-8 py-32 text-center max-w-md">
        <div class="flex justify-center mb-4">
          <!-- Success Icon -->
          <div class="flex items-center justify-center">
           <img src="@/assets/icons/success-check.svg" alt="" />
          </div>
        </div>
        <h2 class="text-2xl font-bold text-gray-800">Successful</h2>
        <p class="text-gray-600 mt-2">
          Account creation successful. Kindly click the button below to proceed
        </p>
     <div class="w-full pt-4">
        <button
        class="mt-6 bg-[#2F6D67] hover:bg-[#2F6D67] w-full text-white font-semibold py-4 text-sm px-4 rounded-lg"
      >
        Continue to account
      </button>
     </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // No specific script logic is needed for this simple UI
  </script>
  
  <style scoped>
  /* Tailwind handles most of the styling, no custom styles required */
  </style>
  