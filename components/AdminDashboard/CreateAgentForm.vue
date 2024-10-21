<template>
  <div class="space-y-10 divide-y divide-gray-900/10">
    <div :class="[showSideDescription ? 'md:grid-cols-2' : 'md:grid-cols-3']" class="grid grid-cols-1 gap-x-8 gap-y-8">
      <form @submit.prevent="handleSubmit" class="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
        <div class="px-4 py-6 sm:p-8">
          <div class="space-y-3">

            <!-- Last Name Field -->
            <div class="sm:col-span-3">
              <label for="last-name" class="input-label">Last name</label>
              <div class="mt-2">
                <input
                  type="text"
                  v-model="form.name"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="input-field"
                />
              </div>
            </div>

            <!-- Email Field -->
            <div class="sm:col-span-4">
              <label for="email" class="input-label">Email address</label>
              <div class="mt-2">
                <input
                  v-model="form.email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  class="input-field"
                />
              </div>
            </div>

            <!-- Country Field -->
            <div class="sm:col-span-4">
              <label for="country" class="input-label">Country</label>
              <div class="mt-2">
                <select
                  v-model="form.country"
                  id="country"
                  name="country"
                  autocomplete="country-name"
                  class="input-field"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <!-- Street Address Field -->
            <div class="col-span-full">
              <label for="street-address" class="input-label">Street address</label>
              <div class="mt-2">
                <input
                  v-model="form.streetAddress"
                  type="text"
                  name="street-address"
                  id="street-address"
                  autocomplete="street-address"
                  class="input-field"
                />
              </div>
            </div>

            <!-- City Field -->
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="city" class="input-label">City</label>
              <div class="mt-2">
                <input
                  v-model="form.city"
                  type="text"
                  name="city"
                  id="city"
                  autocomplete="address-level2"
                  class="input-field"
                />
              </div>
            </div>

            <!-- State/Province Field -->
            <div class="sm:col-span-2">
              <label for="region" class="input-label">State / Province</label>
              <div class="mt-2">
                <input
                  v-model="form.region"
                  type="text"
                  name="region"
                  id="region"
                  autocomplete="address-level1"
                  class="input-field"
                />
              </div>
            </div>

            <!-- Postal Code Field -->
            <div class="sm:col-span-2">
              <label for="postal-code" class="input-label">ZIP / Postal code</label>
              <div class="mt-2">
                <input
                  v-model="form.postalCode"
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autocomplete="postal-code"
                  class="input-field"
                />
              </div>
            </div>

          </div>
        </div>
        <!-- <div class="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
          <button type="button" class="text-sm font-semibold leading-6 text-gray-900" @click="resetForm">Cancel</button>
          <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Save
          </button>
        </div> -->
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps({
  showSideDescription: {
    type: Boolean,
    default: true
  },
  user: {
    type: Object
  }
});

const form = ref({
  name: '',
  email: '',
  country: '',
  streetAddress: '',
  city: '',
  region: '',
  postalCode: ''
});

const isEditMode = computed(() => Object.keys(props.user).length > 0);

// Populate form when in edit mode
const populateForm = () => {
  if (isEditMode.value) {
    form.value = {
      name: props.user.name || '',
      email: props.user.email || '',
      country: props.user.country || '',
      streetAddress: props.user.streetAddress || '',
      city: props.user.city || '',
      region: props.user.region || '',
      postalCode: props.user.postalCode || '',
    };
  } else {
    resetForm(); // Clear form when in create mode
  }
};

// Reset form fields
const resetForm = () => {
  form.value = {
    name: '',
    email: '',
    country: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: ''
  };
};

// Watch for changes in user prop (e.g., when the modal is reopened)
watch(() => props.user, populateForm);

// Handle form submission
const handleSubmit = () => {
  const formData = { ...form.value };
  // Submit form data (create or edit based on mode)
  console.log('Form submitted:', formData);

  // After submission, reset form if necessary
  resetForm();
};
</script>
