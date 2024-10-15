<template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div class="w-[500px]  flex flex-col justify-start items-start space-y-4">
        <h2 class="text-3xl font-bold text-[#323740] max-w-md mb-2">Your Account has been successfully created</h2>
        <p class="text-[#687181] leading-relaxed pb-4">
          Here’s your account details
        </p>
       <div class="space-y-3 w-full">
        <p class="font-medium text-[#7D8799] text-center w-full">{{user?.accountInformation?.accountTier ?? 'Nil'}}</p>
        <div class="bg-green-50 text-green-600 py-3 px-6 rounded-md mb-4 w-full text-center">Transaction limit ({{user?.accountInformation?.transactionLimit ?? 'Nil'}})</div>
       </div>
       <div class="w-full">
        <p class="text-3xl font-bold text-center w-full">{{user?.accountInformation?.accountNumber ?? 'Nil'}}</p>
        <p class="text-3xl font-bold mb-4 text-center w-full">{{`${user?.accountInformation?.bankName} Bank` ?? 'Nil'}}</p>
       </div>
        <div class="pt-6 w-full">
          <button @click="router.push('/secure-transactions')" type="submit" class="bg-[#2F6D67] w-full text-white py-3.5 rounded-md hover:bg-[#2F6D67] transition">Set Transaction PIN</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUser } from '@/composables/auth/user'
 const { user } = useUser()
 const router = useRouter()
  </script>
  