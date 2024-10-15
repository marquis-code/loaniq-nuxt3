<template>
    <transition name="fade">
      <div v-if="isVisible" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-lg w-96 p-6">
          <h2 class="text-lg font-semibold mb-4">Country code</h2>
          <!-- Search Field -->
          <input
            v-model="searchTerm"
            type="text"
            class="border border-gray-300 rounded-lg w-full p-2 mb-4"
            placeholder="Search country"
          />
          <!-- Country List -->
          <ul class="divide-y divide-gray-200 max-h-64 overflow-y-auto">
            <li v-for="country in filteredCountries" :key="country.code" class="p-2 cursor-pointer hover:bg-gray-100 flex items-center justify-between"
                @click="selectCountry(country)">
              <span>{{ country.flag }} {{ country.name }} ({{ country.dialCode }})</span>
              <span v-if="selectedCountry === country.code" class="text-green-500">✔</span>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, watch, PropType } from 'vue';
  
  const props = defineProps({
    isVisible: {
      type: Boolean,
      required: true
    },
    selectedCountryCode: {
      type: String,
      default: ''
    }
  });
  
  const emit = defineEmits(['close', 'selectCountry']);
  
  // Add console log to debug visibility
  watch(() => props.isVisible, (newVal) => {
    console.log('Modal visibility changed:', newVal);
  });
  
  // List of countries
  const countries = ref([
    { code: 'AZ', dialCode: '+994', name: 'Azerbaijan', flag: '🇦🇿' },
    { code: 'UK', dialCode: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'FR', dialCode: '+33', name: 'France', flag: '🇫🇷' },
    { code: 'US', dialCode: '+1', name: 'United States', flag: '🇺🇸' },
    { code: 'CN', dialCode: '+86', name: 'China', flag: '🇨🇳' },
    { code: 'IN', dialCode: '+91', name: 'India', flag: '🇮🇳' },
    { code: 'AL', dialCode: '+355', name: 'Albania', flag: '🇦🇱' },
    { code: 'SG', dialCode: '+65', name: 'Singapore', flag: '🇸🇬' },
  ]);
  
  // Selected Country
  const selectedCountry = ref(props.selectedCountryCode);
  
  // Search term for filtering countries
  const searchTerm = ref('');
  
  // Filter the countries based on the search term
  const filteredCountries = computed(() => {
    if (!searchTerm.value) return countries.value;
    return countries.value.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  });
  
  // When a country is selected
  const selectCountry = (country: any) => {
    selectedCountry.value = country.code;
    emit('selectCountry', country);
    emit('close');
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  