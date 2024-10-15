<template>
    <div class="flex flex-col justify-center items-center w-full h-screen bg-white p-10">
      <div class="w-96 bg-white shadow-md rounded-md p-8">
        <h2 class="text-xl font-bold text-center mb-4">Login to Your Account</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-gray-700 mb-1" for="phone">Phone Number</label>
            <input type="text" id="phone" v-model="phone" class="w-full px-4 py-2 border rounded-md" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-1" for="passcode">Temporary Passcode</label>
            <input type="password" id="passcode" v-model="passcode" class="w-full px-4 py-2 border rounded-md" />
          </div>
          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const phone = ref('');
  const passcode = ref('');
  
  const handleLogin = () => {
    console.log('Phone:', phone.value);
    console.log('Passcode:', passcode.value);
  };
  </script>
  