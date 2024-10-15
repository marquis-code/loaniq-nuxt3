<template>
    <div>
        <ProfileUpdatePasscode />
      <!-- <h2 class="text- mb-4 font-medium">Update your passcode</h2>
      <form @submit.prevent="updatePasscode" class="space-y-4">
        <div>
          <label class="block text-gray-600 text-sm pb-2">Current Passcode</label>
          <input type="password" v-model="security.currentPasscode"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
        </div>
        <div>
          <label class="block text-gray-600 text-sm pb-2">New Passcode</label>
          <input type="password" v-model="security.newPasscode"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
        </div>
        <div>
          <label class="block text-gray-600 text-sm pb-2">Repeat New Passcode</label>
          <input type="password" v-model="security.repeatPasscode"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
        </div>
        <button type="submit" class="btn-primary mt-4">Save changes</button>
      </form> -->
      
      <ProfilePinUpdate />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const security = ref({
    currentPasscode: '',
    newPasscode: '',
    repeatPasscode: '',
    faceId: false,
    touchId: false,
  })
  
  const pin = ref({
    currentPin: ['', '', '', ''],
    newPin: ['', '', '', ''],
  })
  
  function updatePasscode() {
    // Handle passcode update
  }
  
  function updatePin() {
    // Handle pin update
  }
  </script>
  