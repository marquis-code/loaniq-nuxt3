<template>
    <div class="w-full max-w-lg py-4 space-y-3">
      <!-- Display the list of accounts or the add bank account form based on query parameter -->
      <div v-if="!isAddingAccount" class="space-y-3">
        <div 
          v-for="(account, index) in accounts" 
          :key="index" 
          class="relative p-6 rounded-lg text-white" 
          :class="account.bgColor"
        >
          <div class="flex flex-col space-y-2">
            <p class="text-xl font-semibold">{{ account.name }}</p>
            <p class="text-base">{{ account.accountNumber }}</p>
            <p class="text-base">{{ account.bankName }}</p>
          </div>
          <div class="absolute bottom-0 right-0 opacity-20">
            <div class="w-32 h-32 rounded-full" :class="account.circleClass"></div>
          </div>
          <div class="absolute bottom-2 right-2 opacity-20">
            <div class="w-20 h-20 rounded-full" :class="account.circleClass"></div>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-semibold mb-4 text-center">Add bank account</h2>
          <div class="flex justify-center">
            <button
              @click="goToAddAccount"
              class="w-10 h-10 flex items-center justify-center bg-teal-700 text-white rounded-full border border-dashed"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="38" height="38" rx="19" stroke="#CCCCCC" stroke-width="2" stroke-dasharray="4 4"/>
                <path d="M20 8C13.388 8 8 13.388 8 20C8 26.612 13.388 32 20 32C26.612 32 32 26.612 32 20C32 13.388 26.612 8 20 8ZM24.8 20.9H20.9V24.8C20.9 25.292 20.492 25.7 20 25.7C19.508 25.7 19.1 25.292 19.1 24.8V20.9H15.2C14.708 20.9 14.3 20.492 14.3 20C14.3 19.508 14.708 19.1 15.2 19.1H19.1V15.2C19.1 14.708 19.508 14.3 20 14.3C20.492 14.3 20.9 14.708 20.9 15.2V19.1H24.8C25.292 19.1 25.7 19.508 25.7 20C25.7 20.492 25.292 20.9 24.8 20.9Z" fill="#2F6D67"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Add Bank Account Form -->
      <div v-else>
        <button @click="router.back()">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="4" fill="#EEEFF2"/>
            <path d="M19 23L12 16L19 9" stroke="#323740" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
        </button>
        <div class="flex items-center my-4">
          <button @click="goBack" class="text-gray-500">
            <i class="fa fa-arrow-left"></i>
          </button>
          <h2 class="text-lg font-semibold ml-2">Add bank account</h2>
        </div>
  
        <form @submit.prevent="submitAccountForm" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Account Number</label>
            <input
              v-model="accountNumber"
              type="text"
             class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3"
              placeholder="chinedundukife@mail.com"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700">Your Bank</label>
            <select
              v-model="selectedBank"
              class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3"
            >
              <option value="" disabled>Select bank</option>
              <option value="Zenith bank">Zenith bank</option>
              <option value="GTBank">GTBank</option>
              <!-- Add more bank options as needed -->
            </select>
          </div>
  
          <div v-if="accountHolderName" class="bg-green-100 text-green-700 px-4 py-2 rounded-lg">
            {{ accountHolderName }}
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-700">Your Password</label>
            <div class="relative">
              <input
                v-model="password"
                type="password"
                class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3"
                placeholder="**********"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                @click="togglePasswordVisibility"
              >
                <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
              </button>
            </div>
          </div>
  
          <p class="text-gray-600 text-sm">
            LoaniQ apply for a loan today, hassle free, with very low interest rate. 
            <a href="#" class="text-red-500">Learn more</a>
          </p>
  
          <button
            type="submit"
            class="w-full py-3.5 bg-teal-700 text-white rounded-md 0 transition"
          >
            Add bank account <i class="fa fa-plus ml-1"></i>
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const accounts = ref([
    {
      name: 'Chinedu Ndukife .E.',
      accountNumber: '8455601187',
      bankName: 'Wema Bank',
      bgColor: 'bg-teal-700',
      circleClass: 'bg-teal-600',
    },
    {
      name: 'Chinedu Ndukife',
      accountNumber: '0221117895',
      bankName: 'Standard Chartered Bank Of Nigeria',
      bgColor: 'bg-rose-500',
      circleClass: 'bg-rose-400',
    },
  ]);
  
  const accountNumber = ref<string>('');
  const selectedBank = ref<string>('');
  const accountHolderName = ref<string>('Chinedu Ndukife');
  const password = ref<string>('');
  const showPassword = ref<boolean>(false);
  
  const router = useRouter();
  const route = useRoute();
  
  const isAddingAccount = computed(() => route.query.adding === 'true');
  
  function goToAddAccount() {
    router.push({ query: { ...route.query, adding: 'true' } });
  }
  
  function goBack() {
    router.push({ query: { adding: null } });
  }
  
  function togglePasswordVisibility() {
    showPassword.value = !showPassword.value;
  }
  
  function submitAccountForm() {
    // Logic for handling the form submission
    console.log('Account added:', accountNumber.value, selectedBank.value, password.value);
    goBack(); // Return to the accounts list view after submission
  }
  </script>
  