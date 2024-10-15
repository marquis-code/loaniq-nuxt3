<template>
  <main class="min-h-screen bg-gradient-to-br from-[#F1F7FD] via-[#E9F2FA] lg:p-10 to-[#D7F4D7]">
  <div class="p-6 bg-white rounded-xl lg:h-[850px] max-w-5xl">
    <PaymentTabNavigation :activeTab="activeTab" @updateTab="setActiveTab" />
    <div v-if="activeTab === 'wallet'" class="grid grid-cols-1 lg:divide-x lg:grid-cols-2 gap-6 mt-6">
      <PaymentWalletCard />
      <div class="lg:pl-10">
        <PaymentTransactionList  />
      </div>
    </div>
    <div v-if="activeTab === 'beneficiaries'">
      <PaymentBankCard />
    </div>

    <div v-if="activeTab === 'debitCards'">
      <PaymentCardsList />
    </div>
  </div>
</main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const activeTab = ref<string>(route.query.tab || 'wallet');

// Function to update the active tab and sync with query parameter
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
  router.push({ query: { ...route.query, tab } });
};

// Sync with query parameter when component mounts
onMounted(() => {
  if (!route.query.tab || !['wallet', 'beneficiaries', 'debitCards'].includes(route.query.tab as string)) {
    setActiveTab('wallet');
  }
});

// Watch for changes in the route query to update the activeTab
watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab && ['wallet', 'beneficiaries', 'debitCards'].includes(newTab as string)) {
      activeTab.value = newTab;
    }
  }
);

definePageMeta({
  layout: 'dashboard',
});
</script>
