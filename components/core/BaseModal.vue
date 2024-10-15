<template>
 <main>
 <!-- Dark overlay -->
    <transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="closeModal"></div>
    </transition>
  
    <!-- Modal container -->
    <transition name="scale">
      <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-6">
        <div
          @click.stop
          class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 space-y-4 mx-4 md:mx-0"
        >
          <!-- Modal Header -->
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-medium text-gray-900">
              {{ title }}
            </h3>
            <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <!-- Modal Body (Content slot) -->
          <div class="mt-2">
            <slot></slot>
          </div>
  
          <!-- Modal Footer (optional) -->
          <div v-if="$slots.footer" class="mt-4">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
 </main>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, ref, watch } from 'vue';
  
  const props = defineProps({
    title: {
      type: String,
      default: 'Modal Title',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const isOpen = ref(props.modelValue);
  
  watch(() => props.modelValue, (newVal) => {
    isOpen.value = newVal;
  });
  
  const closeModal = () => {
    isOpen.value = false;
    emit('update:modelValue', false);
  };
  </script>
  
  <style scoped>
  /* Modal open/close transitions */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  
  .scale-enter-active, .scale-leave-active {
    transition: transform 0.3s ease;
  }
  .scale-enter-from, .scale-leave-to {
    transform: scale(0.95);
  }
  </style>
  