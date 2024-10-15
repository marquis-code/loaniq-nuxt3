<template>
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 flex z-50 items-center justify-center">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Transactions details</h2>
          <button @click="$emit('close')" class="text-red-500"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.588 2.66602H10.4146C5.5613 2.66602 2.66797 5.55935 2.66797 10.4127V21.5727C2.66797 26.4393 5.5613 29.3327 10.4146 29.3327H21.5746C26.428 29.3327 29.3213 26.4393 29.3213 21.586V10.4127C29.3346 5.55935 26.4413 2.66602 21.588 2.66602ZM20.4813 19.066C20.868 19.4527 20.868 20.0927 20.4813 20.4793C20.2813 20.6793 20.028 20.7727 19.7746 20.7727C19.5213 20.7727 19.268 20.6793 19.068 20.4793L16.0013 17.4127L12.9346 20.4793C12.7346 20.6793 12.4813 20.7727 12.228 20.7727C11.9746 20.7727 11.7213 20.6793 11.5213 20.4793C11.1346 20.0927 11.1346 19.4527 11.5213 19.066L14.588 15.9993L11.5213 12.9327C11.1346 12.546 11.1346 11.906 11.5213 11.5193C11.908 11.1327 12.548 11.1327 12.9346 11.5193L16.0013 14.586L19.068 11.5193C19.4546 11.1327 20.0946 11.1327 20.4813 11.5193C20.868 11.906 20.868 12.546 20.4813 12.9327L17.4146 15.9993L20.4813 19.066Z" fill="#DD3636"/>
            </svg>
            </button>
        </div>
        <div class="bg-[#2969CA] text-white p-4 rounded-md text-center mb-4">
          <p class="text-2xl font-bold">₦4,050,000.00</p>
        </div>
        <p class="text-sm mt-2 text-[#10A83B] text-center">Transaction was successful</p>
        <div class="bg-[#EEEFF2] rounded-md p-4 space-y-4 mt-6">
          <div>
            <p class="text-sm font-medium text-[#687181]">Transaction type</p>
            <p class="text-base font-medium text-[#323740]">Funds Top up</p>
          </div>
          <div>
            <p class="text-sm font-medium text-[#687181]">Recipient information</p>
            <p class="text-base font-medium text-[#323740]">Chinedu Nkedife - Cir... Providus Bank | 0002314590</p>
          </div>
          <div>
            <p class="text-sm font-medium text-[#687181]">Transaction date</p>
            <p class="text-base font-medium text-[#323740]">27 Mar, 2022</p>
          </div>
          <hr class="my-2" />
          <div>
            <p class="text-sm font-medium text-[#687181]">Transaction method</p>
            <p class="text-base font-medium text-[#323740]">Debit card</p>
          </div>
          <div>
            <p class="text-sm font-medium text-[#687181]">Transaction ID</p>
            <p class="text-base font-medium text-[#323740]">12780000000000000033889000000011190900</p>
          </div>
          <div>
            <p class="text-sm font-medium text-[#687181]">Session ID</p>
            <p class="text-base font-medium text-[#323740]">ER889OKNVbju0P</p>
          </div>
        </div>
        <div class="flex justify-between mt-4">
          <button class="flex items-center space-x-1 text-[#687181]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.4 21.86 5.4 21.32V19.87C4.38 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19 5 9.02C5.13 9.01 5.26 9 5.4 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z" fill="#DD3636"/>
                <path d="M17.75 15.6C19.02 15.6 20.09 15.18 20.83 14.43C21.58 13.69 22 12.62 22 11.35V6.25C22 3.9 20.1 2 17.75 2H9.25C6.9 2 5 3.9 5 6.25V7C5 7.28 5.22 7.5 5.5 7.5H12.19C14.9 7.5 17.09 9.69 17.09 12.4V15.1C17.09 15.38 17.31 15.6 17.59 15.6H17.75Z" fill="#323740"/>
                </svg>
                
            <span>Contact Support</span>
          </button>
          <button class="flex items-center space-x-1 text-[#687181]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0004 9.60039C19.9886 9.60039 21.6004 7.98862 21.6004 6.00039C21.6004 4.01217 19.9886 2.40039 18.0004 2.40039C16.0122 2.40039 14.4004 4.01217 14.4004 6.00039C14.4004 6.15097 14.4096 6.29939 14.4276 6.44512L8.4995 9.40916C7.85203 8.78457 6.97107 8.40039 6.00039 8.40039C4.01217 8.40039 2.40039 10.0122 2.40039 12.0004C2.40039 13.9886 4.01217 15.6004 6.00039 15.6004C6.9711 15.6004 7.85207 15.2162 8.49954 14.5916L14.4276 17.5556C14.4096 17.7013 14.4004 17.8498 14.4004 18.0004C14.4004 19.9886 16.0122 21.6004 18.0004 21.6004C19.9886 21.6004 21.6004 19.9886 21.6004 18.0004C21.6004 16.0122 19.9886 14.4004 18.0004 14.4004C17.0297 14.4004 16.1487 14.7846 15.5013 15.4092L9.57319 12.4451C9.59114 12.2994 9.60039 12.151 9.60039 12.0004C9.60039 11.8498 9.59114 11.7013 9.57318 11.5556L15.5012 8.59158C16.1487 9.2162 17.0297 9.60039 18.0004 9.60039Z" fill="#DD3636"/>
                </svg>
                
            <span>Share receipt</span>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Define any necessary logic for the modal here if needed.
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  