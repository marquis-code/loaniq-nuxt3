<template>
    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
            <div class="p-4 bg-white rounded-lg shadow-md lg:w-4/12 mx-auto">
              <h2 class="text- font-medium mb-4 text-[#323740]">Select a date period</h2>
              
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700">Start Date</label>
                  <div class="relative mt-1">
                    <input
                      type="date"
                      v-model="startDate"
                      class="w-full border bg-[#F4F5F7] outline-none border-none py-3 border-gray-300 rounded-lg px-3 text-gray-700"
                    />
                    <span class="absolute right-3 top-3 text-gray-500">
                      <i class="fa fa-calendar"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700">End Date</label>
                  <div class="relative mt-1">
                    <input
                      type="date"
                      v-model="endDate"
                      class="w-full border bg-[#F4F5F7] outline-none border-none py-3 border-gray-300 rounded-lg px-3 text-gray-700"
                    />
                    <span class="absolute right-3 top-3 text-gray-500">
                      <i class="fa fa-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              
              <h2 class="text- font-medium mb-4 text-[#323740]">Transaction method</h2>
              <ul class="space-y-2 mb-4">
                <li v-for="(method, index) in transactionMethods" :key="index" class="border-b-[0.5px] border-gray-100">
                  <button
                    @click="selectMethod(index)"
                    :class="[
                      'w-full text-left text-sm py-2 px-4 text-[#808080]',
                      selectedMethod === index ? 'text-red-500 border-red-500' : 'text-gray-700 border-gray-300'
                    ]"
                  >
                    {{ method }}
                  </button>
                </li>
              </ul>
          
          <div class="flex justify-end items-end">
            <button
            @click="updateFilter"
            class="text-sm py-3 bg-[#2F6D67] text-white px-2.5 rounded-md  transition"
          >
            Update filter
          </button>
          </div>
            </div>
          
    </div>
  </template>
  
  <script setup lang="ts">
import { ref } from "vue";

const startDate = ref<string>("");
const endDate = ref<string>("");
const selectedMethod = ref<number | null>(null);

const transactionMethods = [
  "Funding - Bank Transfer",
  "Funding - Debit Card",
  "Withdrawal - Bank Transfer",
  "Withdrawal - Debit Card",
];

function selectMethod(index: number) {
  selectedMethod.value = index;
}

function updateFilter() {
  // Handle filter update logic here, such as emitting an event or making an API call.
  console.log("Start Date:", startDate.value);
  console.log("End Date:", endDate.value);
  console.log(
    "Selected Method:",
    transactionMethods[selectedMethod.value || 0]
  );
}
</script>
