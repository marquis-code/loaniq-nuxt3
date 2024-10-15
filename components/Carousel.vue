 <template>
    <div id="parent" class="relative flex justify-center items-center w-full h-full">
      <!-- Carousel Images -->
      <img
        :src="dynamicImage(currentImage)"
        alt="carousel image"
        class="w-full h-[500px] max-w-3xl "
      />
  
      <!-- Text Overlay -->
      <div class="absolute -bottom-10 left-8 text-white text-left w-full">
        <div class="flex justify-center items-center flex-col">
          <h2 class="text-3xl font-semibold text-center">{{ currentText.title }}</h2>
          <p class="mt-2 text-center max-w-lg mx-auto">{{ currentText.description }}</p>
        </div>
      </div>
  
      <!-- Carousel Navigation Buttons -->
      <div class="absolute -bottom-20 left-1/2 border rounded-full p-1.5 text-xs bg-white transform -translate-x-1/2 flex space-x-2">
        <button
          v-for="(image, index) in images"
          :key="index"
          @click="setCurrentSlide(index)"
          :class="[
            'h-2.5 w-2.5 rounded-full',
            currentSlide === index ? 'bg-[#292929]' : 'bg-gray-500',
          ]"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { dynamicImage } from '@/utils/assets'; // Adjust the path to your image utility
  
  // Carousel Images and Text
  const images = ref([
    'signup1.png',
    'signup2.png',
    'signup3.png',
    // 'signup4.png',
    // 'signup5.png',
  ]);
  
  interface CarouselText {
    title: string;
    description: string;
  }
  
  const texts = ref<CarouselText[]>([
    { title: 'Effortless Home Management', description: 'Take control of your rented home right from your fingertips. Manage everything from maintenance requests to rental payments with ease.' },
    { title: 'Personalized Property Discovery', description: 'Find your dream property with ease! Our search matches you with homes tailored to your preferences.' },
    { title: 'Maintenance Made Simple', description: 'Submit maintenance requests with a few taps and keep track of them easily.' },
    // { title: 'Utility Payments Simplified', description: 'Pay your utility bills on time and keep track of your payments in one place.' },
    // { title: 'Manage Your Home on the Go', description: 'Access all your home management needs from your phone anytime, anywhere.' },
  ]);
  
  // Carousel State
  const currentSlide = ref(0);
  
  // Computed Properties for Current Image and Text
  const currentImage = computed(() => images.value[currentSlide.value]);
  const currentText = computed(() => texts.value[currentSlide.value]);
  
  // Set the current slide when clicking on a navigation dot
  const setCurrentSlide = (index: number) => {
    currentSlide.value = index;
  };
  
  // Auto-slide every 5 seconds
  const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % images.value.length;
  };
  
  onMounted(() => {
    setInterval(nextSlide, 5000);
  });
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  