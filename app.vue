<template>
  <main>
    <CoreToast />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { visible, toastData, useCustomToast } from '@/composables/core/useCustomToast';

// Provide the toast state globally
provide('toastVisible', visible);
provide('toastData', toastData);
</script>


<style lang="css">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  #app {
    @apply min-h-screen font-sans;
  }
</style>