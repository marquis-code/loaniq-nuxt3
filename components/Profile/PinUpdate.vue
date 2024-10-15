<template>
    <div class="max-w-md mt-8">
      <!-- Update Your Pin Section -->
      <section class="mb-8">
        <h2 class="text- font-medium text-gray-700 mb-4">Update your pin</h2>
        <form @submit.prevent="savePin">
          <div class="space-y-4">
            <div>
              <label for="currentPin" class="text-gray-600 text-sm">Current Pin</label>
              <div class="flex items-center gap-x-3 gap- mt-2">
                <input
                  v-for="(value, index) in currentPin"
                  :key="'current-' + index"
                  type="password"
                  class="pin-input"
                  v-model="currentPin[index]"
                  maxlength="1"
                  inputmode="numeric"
                />
              </div>
            </div>
            <div>
              <label for="newPin" class="text-gray-600 text-sm">New Pin</label>
              <div class="flex items-center gap-x-3 gap- mt-2">
                <input
                  v-for="(value, index) in newPin"
                  :key="'new-' + index"
                  type="password"
                  class="pin-input"
                  v-model="newPin[index]"
                  maxlength="1"
                  inputmode="numeric"
                />
              </div>
            </div>
            <div>
              <label for="repeatNewPin" class="text-gray-600 text-sm">Repeat New Pin</label>
              <div class="flex items-center gap-x-3 gap- mt-2">
                <input
                  v-for="(value, index) in repeatNewPin"
                  :key="'repeat-' + index"
                  type="password"
                  class="pin-input"
                  v-model="repeatNewPin[index]"
                  maxlength="1"
                  inputmode="numeric"
                />
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-500 mt-2">
            Forgot your pin? <a href="#" class="text-[#2F6D67]">Reset it now</a>
          </p>
          <button type="submit" class="mt-4 text-sm px-4 py-2 bg-[#2F6D67] text-white rounded-md">
            Save changes
          </button>
        </form>
      </section>
  
      <!-- Login with Biometrics Section -->
      <section>
        <h2 class="text- font-medium text-gray-700 mb-4">Login with biometrics</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between bg-white rounded-lg p-4 border">
            <div class="flex items-center space-x-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6111 13.6117C19.6111 15.5999 17.9993 17.2117 16.0111 17.2117C14.0229 17.2117 12.4111 15.5999 12.4111 13.6117C12.4111 11.6235 14.0229 10.0117 16.0111 10.0117C17.9993 10.0117 19.6111 11.6235 19.6111 13.6117Z" fill="#DD3636"/>
                    <path d="M11.2268 17.2119C10.6987 17.9 10.3146 18.7158 10.1387 19.6119C9.87174 20.8462 10.8566 22.0119 12.1068 22.0119H19.9148C21.1278 22.0119 22.1155 20.7962 21.8826 19.6115C21.7065 18.7156 21.3226 17.8998 20.7946 17.2119C19.7067 18.6678 17.9626 19.6119 16.0106 19.6119C14.0585 19.6119 12.3145 18.6678 11.2266 17.2119H11.2268Z" fill="#DD3636"/>
                    <path d="M25.6113 5.21191H20.8113C20.1488 5.21191 19.6113 5.74942 19.6113 6.41191C19.6113 7.07441 20.1488 7.61191 20.8113 7.61191H24.4113V11.2119C24.4113 11.8744 24.9488 12.4119 25.6113 12.4119C26.2738 12.4119 26.8113 11.8744 26.8113 11.2119V6.41191C26.8113 5.74942 26.2738 5.21191 25.6113 5.21191Z" fill="#DD3636"/>
                    <path d="M25.6113 19.6123C24.9488 19.6123 24.4113 20.1498 24.4113 20.8123V24.4123H20.8113C20.1488 24.4123 19.6113 24.9498 19.6113 25.6123C19.6113 26.2748 20.1488 26.8123 20.8113 26.8123H25.6113C26.2738 26.8123 26.8113 26.2748 26.8113 25.6123V20.8123C26.8113 20.1498 26.2738 19.6123 25.6113 19.6123Z" fill="#DD3636"/>
                    <path d="M11.2109 24.4123H7.61094V20.8123C7.61094 20.1498 7.07343 19.6123 6.41094 19.6123C5.74845 19.6123 5.21094 20.1498 5.21094 20.8123V25.6123C5.21094 26.2748 5.74845 26.8123 6.41094 26.8123H11.2109C11.8734 26.8123 12.4109 26.2748 12.4109 25.6123C12.4109 24.9498 11.8734 24.4123 11.2109 24.4123Z" fill="#DD3636"/>
                    <path d="M6.41094 12.4119C7.07343 12.4119 7.61094 11.8744 7.61094 11.2119V7.61191H11.2109C11.8734 7.61191 12.4109 7.07441 12.4109 6.41191C12.4109 5.74942 11.8734 5.21191 11.2109 5.21191H6.41094C5.74845 5.21191 5.21094 5.74942 5.21094 6.41191V11.2119C5.21094 11.8744 5.74845 12.4119 6.41094 12.4119Z" fill="#DD3636"/>
                    </svg>
                    
              <span class="text-gray-700">Log in with face ID</span>
            </div>
            <!-- <input type="checkbox" v-model="isFaceIdEnabled" class="toggle-checkbox" /> -->
            <label for="faceId" class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                <span class="relative">
                    <input v-model="isFaceIdEnabled" id="faceId" type="checkbox" class="hidden peer">
                    <div class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                    <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                </span>
            </label>
          </div>
          <div class="flex items-center justify-between bg-white rounded-lg p-4 border">
            <div class="flex items-center space-x-2">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9998 14.6667C15.9998 19.3563 14.6548 23.7317 12.3294 27.4283M7.74251 24.7072C7.76612 24.6674 7.79031 24.6278 7.81507 24.5885C9.62106 21.7175 10.6665 18.3224 10.6665 14.6667C10.6665 11.7211 13.0544 9.33333 15.9999 9.33333C18.9454 9.33333 21.3332 11.7211 21.3332 14.6667C21.3332 16.0227 21.2409 17.3581 21.0622 18.6667M18.239 27.7915C19.0546 26.1635 19.7232 24.4492 20.2276 22.6667M25.3462 24.1759C26.2063 21.1542 26.6667 17.9642 26.6667 14.6667C26.6667 8.77563 21.891 4 16 4C14.0571 4 12.2356 4.51944 10.6667 5.42701M4 20.4855C4.85421 18.7272 5.33333 16.7529 5.33333 14.6667C5.33333 12.7238 5.85277 10.9023 6.76034 9.33333" stroke="#DD3636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
              <span class="text-gray-700">Login with touch ID</span>
            </div>
            <!-- <input type="checkbox" v-model="isTouchIdEnabled" class="toggle-checkbox" /> -->
            <label for="touchId" class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                <span class="relative">
                    <input  v-model="isTouchIdEnabled" id="touchId" type="checkbox" class="hidden peer">
                    <div class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                    <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                </span>
            </label>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
    import { useResetPin } from '@/composables/modules/profile/resetTransactionPin'
  const { payloadObj, resetTransactionPin, loading } = useResetPin()
  
  const currentPin = ref(['', '', '', ''])
  const newPin = ref(['', '', '', ''])
  const repeatNewPin = ref(['', '', '', ''])
  const isFaceIdEnabled = ref(false)
  const isTouchIdEnabled = ref(false)
  
  const savePin = () => {
    // Add logic to handle saving the PINs
    console.log('Current PIN:', currentPin.value.join(''))
    console.log('New PIN:', newPin.value.join(''))
    console.log('Repeat New PIN:', repeatNewPin.value.join(''))
  }
  </script>
  
  <style scoped>
  .pin-input {
    @apply w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:border-green-500;
  }
  
  .toggle-checkbox {
    @apply relative inline-block w-10 h-6 rounded-full border-2 transition-colors cursor-pointer;
    background-color: var(--tw-bg-opacity, 1) #e5e7eb; /* Light gray for off state */
    border-color: transparent;
  }
  
  .toggle-checkbox:checked {
    background-color: var(--tw-bg-opacity, 1) #10b981; /* Green for on state */
  }
  </style>
  