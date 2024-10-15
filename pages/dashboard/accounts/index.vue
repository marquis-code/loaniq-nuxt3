<!-- <template>
  <main class="min-h-screen bg-gradient-to-br from-[#F1F7FD] via-[#E9F2FA] to-[#D7F4D7] flex justify-center items-center place-content-center">
     <p class="text-xl">Coming Soon</p>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
layout: 'dashboard',
})
</script> -->

<template>
  <main class="min-h-screen p-6 bg-gradient-to-br from-[#F1F7FD] via-[#E9F2FA] to-[#D7F4D7] ">
  <div class="max-w-4xl">
    <div class="bg-white p-6 rounded-lg shadow-md w-full ">
      <div class="flex items-center space-x-4">
        <img src="@/assets/img/avatar.png" alt="Profile" class="h-16 w-16 rounded-full" />
        <div>
          <h3 class="text-xl font-bold">{{ user.fullName }}</h3>
          <p class="text-gray-500">{{ user.email }}</p>
        </div>
      </div>

      <div class="mt-6 space-y-2">
        <div
          v-for="item in menuItems"
          :key="item.name"
          @click="navigateTo(item.path)"
          class="flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          <div class="flex items-center space-x-3">
            <img :src="item.icon" alt="" />
            <span>{{ item.label }}</span>
          </div>

          <div v-if="item.name === 'Notifications'">
            <label for="touchId" class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
              <span class="relative">
                  <input v-model="user.notifications"  id="touchId" type="checkbox" class="hidden peer">
                  <div class="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                  <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
              </span>
          </label>
            <!-- <input type="checkbox" v-model="user.notifications" class="ml-auto" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserIcon from '@/assets/icons/account-profile.svg'
import LockClosedIcon from '@/assets/icons/account-security.svg'
import ChartBarIcon from '@/assets/icons/account-statement.svg'
import BookOpenIcon from '@/assets/icons/account-learning.svg'
import BellIcon from '@/assets/icons/account-notification.svg'
// Import icons

definePageMeta({
layout: 'dashboard',
})

const router = useRouter()

const user = ref({
  fullName: 'Chinedu Ndukief',
  email: 'chinedu.ndukiefe@email.com',
  profilePicture: '/profile-pic.jpg',
  notifications: false,
})

const menuItems = [
  { name: 'My Profile', label: 'My profile', icon: UserIcon, path: '/dashboard/accounts/profile' },
  { name: 'Security', label: 'Security', icon: LockClosedIcon, path: '/security' },
  { name: 'Account Statement', label: 'Account statement', icon: ChartBarIcon, path: '/account-statement' },
  { name: 'Learning Centre', label: 'Learning Centre', icon: BookOpenIcon, path: '/learning-centre', external: true },
  { name: 'Notifications', label: 'Notifications', icon: BellIcon, path: null },
]

function navigateTo(path: string | null) {
  if (path) {
    router.push(path)
  }
}
</script>

<style scoped>
/* Custom checkbox styling */
input[type='checkbox'] {
  appearance: none;
  width: 2.5rem;
  height: 1.25rem;
  background: #d1d5db;
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
}

input[type='checkbox']:checked {
  background: #047857;
}

input[type='checkbox']::before {
  content: '';
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: #ffffff;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: translateX(0.25rem);
}

input[type='checkbox']:checked::before {
  transform: translateX(1.25rem);
}
</style>
