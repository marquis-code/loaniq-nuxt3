<template>
<main>
    <div class="flex items-center justify-center space-x-4 mt-6">
        <button @click="showAddFundsModal = true" class="flex items-center space-x-2 font-medium">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0004 21.6004C17.3023 21.6004 21.6004 17.3023 21.6004 12.0004C21.6004 6.69846 17.3023 2.40039 12.0004 2.40039C6.69846 2.40039 2.40039 6.69846 2.40039 12.0004C2.40039 17.3023 6.69846 21.6004 12.0004 21.6004ZM13.2004 8.40039C13.2004 7.73765 12.6631 7.20039 12.0004 7.20039C11.3376 7.20039 10.8004 7.73765 10.8004 8.40039V10.8004H8.40039C7.73765 10.8004 7.20039 11.3376 7.20039 12.0004C7.20039 12.6631 7.73765 13.2004 8.40039 13.2004H10.8004V15.6004C10.8004 16.2631 11.3376 16.8004 12.0004 16.8004C12.6631 16.8004 13.2004 16.2631 13.2004 15.6004V13.2004H15.6004C16.2631 13.2004 16.8004 12.6631 16.8004 12.0004C16.8004 11.3376 16.2631 10.8004 15.6004 10.8004H13.2004V8.40039Z" fill="#DD3636"/>
              </svg>
              
          <span>Add funds</span>
        </button>
        <div class="border-r h-6"></div>
        <button class="flex items-center space-x-2 font-medium">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 12L12 16M12 16L8 12M12 16L12 4" stroke="#DD3636" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>            
          <span>Withdraw</span>
        </button>
      </div>
      <PaymentTransactionModal v-if="showAddFundsModal" @close="showAddFundsModal = false" />
</main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const showAddFundsModal = ref(false);
  </script>
  