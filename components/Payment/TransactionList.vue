<template>
    <div class="">
      <!-- Header -->
      <PaymentFilterButton />
  
      <!-- Transaction List -->
     <section class="max-w-3xl mx-auto" >
      <ul class="">
        <li v-for="(transaction, index) in transactions" :key="index" class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-2">
            <div>
              <svg v-if="transaction.type === 'Withdrawal'"  width="40" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#EB3A3A" fill-opacity="0.2"/>
                <path d="M17.914 15.811C17.8356 15.8894 17.7284 15.9389 17.6046 15.9389C17.3654 15.9389 17.1674 15.7409 17.1674 15.5016L17.1674 10.9314L12.5971 10.9314C12.3579 10.9314 12.1599 10.7334 12.1599 10.4941C12.1599 10.2549 12.3579 10.0569 12.5971 10.0569L17.6046 10.0569C17.8439 10.0569 18.0418 10.2549 18.0418 10.4941L18.0418 15.5016C18.0418 15.6254 17.9923 15.7326 17.914 15.811Z" fill="#EB3A3A"/>
                <path d="M17.8447 10.8732L10.9027 17.8152C10.7336 17.9843 10.4531 17.9843 10.284 17.8152C10.1149 17.6461 10.1149 17.3656 10.284 17.1965L17.226 10.2545C17.3951 10.0854 17.6756 10.0854 17.8447 10.2545C18.0138 10.4236 18.0138 10.7041 17.8447 10.8732Z" fill="#EB3A3A"/>
                </svg>
                
                <svg v-else width="40" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="14" fill="#EDFFF0"/>
                  <path d="M15.9099 17.8151C15.8315 17.8934 15.7243 17.9429 15.6006 17.9429L10.5931 17.9429C10.3538 17.9429 10.1558 17.7449 10.1558 17.5057L10.1558 12.4982C10.1558 12.259 10.3538 12.061 10.5931 12.061C10.8323 12.061 11.0303 12.259 11.0303 12.4982L11.0303 17.0685H15.6006C15.8398 17.0685 16.0378 17.2665 16.0378 17.5057C16.0419 17.6253 15.9883 17.7367 15.9099 17.8151Z" fill="#10A83B"/>
                  <path d="M17.915 10.8029L10.973 17.7449C10.8039 17.914 10.5234 17.914 10.3543 17.7449C10.1852 17.5758 10.1852 17.2953 10.3543 17.1262L17.2963 10.1842C17.4654 10.0151 17.7459 10.0151 17.915 10.1842C18.0841 10.3533 18.0841 10.6338 17.915 10.8029Z" fill="#10A83B"/>
                  </svg>
            </div>
            <div>
              <p class="font- text-[#434E61]">{{ transaction.type }}</p>
              <p class="text-xs text-gray-500">{{ transaction.date }}</p>
            </div>
          </div>
          <div class="text-right">
            <p class="font-medium text-[#434E61]">{{ transaction.amount }}</p>
            <p class="text-xs text-[#7D8799]">{{ transaction.method }}</p>
          </div>
        </li>
      </ul>
  
      <!-- Pagination -->
      <div class="flex justify-center items-center space-x-2 mt-6">
        <button @click="prevPage" class="p-2 rounded-full hover:bg-red-500 text-red-500 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="setPage(page)"
          :class="currentPage === page ? 'bg-red-500 text-white' : 'text-red-500'"
          class="p-2 rounded-full hover:bg-red-500 hover:text-white"
        >
          {{ page }}
        </button>
        <button @click="nextPage" class="p-2 rounded-full hover:bg-red-500 text-red-500 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
     </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const selectedFilter = ref('Bank transfer');
  const currentPage = ref(2);
  const totalPages = 11;
  
  const transactions = ref([
    { type: 'Withdrawal', date: '23 Mar, 2023', amount: '₦420,000.00', method: 'Bank transfer' },
    { type: 'Funding', date: '23 Mar, 2023', amount: '₦224,000.00', method: 'Bank transfer' },
    { type: 'Funding', date: '23 Mar, 2023', amount: '₦224,000.00', method: 'Bank transfer' },
    { type: 'Withdrawal', date: '23 Mar, 2023', amount: '₦420,000.00', method: 'Bank transfer' },
    { type: 'Withdrawal', date: '23 Mar, 2023', amount: '₦420,000.00', method: 'Bank transfer' },
    { type: 'Withdrawal', date: '23 Mar, 2023', amount: '₦420,000.00', method: 'Bank transfer' },
    { type: 'Funding', date: '23 Mar, 2023', amount: '₦224,000.00', method: 'Bank transfer' },
    { type: 'Funding', date: '23 Mar, 2023', amount: '₦224,000.00', method: 'Bank transfer' }
  ]);
  
  const setPage = (page: number) => {
    currentPage.value = page;
  };
  
  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages) {
      currentPage.value++;
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  