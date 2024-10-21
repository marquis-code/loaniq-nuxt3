<template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div class="lg:w-[500px] p-4  flex flex-col justify-start items-start">
       <div class="flex justify-start items-start">
        <img src="@/assets/icons/password-recovery.svg" alt="" class="mx-auto mb-4 w-24" />
       </div>
        <h2 class="text-3xl font-medium text-[#323740] text-center mb-2">Recover passcode</h2>
        <p class="text-[#687181] leading-relaxed pb-4">
            Seems you have forgotten your passcode, Lets assist you in getting a new one
        </p>
        <form class="w-full space-y-6" @submit.prevent="recoverPasscode">
          <div class="mb-4">
            <label class="block text-[#7D8799] font-medium mb-1 text-sm" for="phone">Phone number</label>
            <input type="text" id="phone" v-model="credential.phoneNumber.value" class="w-full px-4 py-4  bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500" />
          </div>
        
          <div class="pt-6">
            <button :disabled="loading || !credential.phoneNumber.value" type="submit" class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-[#2F6D67] text-white py-3.5 rounded-md hover:bg-[#2F6D67] transition">{{!loading ? 'Send OTP' : 'processing..'}}</button>
          </div>
        </form>
        <div class="mt-4 flex justify-between items-center w-full">
            <p class="text-[#687181]">Not Chinedu? <button @click="logOut" class="text-[#2F6D67] font-semibold hover:underline">Sign out</button> </p>
  
            <p><NuxtLink href="/forgot-password" class="text-[#2F6D67] hover:underline font-semibold">Forgot passcode?</NuxtLink></p>
          </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { use_recover_passcode  } from '@/composables/auth/recoverPassCode'
const { credential, recoverPasscode, loading } = use_recover_passcode()
import { logOut } from '@/composables/core/useLogout'
  </script>
  