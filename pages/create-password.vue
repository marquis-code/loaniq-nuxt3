<template>
   <main>
      <CreatePassword />
      <!-- <CoreCameraModal /> -->
      <CoreBaseModal v-model:modelValue="isModalOpen" class="h-44" title="Setup Face ID">
          <CoreCameraModal />
      </CoreBaseModal>
   </main>
  </template>
  
  <script setup lang="ts">
  const isModalOpen = ref(true)
 definePageMeta({
    layout: 'auth',
 })
  </script>
  