<!-- <template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div class="w-[500px]  flex flex-col justify-start items-start">
       <div class="flex justify-start items-start">
        <img src="@/assets/img/logo.png" alt="LoaniQ Logo" class="mx-auto mb-4 w-24" />
       </div>
        <h2 class="text-3xl font-medium text-[#323740] text-center mb-2">Create your new passcode</h2>
        <p class="text-[#687181] leading-relaxed pb-4">
            Create a new <span class="font-semibold text-[#687181]">Six-digit</span> passcode that has not been used for your LoaniQ account before.
        </p>
        <form class="w-full space-y-6" @submit.prevent="createPasscode">
                <div class="mb-4 relative">
            <label class="block text-[#7D8799] font-medium mb-1 text-sm" for="passcode">Confirm New passcode</label>
            <input :type="showPassword ? 'text' : 'password'" id="passcode" v-model="credential.passcode.value" class="w-full px-4 py-4  bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500" />
            <div
            @click="toggleShowPassword"
            class="absolute inset-y-0 right-4 top-6 flex items-center cursor-pointer"
          >
            <svg
              v-if="!showPassword"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669"
                stroke="#1D2739"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M12.5 11.25L13.75 13.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6665 9.16669L18.3332 10.8334"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.6665 10.8334L3.33317 9.16669"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 11.25L6.25 13.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
  
            <svg
              v-if="showPassword"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z"
                stroke="#1D2739"
                stroke-width="2"
              />
              <path
                d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
                stroke="#1D2739"
                stroke-width="1.5"
              />
            </svg>
          </div>
          </div>
          <div class="mb-4 relative">
            <label class="block text-[#7D8799] font-medium mb-1 text-sm" for="passcode">Enter Temporary Passcode Here</label>
            <input :type="showPassword ? 'text' : 'password'" id="passcode" v-model="passcode" class="w-full px-4 py-4  bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500" />
            <div
            @click="toggleShowPassword"
            class="absolute inset-y-0 right-4 top-6 flex items-center cursor-pointer"
          >
            <svg
              v-if="!showPassword"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669"
                stroke="#1D2739"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M12.5 11.25L13.75 13.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6665 9.16669L18.3332 10.8334"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.6665 10.8334L3.33317 9.16669"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 11.25L6.25 13.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
  
            <svg
              v-if="showPassword"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z"
                stroke="#1D2739"
                stroke-width="2"
              />
              <path
                d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
                stroke="#1D2739"
                stroke-width="1.5"
              />
            </svg>
          </div>
          </div>
          <div class="pt-6">
            <button :disabled="loading" type="submit" class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-[#2F6D67] text-white py-3.5 rounded-md hover:bg-[#2F6D67] transition">{{loading ? 'processing...' : 'Update your passcode'}}</button>
          </div>
        </form>
        <div class="text-center mt-4">
          <p class="text-[#687181] flex items-center gap-x-4">Don't have an account? <a href="/signup" class="text-[#2F6D67] hover:underline flex items-center gap-x-1">Sign up here
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.86165L13.3333 10.695L7.5 16.5283" stroke="#2F6D67" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </a>
            </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { use_create_passcode } from '@/composables/auth/createPassCode'
  const { createPasscode, loading, credential,} = use_create_passcode()


  const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

  const showPassword = ref(false);
  </script>
 -->





   <template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div class="w-[500px] flex flex-col justify-start items-start">
        <div class="flex justify-start items-start">
          <img src="@/assets/img/logo.png" alt="LoaniQ Logo" class="mx-auto mb-4 w-24" />
        </div>
        <h2 class="text-3xl font-medium text-[#323740] text-center mb-2">Create your new passcode</h2>
        <p class="text-[#687181] leading-relaxed pb-4">
          Create a new <span class="font-semibold text-[#687181]">Six-digit</span> passcode that has not been used for your LoaniQ account before.
        </p>
  
        <!-- Form Starts -->
        <form class="w-full space-y-6" @submit.prevent="createPasscode">
          <!-- New Passcode Field -->
          <div class="mb-4 relative">
            <label class="block text-[#7D8799] font-medium mb-1 text-sm" for="passcode">Enter New Passcode</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="new-passcode"
              v-model="credential.passcode.value"
              :class="{'border-red-500': !isPasscodeMatching || !isValidLength}"
              class="w-full px-4 py-4 bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500"
            />
            <div
            @click="toggleShowPassword"
            class="absolute inset-y-0 right-4 top-6 flex items-center cursor-pointer"
          >
            <svg
              v-if="!showPassword"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669"
                stroke="#1D2739"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M12.5 11.25L13.75 13.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6665 9.16669L18.3332 10.8334"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.6665 10.8334L3.33317 9.16669"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 11.25L6.25 13.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
  
            <svg
              v-if="showPassword"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z"
                stroke="#1D2739"
                stroke-width="2"
              />
              <path
                d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
                stroke="#1D2739"
                stroke-width="1.5"
              />
            </svg>
          </div>
          </div>
  
          <!-- Confirm Passcode Field -->
          <div class="mb-4 relative">
            <label class="block text-[#7D8799] font-medium mb-1 text-sm" for="confirm-passcode">Confirm New Passcode</label>
            <input
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirm-passcode"
              v-model="confirmPasscode"
              :class="{'border-red-500': !isPasscodeMatching || !isValidLength}"
              class="w-full px-4 py-4 bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500"
            />
            <div
            @click="toggleConfirmShowPassword"
            class="absolute inset-y-0 right-4 top-6 flex items-center cursor-pointer"
          >
            <svg
              v-if="!showConfirmPassword"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3332 6.66669C18.3332 6.66669 14.9998 11.6667 9.99984 11.6667C4.99984 11.6667 1.6665 6.66669 1.6665 6.66669"
                stroke="#1D2739"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M12.5 11.25L13.75 13.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.6665 9.16669L18.3332 10.8334"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.6665 10.8334L3.33317 9.16669"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 11.25L6.25 13.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
  
            <svg
              v-if="showConfirmPassword"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.9532 9.20419C18.2065 9.55944 18.3332 9.7371 18.3332 10C18.3332 10.2629 18.2065 10.4406 17.9532 10.7959C16.8148 12.3922 13.9075 15.8334 9.99984 15.8334C6.09215 15.8334 3.18492 12.3922 2.04654 10.7959C1.79318 10.4406 1.6665 10.2629 1.6665 10C1.6665 9.7371 1.79318 9.55944 2.04654 9.20419C3.18492 7.60789 6.09215 4.16669 9.99984 4.16669C13.9075 4.16669 16.8148 7.60789 17.9532 9.20419Z"
                stroke="#1D2739"
                stroke-width="2"
              />
              <path
                d="M12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z"
                stroke="#1D2739"
                stroke-width="1.5"
              />
            </svg>
          </div>
          </div>
          <div>
              
                    <!-- Error Message for Mismatched Passcodes -->
                    <p v-if="!isPasscodeMatching" class="text-red-500 text-sm">Passcodes must match.</p>
            
                    <!-- Error Message for Passcode Length -->
                    <p v-if="!isValidLength" class="text-red-500 text-sm">Passcode must be exactly 4 characters.</p>
          </div>
            
          <!-- Submit Button -->
          <div class="pt-6">
            <button
              :disabled="!isPasscodeMatching || !isValidLength || loading"
              type="submit"
              class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-[#2F6D67] text-white py-3.5 rounded-md hover:bg-[#2F6D67] transition"
            >
              {{ loading ? 'Processing...' : 'Update your passcode' }}
            </button>
          </div>
        </form>
  
        <div class="text-center mt-4">
          <p class="text-[#687181] flex items-center gap-x-4">Don't have an account? <a href="/signup" class="text-[#2F6D67] hover:underline flex items-center gap-x-1">Sign up here
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.86165L13.3333 10.695L7.5 16.5283" stroke="#2F6D67" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { use_create_passcode } from '@/composables/auth/createPassCode';
  
  // Define state
  const { createPasscode, loading, credential } = use_create_passcode();
  const showPassword = ref(false);
  const showConfirmPassword = ref(false);
  const confirmPasscode = ref('');
  
  // Toggle password visibility
  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value;
  };


  const toggleConfirmShowPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
  };
  
  // Check if passcode and confirm passcode match
  const isPasscodeMatching = computed(() => {
    return credential.passcode.value === confirmPasscode.value;
  });
  
  // Validate passcode length (exactly 4 characters)
  const isValidLength = computed(() => {
    return credential.passcode.value.length === 4 && confirmPasscode.value.length === 4;
  });
  </script>
  