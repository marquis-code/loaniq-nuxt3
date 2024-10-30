<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg max-w-md w-full p-6 space-y-4">
        <!-- Header Section -->
        <div class="flex items-center justify-between">
          <div class="text-center">
            <!-- <CameraIcon class="w-12 h-12 mx-auto" /> -->
          </div>
          <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
            <!-- <XIcon class="w-6 h-6" /> -->
          </button>
        </div>
        
        <!-- Title and Instructions -->
        <h2 class="text-xl font-semibold text-center">Camera permission required</h2>
        <p class="text-gray-600 text-center">
          To make video calls, please turn on the camera permission in your app by clicking the notification.
        </p>
  
        <!-- Notification Section -->
        <div class="bg-gray-200 rounded-lg p-4 space-y-2">
          <div class="bg-gray-300 rounded-lg p-2 flex justify-between items-center">
            <span class="font-semibold">Allow camera access</span>
            <span class="text-xs text-gray-500">2m ago</span>
          </div>
          <div class="bg-gray-300 rounded-lg p-2 flex justify-between items-center">
            <span>New message from Olivia</span>
            <span class="text-xs text-gray-500">16m ago</span>
          </div>
        </div>
  
        <!-- Step-by-Step Guide and Buttons -->
        <div class="text-center">
          <button @click="toggleGuide" class="text-blue-600 font-semibold">Step-by-step guide</button>
          <div v-if="showGuide" class="mt-2 text-gray-600">
            <!-- Add guide content here -->
            Grant camera permissions in your device settings.
          </div>
        </div>
  
        <!-- Action Buttons -->
        <div class="flex justify-between mt-4">
          <button @click="closeModal" class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">Cancel</button>
          <button @click="handleCapture" class="bg-blue-600 text-white px-4 py-2 rounded-lg">Didn't get notification?</button>
        </div>
  
        <!-- Camera and Preview -->
        <div v-if="cameraPermissionGranted && !preview" class="mt-4">
          <video ref="video" class="w-full rounded-lg" autoplay playsinline></video>
          <button @click="captureImage" class="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg">Take Picture</button>
        </div>
        <div v-if="preview" class="mt-4">
          <img :src="preview" alt="Captured Image" class="w-full rounded-lg" />
          <button @click="sendImage" class="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">Upload Picture</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
//   import { CameraIcon, XIcon } from '@heroicons/vue/solid' // Assuming Heroicons is installed for icons
  
  const isOpen = ref(true)
  const cameraPermissionGranted = ref(false)
  const video = ref<HTMLVideoElement | null>(null)
  const preview = ref<string | null>(null)
  const showGuide = ref(false)
  
  // Close Modal
  const closeModal = () => {
    isOpen.value = false
  }
  
  // Toggle Guide
  const toggleGuide = () => {
    showGuide.value = !showGuide.value
  }
  
  // Request Camera Access
  const handleCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      video.value!.srcObject = stream
      cameraPermissionGranted.value = true
    } catch (error) {
      alert("Camera access denied.")
    }
  }
  
  // Capture Image
  const captureImage = () => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (video.value && context) {
      canvas.width = video.value.videoWidth
      canvas.height = video.value.videoHeight
      context.drawImage(video.value, 0, 0, canvas.width, canvas.height)
      preview.value = canvas.toDataURL('image/png')
    }
  }
  
  // Send Image to Backend
  const sendImage = async () => {
    if (!preview.value) return
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: preview.value })
      })
      const result = await response.json()
      alert('Image uploaded successfully!')
    } catch (error) {
      alert('Failed to upload image')
    }
  }
  </script>
  
  <style scoped>
  /* Custom styling if needed */
  </style>
  