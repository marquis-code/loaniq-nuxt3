<template>
    <div class="flex space-x-4 overflow-x-auto scrollbar-hide">
      <button
        v-for="tab in tabs"
        :key="tab.name"
        :class="[
          'px-4 py-2 text-sm rounded-md outline-none',
          tab.name === activeTab
            ? 'text-red-500 bg-red-100'
            : 'text-gray-500 bg-gray-100'
        ]"
        @click="selectTab(tab.name)"
      >
        {{ tab.label }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    tabs: Array as () => { name: string; label: string }[],
    activeTab: String,
  })
  
  const emit = defineEmits(['update:activeTab'])
  
  function selectTab(tabName: string) {
    emit('update:activeTab', tabName)
  }
  </script>
  
  <style>
  /* Hide the scrollbar but keep the scroll functionality */
  .scrollbar-hide {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  </style>
  