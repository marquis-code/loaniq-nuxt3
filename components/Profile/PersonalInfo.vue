<template>
    <div>
      <h2 class="text- font-medium mb-4">Personal information</h2>
      <form @submit.prevent="saveChanges" class="space-y-6">
        <div class="grid lg:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-600 text-sm pb-2">First And Last Name</label>
            <input v-model="personalInfo.fullName"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your full name" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Gender</label>
            <select v-model="personalInfo.gender"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Date Of Birth</label>
            <input type="date" v-model="personalInfo.dob"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Marital Status</label>
            <select v-model="personalInfo.maritalStatus"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Divorced">Divorced</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">BVN</label>
            <input v-model="personalInfo.bvn"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your BVN" />
          </div>
        </div>
        
        <h3 class="text- font-medium mt-8 mb-4">Contact information</h3>
        <div class="grid lg:grid-cols-2 gap-4 mt-4">
          <div>
            <label class="block text-gray-600 text-sm pb-2">Email Address</label>
            <input type="email" v-model="personalInfo.email"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your email" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Phone Number</label>
            <div class="flex items-center">
              <span class="px-3 py-2 border rounded-l-md bg-gray-100 text-gray-600 text-sm pb-2">+234</span>
              <input v-model="personalInfo.phone" class="input rounded-l-none" placeholder="Enter your phone number" />
            </div>
          </div>
          <div class="col-span-2">
            <label class="block text-gray-600 text-sm pb-2">Residential Address</label>
            <input v-model="personalInfo.address"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" placeholder="Enter your residential address" />
          </div>
          <div class="w-full">
            <label class="block text-gray-600 text-sm pb-2">State Of Residence</label>
            <select v-model="personalInfo.state"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Kano">Kano</option>
              <option value="Enugu">Enugu</option>
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
  import { useFetchAccountProfile } from '@/composables/modules/profile/getAccountProfile'
  const { profileObj, loading } = useFetchAccountProfile()
  
  const personalInfo = ref({
    fullName: 'Chinedu Ndukief',
    gender: 'Male',
    dob: '1993-04-27',
    maritalStatus: 'Single',
    bvn: '',
    email: 'chinedu.ndukiefe@email.com',
    phone: '',
    address: '',
    state: 'Lagos',
  })
  
  function saveChanges() {
    // Logic to save changes can go here
    console.log('Personal info saved', personalInfo.value)
  }
  </script>
  
  <style scoped>
  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    outline: none;
    transition: border-color 0.3s;
  }
  .input:focus {
    border-color: #3b82f6;
  }
  
  .btn-primary {
    background-color: #047857;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    transition: background-color 0.3s;
  }
  </style>
  