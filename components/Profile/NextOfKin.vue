<template>
    <div>
      <h2 class="text- font-medium mb-4">Next of kin personal information</h2>
      <form @submit.prevent="saveChanges" class="space-y-4">
        <div class="grid lg:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-600 text-sm pb-2">First And Last Name</label>
            <input v-model="nextOfKinInfo.fullName"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Relationship</label>
            <select v-model="nextOfKinInfo.relationship"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option>Brother</option>
              <option>Sister</option>
              <option>Parent</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Gender</label>
            <select v-model="nextOfKinInfo.gender"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Email Address</label>
            <input type="email" v-model="nextOfKinInfo.email"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Phone Number</label>
            <input v-model="nextOfKinInfo.phone"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Residential Address</label>
            <input v-model="nextOfKinInfo.address"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">State Of Residence</label>
            <select v-model="nextOfKinInfo.state"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Kano</option>
              <option>Enugu</option>
            </select>
          </div>
        </div>
        <div class="pt-3">
            <button type="submit" class="bg-[#2F6D67] text-white px-6 py-3 rounded-md text-sm mt-6">Save changes</button>
           </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useFetchNextOfKinProfile } from '@/composables/modules/profile/getNextOfKinProfile'
  const { profileObj, loading } = useFetchNextOfKinProfile()
  
  const nextOfKinInfo = ref({
    fullName: '',
    relationship: 'Brother',
    gender: 'Male',
    email: '',
    phone: '',
    address: '',
    state: 'Lagos',
  })
  
  function saveChanges() {
    // Handle form submission for next of kin information
  }
  </script>
  