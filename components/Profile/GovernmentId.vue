<template>
    <div>
      <h2 class="text- font-medium mb-4">Legal ID information</h2>
      <form @submit.prevent="saveChanges" class="space-y-4">
        <div class="grid lg:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-600 text-sm pb-2">Your ID Type</label>
            <select v-model="governmentId.idType"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3">
              <option>National Identity Card</option>
              <option>Driver's License</option>
              <option>Voter's Card</option>
              <option>International Passport</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">ID Number</label>
            <input v-model="governmentId.idNumber"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
          <div>
            <label class="block text-gray-600 text-sm pb-2">Issue Date</label>
            <input type="date" v-model="governmentId.issueDate"  class="w-full border border-gray-300 rounded-md py-3.5 bg-gray-50 text-sm border-none outline-none px-3" />
          </div>
        </div>
        <!-- <div>
          <h3 class="text- font-medium mb-4 mt-6">Upload documents</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-gray-600 text-sm pb-2">Front copy</label>
              <input type="file" @change="uploadFile('front')" class="input" />
            </div>
            <div>
              <label class="block text-gray-600 text-sm pb-2">Back copy</label>
              <input type="file" @change="uploadFile('back')" class="input" />
            </div>
          </div>
        </div> -->
        <div class="mt-8">
            <h3 class="text- font-medium mb-4 mt-6">Upload documents</h3>
            <div class="grid lg:grid-cols-2 gap-4 max-w-3xl">
              <!-- Front Copy -->
              <div class="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow">
                <div class="flex justify-between items-center bg-blue-100 py-2 px-3 rounded-t-md">
                  <h3 class="text-gray-700 font-medium text-center">Front copy</h3>
                  <input type="file" accept="image/*" @change="onFileChange('front', $event)" class="hidden" ref="frontInput" />
                </div>
                <div class="flex items-center justify-center h-40 bg-white rounded-b-md">
                  <template v-if="frontImage">
                    <img :src="frontImage" alt="Front Copy" class="h-full object-contain" />
                  </template>
                  <template v-else>
                    <button @click="triggerUpload('front')" class="flex items-center justify-center text-gray-500">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="46" height="46" rx="23" stroke="#FC8A8A" stroke-width="2" stroke-dasharray="4 4"/>
                            <path d="M23.9996 9.59961C16.0652 9.59961 9.59961 16.0652 9.59961 23.9996C9.59961 31.934 16.0652 38.3996 23.9996 38.3996C31.934 38.3996 38.3996 31.934 38.3996 23.9996C38.3996 16.0652 31.934 9.59961 23.9996 9.59961ZM29.7596 25.0796H25.0796V29.7596C25.0796 30.35 24.59 30.8396 23.9996 30.8396C23.4092 30.8396 22.9196 30.35 22.9196 29.7596V25.0796H18.2396C17.6492 25.0796 17.1596 24.59 17.1596 23.9996C17.1596 23.4092 17.6492 22.9196 18.2396 22.9196H22.9196V18.2396C22.9196 17.6492 23.4092 17.1596 23.9996 17.1596C24.59 17.1596 25.0796 17.6492 25.0796 18.2396V22.9196H29.7596C30.35 22.9196 30.8396 23.4092 30.8396 23.9996C30.8396 24.59 30.35 25.0796 29.7596 25.0796Z" fill="#687181"/>
                            </svg>
                            
                    </button>
                  </template>
                </div>
                <div v-if="frontImage" class="flex justify-end mt-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99967 1.33301C4.32634 1.33301 1.33301 4.32634 1.33301 7.99967C1.33301 11.673 4.32634 14.6663 7.99967 14.6663C11.673 14.6663 14.6663 11.673 14.6663 7.99967C14.6663 4.32634 11.673 1.33301 7.99967 1.33301ZM11.1863 6.46634L7.40634 10.2463C7.31301 10.3397 7.18634 10.393 7.05301 10.393C6.91967 10.393 6.79301 10.3397 6.69967 10.2463L4.81301 8.35967C4.61967 8.16634 4.61967 7.84634 4.81301 7.65301C5.00634 7.45967 5.32634 7.45967 5.51967 7.65301L7.05301 9.18634L10.4797 5.75968C10.673 5.56634 10.993 5.56634 11.1863 5.75968C11.3797 5.95301 11.3797 6.26634 11.1863 6.46634Z" fill="#10A83B"/>
                        </svg>
                        
                </div>
              </div>
        
              <!-- Back Copy -->
              <div class="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow">
                <div class="flex justify-between items-center bg-blue-100 py-2 px-3 rounded-t-md">
                  <h3 class="text-gray-700 font-medium text-center">Back copy</h3>
                  <input type="file" accept="image/*" @change="onFileChange('back', $event)" class="hidden" ref="backInput" />
                </div>
                <div class="flex items-center justify-center h-40 bg-white rounded-b-md">
                  <template v-if="backImage">
                    <img :src="backImage" alt="Back Copy" class="h-full object-contain" />
                  </template>
                  <template v-else>
                    <button @click="triggerUpload('back')" class="flex items-center justify-center text-gray-500">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="46" height="46" rx="23" stroke="#FC8A8A" stroke-width="2" stroke-dasharray="4 4"/>
                            <path d="M23.9996 9.59961C16.0652 9.59961 9.59961 16.0652 9.59961 23.9996C9.59961 31.934 16.0652 38.3996 23.9996 38.3996C31.934 38.3996 38.3996 31.934 38.3996 23.9996C38.3996 16.0652 31.934 9.59961 23.9996 9.59961ZM29.7596 25.0796H25.0796V29.7596C25.0796 30.35 24.59 30.8396 23.9996 30.8396C23.4092 30.8396 22.9196 30.35 22.9196 29.7596V25.0796H18.2396C17.6492 25.0796 17.1596 24.59 17.1596 23.9996C17.1596 23.4092 17.6492 22.9196 18.2396 22.9196H22.9196V18.2396C22.9196 17.6492 23.4092 17.1596 23.9996 17.1596C24.59 17.1596 25.0796 17.6492 25.0796 18.2396V22.9196H29.7596C30.35 22.9196 30.8396 23.4092 30.8396 23.9996C30.8396 24.59 30.35 25.0796 29.7596 25.0796Z" fill="#687181"/>
                            </svg>
                            
                    </button>
                  </template>
                </div>
                <div v-if="backImage" class="flex justify-end mt-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99967 1.33301C4.32634 1.33301 1.33301 4.32634 1.33301 7.99967C1.33301 11.673 4.32634 14.6663 7.99967 14.6663C11.673 14.6663 14.6663 11.673 14.6663 7.99967C14.6663 4.32634 11.673 1.33301 7.99967 1.33301ZM11.1863 6.46634L7.40634 10.2463C7.31301 10.3397 7.18634 10.393 7.05301 10.393C6.91967 10.393 6.79301 10.3397 6.69967 10.2463L4.81301 8.35967C4.61967 8.16634 4.61967 7.84634 4.81301 7.65301C5.00634 7.45967 5.32634 7.45967 5.51967 7.65301L7.05301 9.18634L10.4797 5.75968C10.673 5.56634 10.993 5.56634 11.1863 5.75968C11.3797 5.95301 11.3797 6.26634 11.1863 6.46634Z" fill="#10A83B"/>
                        </svg>
                        
                </div>
              </div>
            </div>
          </div>
          <div class="pt-3">
            <button type="submit" class="bg-[#2F6D67] text-white px-6 py-3 rounded-md text-sm mt-6">Save changes</button>
           </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const governmentId = ref({
    idType: 'National Identity Card',
    idNumber: '',
    issueDate: '',
    frontCopy: null,
    backCopy: null,
  })
  
  function uploadFile(type: string) {
    // Handle file upload
  }
  
  function saveChanges() {
    // Handle form submission for government ID information
  }

  const frontImage = ref<string | null>(null)
const backImage = ref<string | null>(null)
const frontInput = ref<HTMLInputElement | null>(null)
const backInput = ref<HTMLInputElement | null>(null)

const onFileChange = (type: 'front' | 'back', event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = () => {
      if (type === 'front') {
        frontImage.value = reader.result as string
      } else if (type === 'back') {
        backImage.value = reader.result as string
      }
    }
    reader.readAsDataURL(file)
  }
}

const triggerUpload = (type: 'front' | 'back') => {
  if (type === 'front' && frontInput.value) {
    frontInput.value.click()
  } else if (type === 'back' && backInput.value) {
    backInput.value.click()
  }
}
  </script>
  