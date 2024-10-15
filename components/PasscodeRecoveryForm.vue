<template>
    <div class="flex flex-col items-center justify-center w-full h-screen bg-white p-10">
      <div class="w-96 bg-white shadow-md rounded-md p-8 text-center">
        <div class="flex justify-center mb-4">
          <img src="/icons/recover-icon.png" alt="Recover Icon" class="w-12 h-12" />
        </div>
        <h2 class="text-2xl font-bold mb-2">Recover passcode</h2>
        <p class="text-gray-600 mb-4">Seems you have forgotten your passcode, Let's assist you in getting a new one.</p>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="phone">Phone Number</label>
          <input type="text" id="phone" class="w-full px-4 py-2 border rounded-md" value="08168176267" />
        </div>
        <button class="w-full bg-green-600 text-white py-2 rounded-md">Send OTP</button>
        <div class="flex justify-between mt-4 text-gray-600">
          <a href="#" class="text-green-600">Sign out</a>
          <a href="#" class="text-green-600">Forgot passcode?</a>
        </div>
      </div>
    </div>
  </template>
  