<template>
  <div class="flex space-x-4">
    <button
      v-for="tab in tabs"
      :key="tab.name"
      :class="[
        'px-4 py-2 rounded-md outline-none',
        tab.name === activeTab
          ? 'text-red-500 bg-red-100'
          : 'text-gray-500 bg-gray-100'
      ]"
      @click="$emit('updateTab', tab.name)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  activeTab: String,
});

const tabs = [
  { name: 'wallet', label: 'My wallet' },
  { name: 'beneficiaries', label: 'Saved beneficiaries' },
  { name: 'debitCards', label: 'Debit cards' }
];
</script>
