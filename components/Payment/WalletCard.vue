<template>
    <div class="p-4">
      <div class="bg-[#2F63BA] rounded-xl shadow-lg text-white p-6 relative overflow-hidden">
        <!-- Balance Information -->
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm">Available balance</p>
            <p class="text-3xl font-bold mt-1">₦2,157,000.<span class="text-xl">56</span></p>
          </div>
          <img src="@/assets/icons/providus-bank.svg" alt="Providus Bank" class="w-14 h-14"/>
        </div>
  
        <!-- Account Details -->
        <div class="mt-12">
          <p class="text-lg font-medium">Chinedu Ndukife - LoaniQ</p>
          <div class="flex items-center mt-1">
            <p class="text-sm">0221117895</p>
            <button @click="copyToClipboard" class="ml-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.84635 3.39995H12.2227C13.5094 3.39995 14.56 4.45057 14.56 5.73725V12.329C14.56 13.6157 13.5094 14.6663 12.2227 14.6663H5.84635C4.55967 14.6663 3.50905 13.6157 3.50905 12.329V5.73725C3.50905 4.45057 4.55922 3.39995 5.84635 3.39995ZM1.33398 10.2621V3.67031C1.33398 2.38508 2.3856 1.33301 3.67128 1.33301H10.0477V2.40811H3.67128C2.97669 2.40811 2.40908 2.97583 2.40908 3.67031V10.2621H1.33398ZM12.222 4.47548H5.84561C5.15247 4.47548 4.58341 5.04465 4.58341 5.73768V12.3295C4.58341 13.0226 5.15258 13.5917 5.84561 13.5917H12.222C12.9151 13.5917 13.4842 13.0225 13.4842 12.3295V5.73768C13.4842 5.04454 12.915 4.47548 12.222 4.47548Z" fill="#EAF0FA"/>
                    </svg>  
            </button>
          </div>
        </div>
  
        <!-- Decorative Circle -->
        <div class="absolute bottom-0 right-0 transform translate-x-10 translate-y-10 opacity-20">
          <div class="bg-white rounded-full w-40 h-40"></div>
        </div>
      </div>

      <PaymentWalletActions />
    </div>
  </template>
  
  <script setup lang="ts">
  function copyToClipboard() {
    navigator.clipboard.writeText('0221117895').then(() => {
      alert('Account number copied to clipboard');
    }).catch((error) => {
      console.error('Failed to copy: ', error);
    });
  }
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  