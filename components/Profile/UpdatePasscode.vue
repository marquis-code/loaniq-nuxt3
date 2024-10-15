<template>
    <div class="max-w-lg mt-8">
      <h2 class="text- font-medium text-gray-700 mb-6">Update your passcode</h2>
      <form @submit.prevent="savePasscode" class="space-y-6">
        <!-- Current Passcode -->
        <div>
          <label for="currentPasscode" class="block text-gray-600 mb-2 text-sm">Current Passcode</label>
          <div class="relative">
            <input
              :type="showCurrentPasscode ? 'text' : 'password'"
              v-model="currentPasscode"
              class="input-field"
              placeholder="Enter current passcode"
            />
            <button
              type="button"
              @click="toggleVisibility('current')"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9995 14.3996C13.325 14.3996 14.3995 13.3251 14.3995 11.9996C14.3995 10.6741 13.325 9.59961 11.9995 9.59961C10.674 9.59961 9.59952 10.6741 9.59952 11.9996C9.59952 13.3251 10.674 14.3996 11.9995 14.3996Z" fill="#687181"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.548828 11.9997C2.07793 7.1311 6.62629 3.59961 11.9995 3.59961C17.3726 3.59961 21.921 7.13106 23.4501 11.9996C21.921 16.8681 17.3726 20.3996 11.9995 20.3996C6.6263 20.3996 2.07796 16.8682 0.548828 11.9997ZM16.7995 11.9996C16.7995 14.6506 14.6505 16.7996 11.9995 16.7996C9.34856 16.7996 7.19952 14.6506 7.19952 11.9996C7.19952 9.34864 9.34856 7.19961 11.9995 7.19961C14.6505 7.19961 16.7995 9.34864 16.7995 11.9996Z" fill="#687181"/>
                </svg>
                
            </button>
          </div>
        </div>
  
        <!-- New Passcode -->
        <div>
          <label for="newPasscode" class="block text-gray-600 mb-2 text-sm">New Passcode</label>
          <div class="relative">
            <input
              :type="showNewPasscode ? 'text' : 'password'"
              v-model="newPasscode"
              class="input-field"
              placeholder="Enter new passcode"
            />
            <button
              type="button"
              @click="toggleVisibility('new')"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9995 14.3996C13.325 14.3996 14.3995 13.3251 14.3995 11.9996C14.3995 10.6741 13.325 9.59961 11.9995 9.59961C10.674 9.59961 9.59952 10.6741 9.59952 11.9996C9.59952 13.3251 10.674 14.3996 11.9995 14.3996Z" fill="#687181"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.548828 11.9997C2.07793 7.1311 6.62629 3.59961 11.9995 3.59961C17.3726 3.59961 21.921 7.13106 23.4501 11.9996C21.921 16.8681 17.3726 20.3996 11.9995 20.3996C6.6263 20.3996 2.07796 16.8682 0.548828 11.9997ZM16.7995 11.9996C16.7995 14.6506 14.6505 16.7996 11.9995 16.7996C9.34856 16.7996 7.19952 14.6506 7.19952 11.9996C7.19952 9.34864 9.34856 7.19961 11.9995 7.19961C14.6505 7.19961 16.7995 9.34864 16.7995 11.9996Z" fill="#687181"/>
                </svg>
                
            </button>
          </div>
          <!-- Validation Criteria -->
          <ul class="mt-2 space-y-1 text-sm text-gray-600">
            <li class="flex items-center gap-x-2" :class="{'text-green-600': isLengthValid, 'text-gray-400': !isLengthValid}">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99967 15.1663C4.04634 15.1663 0.833008 11.953 0.833008 7.99967C0.833008 4.04634 4.04634 0.833008 7.99967 0.833008C11.953 0.833008 15.1663 4.04634 15.1663 7.99967C15.1663 11.953 11.953 15.1663 7.99967 15.1663ZM7.99967 1.83301C4.59967 1.83301 1.83301 4.59967 1.83301 7.99967C1.83301 11.3997 4.59967 14.1663 7.99967 14.1663C11.3997 14.1663 14.1663 11.3997 14.1663 7.99967C14.1663 4.59967 11.3997 1.83301 7.99967 1.83301Z" fill="#10A83B"/>
<path d="M7.05297 10.3867C6.91964 10.3867 6.79297 10.3334 6.69964 10.2401L4.81297 8.3534C4.61964 8.16007 4.61964 7.84007 4.81297 7.64673C5.0063 7.4534 5.3263 7.4534 5.51964 7.64673L7.05297 9.18007L10.4796 5.7534C10.673 5.56007 10.993 5.56007 11.1863 5.7534C11.3796 5.94673 11.3796 6.26673 11.1863 6.46006L7.4063 10.2401C7.31297 10.3334 7.1863 10.3867 7.05297 10.3867Z" fill="#10A83B"/>
</svg>
 Use from 8 characters
            </li>
            <li class="flex items-center gap-x-2" :class="{'text-green-600': hasUppercase, 'text-gray-400': !hasUppercase}">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99967 15.1663C4.04634 15.1663 0.833008 11.953 0.833008 7.99967C0.833008 4.04634 4.04634 0.833008 7.99967 0.833008C11.953 0.833008 15.1663 4.04634 15.1663 7.99967C15.1663 11.953 11.953 15.1663 7.99967 15.1663ZM7.99967 1.83301C4.59967 1.83301 1.83301 4.59967 1.83301 7.99967C1.83301 11.3997 4.59967 14.1663 7.99967 14.1663C11.3997 14.1663 14.1663 11.3997 14.1663 7.99967C14.1663 4.59967 11.3997 1.83301 7.99967 1.83301Z" fill="#10A83B"/>
