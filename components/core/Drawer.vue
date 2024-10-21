<template>
    <transition name="modal">
<div v-if="show"  class="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
          <div class="pointer-events-auto w-screen max-w-2xl">
            <form class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div class="flex-1">
                <!-- Header -->
                <div class="bg-gray-50 px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between space-x-3">
                    <div class="space-y-1">
                      <h2 class="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">{{title}}</h2>
                      <p class="text-sm text-gray-500">{{description}}</p>
                    </div>
                    <div class="flex h-7 items-center">
                      <button @click="closeModal" type="button" class="relative text-gray-400 hover:text-gray-500">
                        <span class="absolute -inset-2.5"></span>
                        <span class="sr-only">Close panel</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
  
                <!-- Divider container -->
                <div class="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                    <slot name="content" />
                </div>
              </div>
  
              <!-- Action buttons -->
              <div class="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                <div class="flex justify-end space-x-3">
                  <button @click="closeModal"  type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Cancel</button>
                  <button type="submit" class="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script setup lang="ts">
 const props = defineProps({
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    showTitle: {
      type: Boolean,
      required: false,
      default: true 
    },
    showCloseBtn: {
      type: Boolean,
      required: false,
      default: true 
    }
  });

const emits = defineEmits(['close']);
  
  function closeModal() {
    emits('close');
  }
</script>

<style scoped>
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from, .modal-leave-to {
  opacity: 0;
}
</style>
