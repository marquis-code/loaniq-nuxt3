<template>
    <main>
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center sticky top-16 bg-white">
          <div class="sm:flex-auto">
            <h1 class="text-base font-semibold leading-6 text-gray-900">Reports</h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all the users in your account including their name, title, email and role.
            </p>
          </div>
          <!-- <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <NuxtLink
              to="/admin/dashboard/user-management/customers/create"
              class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Customers                                                                                      
            </NuxtLink>
          </div> -->
        </div>
        <div class="mt-8 flow-root">
          <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table class="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                      Name
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="(item, index) in items" :key="item.id" :ref="'dropdown-row-' + item.id">
                    <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div class="flex items-center">
                        <div class="h-11 w-11 flex-shrink-0">
                          <img
                            class="h-11 w-11 rounded-full"
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div class="ml-4">
                          <div class="font-medium text-gray-900">{{ item.name }}</div>
                          <div class="mt-1 text-gray-500">{{ item.email }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <div class="text-gray-900">{{ item.title }}</div>
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span
                        class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                        >Active</span
                      >
                    </td>
                    <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">{{ item.role }}</td>
                    <td
                    class="py-4 px-5 relative whitespace-nowrap text-sm text-[#667185]"
                  >
                    <button
                      @click="toggleDropdown(index)"
                      class="inline-flex items-center text-sm font-medium text-[#667185] hover:text-black"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99609 10H10.0036"
                          stroke="#292929"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 10H15.0075"
                          stroke="#1D2739"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 10H5.00748"
                          stroke="#1D2739"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                    <div
                      v-if="activeDropdown === index"
                      class="absolute -top-2 right-10 z-50 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 divide divide-y-[0.5px]"
                      >
                      <li>
                        <a
                          @click.prevent="
                            handleDropdownClick('confirm', item)
                          "
                          href="#"
                          class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                          View customer
                        </a>
                      </li>
                        <li>
                          <a
                            @click.prevent="
                              handleDropdownClick('confirm', item)
                            "
                            href="#"
                            class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Confirm account
                          </a>
                        </li>
                        <li>
                          <a
                            @click.prevent="
                              handleDropdownClick('reject', item)
                            "
                            href="#"
                            class="block flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-gray-100 text-start"
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            Reject account
                          </a>
                        </li>
  
                        <li>
                          <a
                            @click.prevent="
                              handleDropdownClick('delete', item)
                            "
                            href="#"
                            class="block flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-gray-100 text-start"
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                             Delete account
                          </a>
                        </li>
                        <li>
                          <a
                            @click.prevent="
                              handleDropdownClick('edit', item)
                            "
                            href="#"
                            class="block flex items-center gap-x-2 px-4 py-3 text-sm hover:bg-gray-100 text-start"
                          >
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                            Edit account
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                    <!-- <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button @click="toggleDropdown(item.id)" :id="'drop-options-' + item.id">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#4a4a4a"
                          stroke-width="1"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="12" cy="5" r="1"></circle>
                          <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                      </button>
                      <div
                        v-if="openDropdown === item.id"
                        class="absolute right-0 z-10 mt-2 w-40 bg-gray-100 shadow-md rounded-md"
                      >
                        <ul>
                          <li class="p-2 text-sm cursor-pointer flex items-center font-medium gap-x-3" @click="selectOption('view', item)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                            View details</li>
                          <li class="p-2 text-sm cursor-pointer flex items-center font-medium gap-x-3" @click="selectOption('edit', item)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                            Edit</li>
                          <li class="p-2 text-sm cursor-pointer flex items-center font-medium gap-x-3" @click="selectOption('delete', item)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            Delete
                          </li>
                          <li class="p-2 text-sm cursor-pointer flex items-center font-medium gap-x-3" @click="selectOption('approve', item)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            Approve
                          </li>
                          <li class="p-2 text-sm cursor-pointer flex items-center font-medium gap-x-3" @click="selectOption('reject', item)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a4a4a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            Reject
                          </li>
                        </ul>
                      </div>
                    </td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div
      v-if="activeDropdown !== null"
      @click="closeDropdown"
      class="fixed inset-0 z-40 bg-black opacity-25"
    ></div>
  
      <CorePagination class="sticky bottom-0" />
      <ModalsConfirm @close="isApproveModalOpen = false" title="Confirm Approval" :description="`Are you sure you want tot approve ${selectedUser.name ?? 'Nil'} account`" :show="isApproveModalOpen"/>
      <ModalsConfirm  @close="isRejectModalOpen = false" title="Confirm Rejection" :description="`Are you sure you want tot reject ${selectedUser.name ?? 'Nil'} account`" :show="isRejectModalOpen"/>
      <ModalsConfirm  @close="isDeleteModalOpen = false" title="Confirm Delete" :description="`Are you sure you want tot delete ${selectedUser.name ?? 'Nil'} account`" :show="isDeleteModalOpen"/>
      <CoreDrawer :showSideDescription="false" title="Edit Account" description="Please fill the form to edit user account" @close="showEditModal = false" :show="showEditModal" >
       <template #content>
         <section class="p-3">
          <AdminDashboardCreateAgentForm :user="selectedUser" class=""/>
         </section>
       </template>
      </CoreDrawer>
    </main>
    </template>
    
    <script setup lang="ts">
    const items = ref([
      { id: 1, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', title: 'Front-end Developer', role: 'Member' },
      { id: 2, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' },
      { id: 3, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', title: 'Front-end Developer', role: 'Member' },
      { id: 4, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' },
      { id: 5, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', title: 'Front-end Developer', role: 'Member' },
      { id: 6, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' },
      { id: 7, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' },
      { id: 8, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', title: 'Front-end Developer', role: 'Member' },
      { id: 9, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' },
      { id: 10, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', title: 'Front-end Developer', role: 'Member' },
      { id: 11, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' },
      { id: 12, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' },
      { id: 18, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', title: 'Front-end Developer', role: 'Member' },
      { id: 14, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' },
      { id: 15, name: 'Lindsay Walton', email: 'lindsay.walton@example.com', title: 'Front-end Developer', role: 'Member' },
      { id: 16, name: 'John Doe', email: 'john.doe@example.com', title: 'Back-end Developer', role: 'Member' }
    ]);
    
    const selectedUser = ref({})
    
    const isApproveModalOpen = ref(false)
    const isRejectModalOpen = ref(false)
    const isDeleteModalOpen  = ref(false)
    const showEditModal = ref(false)
    
    const openDropdown = ref<number | null>(null);
      const emit = defineEmits(['selected'])
  
      const activeDropdown = ref<number | null>(null);
    
      const toggleDropdown = (index: number) => {
    if (activeDropdown.value === index) {
      activeDropdown.value = null;
    } else {
      activeDropdown.value = index;
    }
  };
  
  const closeDropdown = () => {
    activeDropdown.value = null;
  };
  
  
  const handleDropdownClick = (action: any, item: any) => {
    if (action === "edit") {
      showEditModal.value = true
      // return router.push(`/dashboard/tenant-mgt/${item.id}`);
    }
  
    if (action === "delete") {
      isDeleteModalOpen.value = true
      // return router.push(`/dashboard/tenant-mgt/${item.id}`);
    }
  
    if (action === "reject") {
      isRejectModalOpen.value = true
      // return router.push(`/dashboard/tenant-mgt/${item.id}`);
    }
  
    if (action === "confirm") {
      isApproveModalOpen.value = true
      // return router.push(`/dashboard/tenant-mgt/${item.id}`);
    }
    closeDropdown();
    emit(action, item);
  };
  
  
  
    
    // Close dropdown when clicking outside the specific row
    const handleClickOutside = (event: MouseEvent) => {
      const dropdownId = `drop-options-${openDropdown.value}`;
      const dropdownButton = document.getElementById(dropdownId);
      if (dropdownButton && !dropdownButton.contains(event.target as Node)) {
        openDropdown.value = null;
      }
    };
    
    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });
    
    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
    });
    
    const selectOption = (option: string, item?: any) => {
      selectedUser.value = item
      console.log(item, 'item here')
      if(option === 'view'){
        emit('selected', item)
      }
    
      if(option === 'edit'){
        showEditModal.value = true
        // emit('selected', item)
      }
    
      if(option === 'approve'){
        isApproveModalOpen.value  =  true
        // emit('selected', item)
      }
    
      if(option === 'delete'){
        isDeleteModalOpen.value  =  true
        // emit('selected', item)
      }
    
      if(option === 'reject'){
        isRejectModalOpen.value  =  true
        // emit('selected', item)
      }
      console.log(option);
    };
    </script>
    