<template>
    <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <button class="flex items-center text-gray-600 hover:text-gray-800 mb-4">
        <span class="material-icons">arrow_back</span>
      </button>
      <h2 class="text-2xl font-semibold text-gray-700 mb-6">Add bank account</h2>
      <form>
        <div class="mb-4">
          <label for="account-number" class="block text-sm text-gray-500 mb-1">Account Number</label>
          <input
            id="account-number"
            type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value="chinedundukife@mail.com"
            readonly
          />
        </div>
        
        <div class="mb-4">
          <label for="bank" class="block text-sm text-gray-500 mb-1">Your Bank</label>
          <select
            id="bank"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="zenith">Zenith bank</option>
            <!-- Add other bank options here -->
          </select>
        </div>
  
        <div class="mb-4">
          <div class="px-4 py-2 bg-green-100 text-green-700 rounded-lg">
            Chinedu Ndukife
          </div>
        </div>
  
        <div class="mb-6">
          <label for="password" class="block text-sm text-gray-500 mb-1">Your Password</label>
          <div class="relative">
            <input
              id="password"
              type="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value="passwordpassword"
              readonly
            />
            <span class="absolute inset-y-0 right-4 flex items-center text-gray-400">
              <span class="material-icons">help_outline</span>
            </span>
          </div>
        </div>
  
        <div class="mb-6 text-sm text-gray-500">
          <span>LoaniQ apply for a loan today, hassle free, with very low interest rate. </span>
          <a href="#" class="text-red-500">Learn more</a>
        </div>
  
        <button
          type="submit"
          class="w-full px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 flex justify-center items-center"
        >
          <span class="material-icons mr-2">add</span> Add bank account
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  // No specific logic required as it's a static form
  </script>
  
  <style scoped>
  .material-icons {
    font-size: 24px;
  }
  </style>
  