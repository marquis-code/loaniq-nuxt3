<template>
<div>
    <main class="flex-1 px-10">
        <div class="relative mx-auto container">
          <div class="">
            <div class="px-4 sm:px-6 lg:px-0">
              <h1 class="text-2xl font-medium tracking-tight text-gray-900">Settings</h1>
            </div>
            <div class="px-4 sm:px-6 lg:px-0">
              <div class="">
                <!-- Tabs -->
                <div class="lg:hidden">
                  <label for="selected-tab" class="sr-only">Select a tab</label>
                  <select id="selected-tab" name="selected-tab" class="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6">
                    <option selected>General</option>
                    <option>Security</option>
                    <option>Features</option>
                    <option>User Limits</option>
                  </select>
                </div>
                <div class="hidden lg:block">
                  <div class="border-b border-gray-200">
                    <nav class="-mb-px flex space-x-8">
                      <!-- Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                      <a href="#" class="whitespace-nowrap border-b-2 border-purple-500 px-1 py-4 text-sm font-medium text-purple-600">General</a>
                      <a href="#" class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Security</a>
                      <a href="#" class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">Features</a>
                      <a href="#" class="whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">User Limit</a>
                    </nav>
                  </div>
                </div>

                <!-- Description list with inline editing -->
                <div class="mt-10 divide-y divide-gray-200">
                  <div class="space-y-1">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                    <p class="max-w-2xl text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
                  </div>
                  <div class="mt-6">
                    <dl class="divide-y divide-gray-200">
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                        <dt class="text-sm font-medium text-gray-500">Name</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow">Chelsea Hagon</span>
                          <span class="ml-4 flex-shrink-0">
                            <button type="button" class="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Update</button>
                          </span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                        <dt class="text-sm font-medium text-gray-500">Photo</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow">
                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                          </span>
                          <span class="ml-4 flex flex-shrink-0 items-start space-x-4">
                            <button type="button" class="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Update</button>
                            <span class="text-gray-300" aria-hidden="true">|</span>
                            <button type="button" class="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Remove</button>
                          </span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                        <dt class="text-sm font-medium text-gray-500">Email</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow">chelsea.hagon@example.com</span>
                          <span class="ml-4 flex-shrink-0">
                            <button type="button" class="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Update</button>
                          </span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                        <dt class="text-sm font-medium text-gray-500">Job title</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow">Human Resources Manager</span>
                          <span class="ml-4 flex-shrink-0">
                            <button type="button" class="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Update</button>
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div class="mt-10 divide-y divide-gray-200">
                  <div class="space-y-1">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Account</h3>
                    <p class="max-w-2xl text-sm text-gray-500">Manage how information is displayed on your account.</p>
                  </div>
                  <div class="mt-6">
                    <dl class="divide-y divide-gray-200">
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                        <dt class="text-sm font-medium text-gray-500">Language</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow">English</span>
                          <span class="ml-4 flex-shrink-0">
                            <button type="button" class="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Update</button>
                          </span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                        <dt class="text-sm font-medium text-gray-500">Date format</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <span class="flex-grow">DD-MM-YYYY</span>
                          <span class="ml-4 flex flex-shrink-0 items-start space-x-4">
                            <button type="button" class="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Update</button>
                            <span class="text-gray-300" aria-hidden="true">|</span>
                            <button type="button" class="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Remove</button>
                          </span>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                        <dt class="text-sm font-medium text-gray-500" id="timezone-option-label">Automatic timezone</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-200" -->
                          <button type="button" class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto" role="switch" aria-checked="true" aria-labelledby="timezone-option-label">
                            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                            <span aria-hidden="true" class="inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                          </button>
                        </dd>
                      </div>
                      <div class="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                        <dt class="text-sm font-medium text-gray-500" id="auto-update-option-label">Auto-update applicant data</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                          <!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-200" -->
                          <button type="button" class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto" role="switch" aria-checked="false" aria-labelledby="auto-update-option-label">
                            <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
                            <span aria-hidden="true" class="inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                          </button>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  </div>  
</template>

<script setup lang="ts">
  definePageMeta({
      layout: 'admin-dashboard'
  })
</script>
