<template>
    <div>
      <button @click="startLivenessCheck">Start Liveness Check</button>
      <LivenessPopup
        v-if="showPopup"
        :apiKey="apiKey"
        :name="appName"
        :apiUrl="apiUrl"
        @closePopup="closePopup"
        @livenessResult="handleLivenessResult"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const showPopup = ref(false)
  const apiKey = ref('your_api_key_here')
  const appName = ref('Your App Name')
  const apiUrl = ref('https://api.dikript.com/dikript/api/v1/biometrics/livelinesscheck')
  
  const startLivenessCheck = () => {
    showPopup.value = true
  }
  
  const closePopup = () => {
    showPopup.value = false
  }
  
  const handleLivenessResult = (result: any) => {
    console.log('Liveness result:', result)
    // Handle the result here, such as updating user onboarding status based on the result
    if (result.success) {
      // Proceed with user onboarding
    } else {
      // Show an error message or retry
    }
  }
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  