<template>
    <div class="flex flex-col items-center justify-center w-full h-screen bg-white p-10">
      <div class="lg:w-[500px] p-4 bg-white p-8 text-center space-y-6">
        <div class="flex justify-center mb-4">
          <img src="@/assets/icons/verify-account.svg" alt="Verify Icon" class="w-20 h-20" />
        </div>
        <h2 class="text-2xl font-bold mb-2 text-[#333333]">Verify account</h2>
        <p class="text-[#687181] mb-4">Please enter the OTP  sent to your  ******8564 attached to your account</p>
        <div class="flex justify-center items-center mb-4 space-x-4">
          <input type="password" maxlength="1" class="w-16 outline-none border-[0.5px] h-16  border-gray-100 rounded-md text-center bg-[#F4F5F7] text-xl" />
          <input type="password" maxlength="1" class="w-16 outline-none border-[0.5px] h-16  border-gray-100 rounded-md text-center bg-[#F4F5F7] text-xl" />
          <input type="password" maxlength="1" class="w-16 outline-none border-[0.5px] h-16  border-gray-100 rounded-md text-center bg-[#F4F5F7] text-xl" />
          <input type="password" maxlength="1" class="w-16 outline-none border-[0.5px] h-16  border-gray-100 rounded-md text-center bg-[#F4F5F7] text-xl" />
        </div>
        <div class="pt-10" >
          <button class="w-full bg-[#2F6D67] text-white py-3.5 rounded-md mb-4">Verify and continue</button>
        </div>
        <p class="text-[#687181] flex justify-center items-center gap-x-6">
          Didn’t get an OTP? <a href="#" class="text-[#2F6D67] font-semibold flex items-center">Resend
            <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4.44076L13.8333 10.2741L8 16.1074" stroke="#2F6D67" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
          </a>
        </p>
        <div class="mt-4 bg-[#E5F0FF] py-2 px-4 rounded-full inline-block">
          <span class="text-[#4771B0] font-semibold">01:36</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // You can add any necessary logic or data handling here if needed
  </script>
  