<path d="M7.05297 10.3867C6.91964 10.3867 6.79297 10.3334 6.69964 10.2401L4.81297 8.3534C4.61964 8.16007 4.61964 7.84007 4.81297 7.64673C5.0063 7.4534 5.3263 7.4534 5.51964 7.64673L7.05297 9.18007L10.4796 5.7534C10.673 5.56007 10.993 5.56007 11.1863 5.7534C11.3796 5.94673 11.3796 6.26673 11.1863 6.46006L7.4063 10.2401C7.31297 10.3334 7.1863 10.3867 7.05297 10.3867Z" fill="#10A83B"/>
</svg>
 Use at least 1 uppercase letter
            </li>
            <li class="flex items-center gap-x-2" :class="{'text-green-600': hasNumberAndLetter, 'text-gray-400': !hasNumberAndLetter}">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99967 15.1663C4.04634 15.1663 0.833008 11.953 0.833008 7.99967C0.833008 4.04634 4.04634 0.833008 7.99967 0.833008C11.953 0.833008 15.1663 4.04634 15.1663 7.99967C15.1663 11.953 11.953 15.1663 7.99967 15.1663ZM7.99967 1.83301C4.59967 1.83301 1.83301 4.59967 1.83301 7.99967C1.83301 11.3997 4.59967 14.1663 7.99967 14.1663C11.3997 14.1663 14.1663 11.3997 14.1663 7.99967C14.1663 4.59967 11.3997 1.83301 7.99967 1.83301Z" fill="#10A83B"/>
<path d="M7.05297 10.3867C6.91964 10.3867 6.79297 10.3334 6.69964 10.2401L4.81297 8.3534C4.61964 8.16007 4.61964 7.84007 4.81297 7.64673C5.0063 7.4534 5.3263 7.4534 5.51964 7.64673L7.05297 9.18007L10.4796 5.7534C10.673 5.56007 10.993 5.56007 11.1863 5.7534C11.3796 5.94673 11.3796 6.26673 11.1863 6.46006L7.4063 10.2401C7.31297 10.3334 7.1863 10.3867 7.05297 10.3867Z" fill="#10A83B"/>
</svg>
 Use a combination of numbers and English letters
            </li>
          </ul>
        </div>
  
        <!-- Repeat New Passcode -->
        <div>
          <label for="repeatNewPasscode" class="block text-gray-600 mb-2 text-sm">Repeat New Passcode</label>
          <div class="relative">
            <input
              :type="showRepeatPasscode ? 'text' : 'password'"
              v-model="repeatNewPasscode"
              class="input-field"
              placeholder="Repeat new passcode"
            />
            <button
              type="button"
              @click="toggleVisibility('repeat')"
              class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
            >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9995 14.3996C13.325 14.3996 14.3995 13.3251 14.3995 11.9996C14.3995 10.6741 13.325 9.59961 11.9995 9.59961C10.674 9.59961 9.59952 10.6741 9.59952 11.9996C9.59952 13.3251 10.674 14.3996 11.9995 14.3996Z" fill="#687181"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.548828 11.9997C2.07793 7.1311 6.62629 3.59961 11.9995 3.59961C17.3726 3.59961 21.921 7.13106 23.4501 11.9996C21.921 16.8681 17.3726 20.3996 11.9995 20.3996C6.6263 20.3996 2.07796 16.8682 0.548828 11.9997ZM16.7995 11.9996C16.7995 14.6506 14.6505 16.7996 11.9995 16.7996C9.34856 16.7996 7.19952 14.6506 7.19952 11.9996C7.19952 9.34864 9.34856 7.19961 11.9995 7.19961C14.6505 7.19961 16.7995 9.34864 16.7995 11.9996Z" fill="#687181"/>
                </svg>
                
            </button>
          </div>
        </div>
  
        <!-- Save Changes Button -->
        <button type="submit" class="mt-4 px-4 py-2 bg-[#2F6D67] text-white rounded-md">
          Save changes
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  const currentPasscode = ref('')
  const newPasscode = ref('')
  const repeatNewPasscode = ref('')
  const showCurrentPasscode = ref(false)
  const showNewPasscode = ref(false)
  const showRepeatPasscode = ref(false)
  
  // Toggle visibility of the passcodes
  const toggleVisibility = (field: 'current' | 'new' | 'repeat') => {
    if (field === 'current') showCurrentPasscode.value = !showCurrentPasscode.value
    if (field === 'new') showNewPasscode.value = !showNewPasscode.value
    if (field === 'repeat') showRepeatPasscode.value = !showRepeatPasscode.value
  }
  
  // Validation criteria
  const isLengthValid = computed(() => newPasscode.value.length >= 8)
  const hasUppercase = computed(() => /[A-Z]/.test(newPasscode.value))
  const hasNumberAndLetter = computed(() => /[0-9]/.test(newPasscode.value) && /[a-zA-Z]/.test(newPasscode.value))
  
  const savePasscode = () => {
    if (newPasscode.value !== repeatNewPasscode.value) {
      alert('New passcode and repeated passcode do not match')
      return
    }
    console.log('Current Passcode:', currentPasscode.value)
    console.log('New Passcode:', newPasscode.value)
    console.log('Repeat New Passcode:', repeatNewPasscode.value)
    // Add logic to save the new passcode
  }
  </script>
  
  <style scoped>
  .input-field {
    @apply w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-500;
  }
  </style>
  