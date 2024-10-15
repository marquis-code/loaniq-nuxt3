<template>
  <div class="space-y-4 max-w-xl">
    <!-- Display list of cards or the add new card form based on query parameter -->
    <div v-if="!isAddingCard">                                                                                                                                                                      
      <div
        v-for="card in cards"
        :key="card.id"
        class="flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0"
      >
        <div class="flex items-center space-x-4">
          <img :src="card.image" :alt="card.type" class="w-10 h-6" />
          <div class="flex items-center space-x-2">
            <div class="text-gray-400">••••</div>
            <div class="font-medium text-gray-900">{{ card.last4 }}</div>
            <div class="text-gray-400">- {{ card.bank }}</div>
          </div>
        </div>
        <button class="p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="11.998" cy="20.001" r="2" fill="#687181" />
            <circle cx="11.998" cy="12.001" r="2" fill="#687181" />
            <circle cx="11.998" cy="4.00098" r="2" fill="#687181" />
          </svg>
        </button>
      </div>
      <div class="flex items-center space-x-2 mt-4">
        <button
          @click="goToAddCard"
          class="flex items-center space-x-2 px-4  text-sm  text-[#323740] "
        >
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.001 8.49805C13.389 8.49805 8.00098 13.886 8.00098 20.498C8.00098 27.11 13.389 32.498 20.001 32.498C26.613 32.498 32.001 27.11 32.001 20.498C32.001 13.886 26.613 8.49805 20.001 8.49805ZM24.801 21.398H20.901V25.298C20.901 25.79 20.493 26.198 20.001 26.198C19.509 26.198 19.101 25.79 19.101 25.298V21.398H15.201C14.709 21.398 14.301 20.99 14.301 20.498C14.301 20.006 14.709 19.598 15.201 19.598H19.101V15.698C19.101 15.206 19.509 14.798 20.001 14.798C20.493 14.798 20.901 15.206 20.901 15.698V19.598H24.801C25.293 19.598 25.701 20.006 25.701 20.498C25.701 20.99 25.293 21.398 24.801 21.398Z" fill="#2F6D67"/>
          </svg>
          
          <span>Add new card</span>
        </button>
      </div>
    </div>

    <!-- Add New Card Form -->
    <div v-else class="mt-5">
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
        <h2 class="text-lg text-[#A8B0BF] font-medium">Add a new card</h2>
      </div>

      <form @submit.prevent="submitCardForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Credit Card</label>
          <input
            v-model="cardNumber"
            type="text"
           class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3"
            placeholder="5521 5569 2256 8891"
          />
        </div>
        
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label class="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              v-model="expiryDate"
              type="text"
              class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3"
              placeholder="08/25"
            />
          </div>
          <div class="w-1/2">
            <label class="block text-sm font-medium text-gray-700">CVV</label>
            <div class="relative">
              <input
                v-model="cvv"
                type="password"
               class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3"
                placeholder="•••"
              />
              <button
                type="button"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                @click="toggleCvvVisibility"
              >
                <i :class="showCvv ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
              </button>
            </div>
          </div>
        </div>

        <p class="text-gray-600 text-sm">
          LoaniQ apply for a loan today, hassle free, with very low interest rate. 
          <a href="#" class="text-red-500">Learn more</a>
        </p>

       <div class="pt-6">
        <button
        type="submit"
        class="w-full py-3.5 bg-teal-700 text-white rounded-md  hover:bg-teal-600 transition"
      >
        Add card <i class="fa fa-plus ml-1"></i>
      </button>
       </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import masterCard from '@/assets/icons/master-card.svg'
  import visaCard from '@/assets/icons/visa-card.svg'
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

interface Card {
  id: number;
  type: string;
  image: string;
  last4: string;
  bank: string;
}

const cards = ref<Card[]>([
  {
    id: 1,
    type: 'Mastercard',
    image: masterCard, // Replace with your asset path
    last4: '8856',
    bank: 'Unity bank',
  },
  {
    id: 2,
    type: 'Visa',
    image: visaCard, // Replace with your asset path
    last4: '4217',
    bank: 'Wema bank',
  },
]);

const cardNumber = ref<string>('');
const expiryDate = ref<string>('');
const cvv = ref<string>('');
const showCvv = ref<boolean>(false);

const router = useRouter();
const route = useRoute();

const isAddingCard = computed(() => route.query.adding === 'true');

function goToAddCard() {
    router.push({ query: { ...route.query, adding: 'true' } });
  }

function goBack() {
  router.push({ query: { adding: null } });
}

function toggleCvvVisibility() {
  showCvv.value = !showCvv.value;
}

function submitCardForm() {
  // Logic to handle the form submission, such as sending the data to an API
  console.log('Card added:', cardNumber.value, expiryDate.value, cvv.value);
  goBack(); // Go back to the list view after submission
}
</script>
