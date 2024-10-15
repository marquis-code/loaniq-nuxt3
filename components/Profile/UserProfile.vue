<template>
    <div class="p-4 bg-white rounded-lg shadow-md max-w-6xl">
      <div class="flex items-center space-x-4">
        <img src="@/assets/img/avatar.png" alt="Profile" class="h-16 w-16 rounded-full" />
        <div>
          <h3 class="text-xl font-bold">{{ user.fullName }}</h3>
          <p class="text-gray-500">{{ user.email }}</p>
        </div>
      </div>
      <div class="mt-6">
        <Tabs :tabs="tabs" :activeTab="activeTab" @update:activeTab="updateTab" />
        <div class="mt-4">
          <component :is="currentTabComponent" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Tabs from '@/components/Profile/Tabs.vue'
  import PersonalInfo from '@/components/Profile/PersonalInfo.vue'
  import NextOfKin from '@/components/Profile/NextOfKin.vue'
  import GovernmentId from '@/components/Profile/GovernmentId.vue'
  import EmploymentDetails from '@/components/Profile/EmploymentDetails.vue'
  import UpdateSecurity from '@/components/Profile/UpdateSecurity.vue'
  
  const user = ref({
    fullName: 'Chinedu Ndukief',
    email: 'chinedu.ndukiefe@email.com',
    profilePicture: '/profile-pic.jpg'
  })
  
  const tabs = [
    { name: 'personal', label: 'Personal profile' },
    { name: 'next-of-kin', label: 'Next of kin' },
    { name: 'government-id', label: 'Government I.D.' },
    { name: 'employment', label: 'Employment (Loans only)' },
    { name: 'security', label: 'Security' }
  ]
  
  const activeTab = ref('personal')
  
  const currentTabComponent = computed(() => {
    switch (activeTab.value) {
      case 'personal':
        return PersonalInfo
      case 'next-of-kin':
        return NextOfKin
      case 'government-id':
        return GovernmentId
      case 'employment':
        return EmploymentDetails
      case 'security':
        return UpdateSecurity
      default:
        return PersonalInfo
    }
  })
  
  function updateTab(tabName: string) {
    activeTab.value = tabName
  }
  </script>
  