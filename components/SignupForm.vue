<template>
  <main>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div class="lg:w-[500px] flex flex-col justify-start items-start">
        <div class="flex justify-start items-start">
          <img
            src="@/assets/img/logo.png"
            alt="LoaniQ Logo"
            class="mx-auto mb-4 w-24"
          />
        </div>
        <h2 class="lg:text-3xl text-xl font-medium text-[#323740] text-left mb-2">
          Welcome! Sign Up on LoaniQ
        </h2>
        <form class="w-full space-y-6" @submit.prevent="register">
          <div class="mb-4">
            <label
              class="block text-[#7D8799] font-medium mb-1 text-sm"
              for="email"
              >Enter Your Email</label
            >
            <input
              type="email"
              id="email"
              v-model="credential.email.value"
              class="w-full px-4 py-4 bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-[#7D8799] font-medium mb-1 text-sm"
              for="bvn"
              >Enter your BVN</label
            >
            <input
              type="text"
              id="bvn"
              v-model="credential.bvn.value"
              class="w-full px-4 py-4 bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500"
            />
            <p class="text-[#8F9BB3] text-sm mt-1">
              Check your BVN via *565*0# {{ isFormDisabled }}
            </p>
          </div>
          <div class="pt-6">
            <button
  :disabled="isFormDisabled"
  type="submit"
  class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-[#2F6D67] text-white py-3.5 rounded-md hover:bg-[#2F6D67] transition"
>
  {{ loading ? "Processing..." : "Create New Account" }}
</button>

          </div>
        </form>
        <div class="text-center mt-4 flex items-center gap-y-4 flex-col w-full">
          <p
            @click="openModal"
            class="text-[#2E3A59] cursor-pointer text-center"
          >
            By signing up, you accept our
            <span class="text-[#2C64E3]">Terms & Conditions</span>
          </p>
          <p class="text-[#687181] flex items-center gap-x-3">
            Already have an account?
            <NuxtLink to="/login" class="text-[#2F6D67] hover:underline"
              >Log in</NuxtLink
            >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 4.86165L13.3333 10.695L7.5 16.5283"
                stroke="#2F6D67"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
    <CoreBaseModal v-model:modelValue="isModalOpen" title="Terms & Conditions">
      <p class="leading-loose text-justify">
        Feugiat mattis pellentesque elit nulla. Laoreet massa ultrices tempor
        magna quis ultrices commodo a, sed. Eu pharetra amet enim aliquam libero
        posuere in vitae. Id at nulla ut quis pellentesque pulvinar turpis urna.
        Ut amet risus enim massa, cursus enim dictum. Aliquam quam eleifend nunc
        diam. Viverra viverra tristique felis tempus aliquet ornare erat
        scelerisque. Vitae aenean elementum malesuada mattis convallis volutpat.
        Pharetra vel nibh nulla mauris aliquet ultrices proin tempor amet. Neque
        placerat nisl ac neque. Eget ridiculus sagittis duis pellentesque
        scelerisque in platea mus in.
      </p>
      <template #footer>
        <button
          @click="isModalOpen = false"
          class="px-4 py-3 bg-gray-500 w-full text-white rounded-lg"
        >
          Close
        </button>
      </template>
    </CoreBaseModal>
  </main>
</template>

<script setup lang="ts">
import { use_auth_register } from "@/composables/auth/register";
const { credential, register, loading, isFormDisabled } = use_auth_register();
// Modal open/close state
const isModalOpen = ref(false);

// Function to open the modal
const openModal = () => {
  isModalOpen.value = true;
};
</script>
